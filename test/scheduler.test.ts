import Scheduler from "../src/modules/scheduler";
import {expect} from "chai";
import {Saffron} from "../src/index";
import {JobStatus} from "../src/components/job";
import Worker from "../src/modules/worker";

describe('Scheduler', async function () {

    const saffron = new Saffron();
    await saffron.initialize({misc: {log: 'none'}});

    const worker = new Worker(saffron);
    worker.start();
    saffron.workers.push(worker);

    const scheduler = new Scheduler(saffron);

    it('Initialization', function () {
        // Scheduler has not started, so expect 0 jobs and sources
        expect(scheduler.isRunning).to.equal(false);
        expect(scheduler.sources.length).to.equal(0);
        expect(scheduler.jobs.length).to.equal(0);
    });

    it('Reset sources with invalid path', function () {
        return new Promise(async (resolve) => {
            await saffron.initialize({
                sources: {
                    path: './invalid/sources/path'
                },
            });

            await scheduler.resetSources();
            expect(scheduler.isRunning).to.equal(false);
            expect(scheduler.sources.length).to.equal(0);
            expect(scheduler.jobs.length).to.equal(0);
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

            await scheduler.resetSources();
            expect(scheduler.isRunning).to.equal(false);
            expect(scheduler.sources.length).to.equal(8);
            expect(scheduler.jobs.length).to.equal(0);
            resolve(undefined);
        });
    });

    it('Reset jobs', function () {
        scheduler.resetJobs();
        expect(scheduler.isRunning).to.equal(false);
        expect(scheduler.sources.length).to.equal(8);
        expect(scheduler.jobs.length).to.equal(8);
        for(const job of scheduler.jobs) {
            expect(job.attempts).to.equal(0);
            expect(job.emitAttempts).to.equal(0);
            expect(job.untilRetry).to.be.greaterThanOrEqual(0);
            expect(job.status).to.equal(JobStatus.PENDING);
        }
    });

    it('Replace jobs', function () {
        const oldJobs = scheduler.jobs;
        oldJobs.length--;

        scheduler.replaceCurrentJobs(oldJobs);
        expect(scheduler.isRunning).to.equal(false);
        expect(scheduler.sources.length).to.equal(8);
        expect(scheduler.jobs.length).to.equal(7);
        for(const job of scheduler.jobs) {
            expect(job.attempts).to.equal(0);
            expect(job.emitAttempts).to.equal(0);
            expect(job.untilRetry).to.be.greaterThanOrEqual(0);
            expect(job.status).to.equal(JobStatus.PENDING);
        }
    });

    it('Reset false', function () {
        return new Promise(async resolve => {
            await scheduler.start(false);
            expect(scheduler.isRunning).to.equal(true);
            scheduler.stop();

            expect(scheduler.isRunning).to.equal(false);
            expect(scheduler.sources.length).to.equal(8);
            expect(scheduler.jobs.length).to.equal(7);
            for(const job of scheduler.jobs) {
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

            await scheduler.start(true);
            expect(scheduler.isRunning).to.equal(true);

            setTimeout(() => {
                scheduler.stop();
                expect(scheduler.isRunning).to.equal(false);




                resolve(undefined);
            }, 1000);
        });
    });
});