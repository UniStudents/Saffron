import {expect} from "chai";
import {Saffron} from "../src/index";
import {JobStatus} from "../src/components/job";

describe('Scheduler', function () {

    const saffron = new Saffron();
    before(function () {
        return saffron.initialize({
            mode: 'main',
            workers: {nodes: 1},
            misc: {log: 'none'}
        });
    });

    it('Initialization', function () {
        // Scheduler has not started, so expect 0 jobs and sources
        expect(saffron.scheduler.isRunning).to.equal(false);
        expect(saffron.scheduler.sources.length).to.equal(0);
        expect(saffron.scheduler.jobs.length).to.equal(0);
    });

    it('Reset sources with invalid path', function () {
        return new Promise(async (resolve) => {
            await saffron.initialize({
                sources: {
                    path: './invalid/sources/path'
                },
            });

            await saffron.scheduler.resetSources();
            expect(saffron.scheduler.isRunning).to.equal(false);
            expect(saffron.scheduler.sources.length).to.equal(0);
            expect(saffron.scheduler.jobs.length).to.equal(0);
            resolve(undefined);
        });
    });

    it('Reset sources', function () {
        return new Promise(async (resolve) => {
            await saffron.initialize({
                sources: {
                    path: './test/sources'
                },
            });

            await saffron.scheduler.resetSources();
            expect(saffron.scheduler.isRunning).to.equal(false);
            expect(saffron.scheduler.sources.length).to.equal(8);
            expect(saffron.scheduler.jobs.length).to.equal(0);
            resolve(undefined);
        });
    });

    it('Reset jobs', function () {
        saffron.scheduler.resetJobs();
        expect(saffron.scheduler.isRunning).to.equal(false);
        expect(saffron.scheduler.sources.length).to.equal(8);
        expect(saffron.scheduler.jobs.length).to.equal(8);
        for(const job of saffron.scheduler.jobs) {
            expect(job.attempts).to.equal(0);
            expect(job.emitAttempts).to.equal(0);
            expect(job.untilRetry).to.be.greaterThanOrEqual(0);
            expect(job.status).to.equal(JobStatus.PENDING);
        }
    });

    it('Replace jobs', function () {
        const oldJobs = saffron.scheduler.jobs;
        oldJobs.length--;

        saffron.scheduler.replaceCurrentJobs(oldJobs);
        expect(saffron.scheduler.isRunning).to.equal(false);
        expect(saffron.scheduler.sources.length).to.equal(8);
        expect(saffron.scheduler.jobs.length).to.equal(7);
        for(const job of saffron.scheduler.jobs) {
            expect(job.attempts).to.equal(0);
            expect(job.emitAttempts).to.equal(0);
            expect(job.untilRetry).to.be.greaterThanOrEqual(0);
            expect(job.status).to.equal(JobStatus.PENDING);
        }
    });

    it('Reset false', function () {
        return new Promise(async resolve => {
            await saffron.scheduler.start(false);
            expect(saffron.scheduler.isRunning).to.equal(true);
            saffron.scheduler.stop();

            expect(saffron.scheduler.isRunning).to.equal(false);
            expect(saffron.scheduler.sources.length).to.equal(8);
            expect(saffron.scheduler.jobs.length).to.equal(7);
            for(const job of saffron.scheduler.jobs) {
                expect(job.attempts).to.equal(0);
                expect(job.emitAttempts).to.equal(0);
                expect(job.untilRetry).to.be.greaterThanOrEqual(0);
                expect(job.status).to.equal(JobStatus.PENDING);
            }

            resolve(undefined);
        });
    });

    it('Start anew', function () {
        this.timeout(15000);
        return new Promise(async resolve => {
            await saffron.initialize({
                scheduler: {
                    jobsInterval: 10000,
                    randomizeInterval: () => 0,
                    noResponseThreshold: 2,
                    heavyJobFailureInterval: 20000
                }
            });

            await saffron.start(true);
            expect(saffron.scheduler.isRunning).to.equal(true);

            setTimeout(() => {
                saffron.stop();
                expect(saffron.scheduler.isRunning).to.equal(false);

                let counter = 0;
                for (const job of saffron.scheduler.jobs) {
                    expect(job.status).to.equal(JobStatus.PENDING);
                    expect(job.untilRetry).to.equal(counter);
                    counter += 1250;
                }

                saffron.start(false);

                setTimeout(() => {
                    saffron.stop();

                    const jobs = saffron.scheduler.jobs;
                    expect(jobs[0].emitAttempts).to.equal(1);
                    expect(jobs[0].untilRetry).to.equal(-2000);
                    expect(jobs[0].status).to.equal(JobStatus.FINISHED);

                    expect(jobs[1].emitAttempts).to.equal(1);
                    expect(jobs[1].untilRetry).to.equal(-750);
                    expect(jobs[1].status).to.equal(JobStatus.FINISHED);

                    let counter = 500;
                    for(let i = 2; i < jobs.length; i++) {
                        expect(jobs[i].emitAttempts).to.equal(0);
                        expect(jobs[i].status).to.equal(JobStatus.PENDING);
                        expect(jobs[i].untilRetry).to.equal(counter);
                        counter += 1250;
                    }

                    resolve(true);
                }, 2500);
            }, 1000);
        });
    });
});