import Scheduler from "../src/modules/scheduler/index";
import {expect} from "chai";
import {Saffron} from "../src/index";

describe('Scheduler', function () {
    const saffron = new Saffron();
    saffron.initialize();
    const scheduler = new Scheduler(saffron);

    it('Initialization', function () {
        // Scheduler has not started, so expect 0 jobs and sources
        expect(scheduler.getJobs().length).to.equal(0);
        expect(scheduler.isRunning).to.equal(false);
        expect(scheduler.sources.length).to.equal(0);
    });

    // TODO: Add more tests
});