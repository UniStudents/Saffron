import {expect} from "chai";
import {Job, Saffron, Source} from "../src/index";
import {JobStatus} from "../src/components/job";
import {Dynamic2} from "./abc_dynamics";

describe('Scheduler', function () {
    const SOURCES_SIZE = 12;

    it('Include only / Exclude', function () {
        return new Promise(async (resolve) => {
            const saffron = new Saffron();
            saffron.initialize({
                mode: 'main',
                sources: {
                    path: './test/sources',
                    exclude: ['html1-source']
                },
                workers: {nodes: ['worker1']},
                misc: {log: 'none'}
            });

            await saffron.scheduler.resetSources();
            expect(saffron.scheduler.sources.length).to.equal(SOURCES_SIZE - 1);

            resolve(undefined);
        });
    });

    const saffron = new Saffron();
    it('Initialization', function () {
        saffron.initialize({
            mode: 'main',
            workers: {nodes: ['worker1']},
            misc: {log: 'none'}
        });

        // Scheduler has not started, so expect 0 jobs and sources
        expect(saffron.scheduler.isRunning).to.equal(false);
        expect(saffron.scheduler.sources.length).to.equal(0);
        expect(saffron.scheduler.jobs.length).to.equal(0);
    });

    it('Reset sources with invalid path', function () {
        return new Promise(async (resolve) => {
            saffron.initialize({
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
            saffron.initialize({
                sources: {
                    path: './test/sources'
                },
            });

            await saffron.scheduler.resetSources();
            expect(saffron.scheduler.isRunning).to.equal(false);
            expect(saffron.scheduler.sources.length).to.equal(SOURCES_SIZE);
            expect(saffron.scheduler.jobs.length).to.equal(0);
            resolve(undefined);
        });
    });

    it('Reset jobs', function () {
        saffron.scheduler.resetJobs();
        expect(saffron.scheduler.isRunning).to.equal(false);
        expect(saffron.scheduler.sources.length).to.equal(SOURCES_SIZE);
        expect(saffron.scheduler.jobs.length).to.equal(SOURCES_SIZE);
        for (const job of saffron.scheduler.jobs) {
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
        expect(saffron.scheduler.sources.length).to.equal(SOURCES_SIZE);
        expect(saffron.scheduler.jobs.length).to.equal(SOURCES_SIZE - 1);
        for (const job of saffron.scheduler.jobs) {
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
            expect(saffron.scheduler.sources.length).to.equal(SOURCES_SIZE);
            expect(saffron.scheduler.jobs.length).to.equal(SOURCES_SIZE - 1);
            for (const job of saffron.scheduler.jobs) {
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
            saffron.initialize({
                scheduler: {
                    jobsInterval: SOURCES_SIZE * 1000,
                    randomizeInterval: () => 0,
                    noResponseThreshold: 2,
                    heavyJobFailureInterval: SOURCES_SIZE * 1000 * 2
                }
            });

            // Check jobs in a 2 seconds interval
            saffron.scheduler.checkInterval = 2000;

            await saffron.start(true);
            expect(saffron.scheduler.isRunning).to.equal(true);

            setTimeout(() => {
                saffron.stop();
                expect(saffron.scheduler.isRunning).to.equal(false);

                let counter = 0;
                for (const job of saffron.scheduler.jobs) {
                    expect(job.status).to.equal(JobStatus.PENDING);
                    expect(job.untilRetry).to.equal(counter);
                    counter += 1000;
                }

                saffron.start(false);

                setTimeout(() => {
                    saffron.stop();

                    const jobs = saffron.scheduler.jobs;
                    expect(jobs[0].emitAttempts).to.equal(1);
                    expect(jobs[0].untilRetry).to.equal(-2000);
                    expect(jobs[0].status).to.equal(JobStatus.FINISHED);

                    expect(jobs[1].emitAttempts).to.equal(1);
                    expect(jobs[1].untilRetry).to.equal(-1000);
                    expect(jobs[1].status).to.equal(JobStatus.FINISHED);

                    expect(jobs[2].emitAttempts).to.equal(1);
                    expect(jobs[2].untilRetry).to.equal(0);
                    expect(jobs[2].status).to.equal(JobStatus.FINISHED);

                    let counter = 1000;
                    for (let i = 3; i < jobs.length; i++) {
                        expect(jobs[i].emitAttempts).to.equal(0);
                        expect(jobs[i].status).to.equal(JobStatus.PENDING);
                        expect(jobs[i].untilRetry).to.equal(counter);
                        counter += 1000;
                    }

                    resolve(true);
                }, 2500);
            }, 1000);
        });
    });

    it('Lock/Unlock job', function () {
        this.timeout(5000);
        return new Promise(async (resolve, reject) => {
            saffron.initialize({
                sources: {
                    dynamicSourceFiles: [new Dynamic2()]
                },
                scheduler: {
                    jobsInterval: 1000,
                    randomizeInterval: () => 0,
                    noResponseThreshold: 2,
                    heavyJobFailureInterval: 5000
                }
            });

            const source = await Source.parseSourceFile({
                name: 'test',
                url: 'https://example.com',
                type: 'dynamic',
                scrape: {
                    implementation: 'dynamic-2'
                }
            }, saffron.config);

            saffron.scheduler.sources.push(source);
            saffron.scheduler.jobs.push(new Job(source, 'worker1', 1000, saffron.config));

            await saffron.start(false);

            setTimeout(() => {
                const job = saffron.scheduler.jobs[0];
                expect(job.status).to.equal(JobStatus.FAILED);
                expect(job.attempts).to.equal(0);
                expect(job.errorStack.length).to.equal(1);
                expect(job.errorStack[0].message).to.includes('Error1');

                job.lock();

                setTimeout(() => {
                    expect(job.attempts).to.equal(0);
                    job.unlock();

                    setTimeout(() => {
                        expect(job.attempts).to.equal(1);
                        saffron.stop();
                        resolve(true);
                    }, 1000);
                }, 1000);
            }, 1000);
        });
    });

    it('Do not scan sub folders', function () {
        return new Promise(async (resolve) => {
            saffron.initialize({
                mode: 'main',
                sources: {
                    path: './test/sources',
                    scanSubFolders: false
                }
            });

            await saffron.scheduler.resetSources();
            expect(saffron.scheduler.sources.length).to.equal(0);
            expect(saffron.scheduler.jobs.length).to.equal(0);
            resolve(undefined);
        });
    });
});