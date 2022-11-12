import {expect} from "chai";
import {Job, Saffron, Source} from "../src";

describe('Grid', function () {
    it('Initialization', function () {
        const saffron = new Saffron();
        saffron.initialize({
            mode: 'main',
            misc: {log: 'none'},
            workers: {nodes: 2}
        });

        expect(saffron.grid.workers.length).to.equal(0);
        expect(saffron.grid.isMain).to.equal(true);

        saffron.initialize({
            mode: 'worker'
        });

        expect(saffron.grid.workers.length).to.equal(0);
        expect(saffron.grid.isMain).to.equal(false);
    });

    it('Workers announce/destroy/fire', function () {
        return new Promise(async resolve => {
            const saffron = new Saffron();
            saffron.initialize({
                misc: {log: 'none'},
                workers: {nodes: 2}
            });

            await saffron.start();
            expect(saffron.grid.workers.length).to.equal(2);

            saffron.grid.fireWorker(saffron.grid.workers[0]);
            expect(saffron.grid.workers.length).to.equal(1);

            saffron.stop();
            expect(saffron.grid.workers.length).to.equal(0);

            resolve(true);
        });
    });

    const saffMain = new Saffron();
    const saffWorker = new Saffron();
    before(function () {
        saffMain.initialize({
            mode: 'main',
            misc: {
                log: 'none',
                // To allow Connection test to listen to events before firing
                eventDelay: 2000
            },
            grid: {
                distributed: true,
                useHTTPS: false,
                serverPort: 5000,
                serverHost: '127.0.0.1',
                authToken: '123abc'
            }
        });
        saffWorker.initialize({
            mode: 'worker',
            misc: {
                log: 'none',
                // To allow Connection test to listen to events before firing
                eventDelay: 2000
            },
            grid: {
                distributed: true,
                useHTTPS: false,
                serverPort: 5000,
                serverHost: '127.0.0.1',
                authToken: '123abc'
            }
        });
    });

    it('Connection', function () {
        this.timeout(3000);
        return new Promise(async (resolve, reject) => {
            // Set timeout to check first the auth.failed event
            saffWorker.on('grid.connection.okay', () => setTimeout(resolve, 500));
            saffWorker.on('grid.connection.failed', reject)
            saffMain.on('grid.node.auth.failed', reject);
        });
    });

    it('Communication', function () {
        return new Promise(async (resolve, reject) => {
            saffMain.config.config.misc.eventDelay = 0;
            saffWorker.config.config.misc.eventDelay = 0;

            saffWorker.on('scheduler.job.push', job => {
                if (job.worker !== 'worker-id')
                    reject('Worker id is not matching');
                else resolve(true);
            });

            // Connection wa tested from previous test
            saffMain.grid.emit('scheduler.job.push', new Job(new Source(), 'worker-id', 1000, null));
        });
    });

    after(function () {
        saffMain.grid.node.close();
        (<any>saffWorker.grid.node).disconnect();
    });
});