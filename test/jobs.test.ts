import Job, {JobStatus} from "../src/components/job";
import {expect} from "chai";
import {Source} from "../src/index";

describe('Jobs', function () {
    it('Create valid job', function () {
        const source = new Source();
        source.name = 'name';

        const job = new Job(source, 'worker-id', 1000, null);
        expect(job.source.id).to.equal('src_name');
        expect(job.worker.id).to.equal('worker-id');
        expect(job.attempts).to.equal(0);
        expect(job.emitAttempts).to.equal(0);
        expect(job.untilRetry).to.be.greaterThanOrEqual(0);
        expect(job.status).to.equal(JobStatus.PENDING);
    });
});