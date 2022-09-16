import Scheduler from "../src/modules/scheduler/index";
import Source from "../src/components/source";
import {expect} from "chai";

describe('Scheduler', function () {
    const scheduler = Scheduler.getInstance();

    it('Initialization', function () {
        // Scheduler has not started, so expect 0 jobs and sources
        expect(scheduler.getJobs().length).to.equal(0);
        expect(scheduler.isRunning).to.equal(false);
        expect(Source.getSources().length).to.equal(0);
    });

    // TODO: Add more tests
});