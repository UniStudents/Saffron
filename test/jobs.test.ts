import Job from "../src/components/job";
import {JobStatus} from "../src/components/JobStatus";
import {expect} from "chai";

describe('Jobs', function () {
    it('Create valid job', function () {
        const job = Job.createJob('source-id', 'worker-id', 1000);
        expect(job.source.id).to.equal('source-id');
        expect(job.worker.id).to.equal('worker-id');
        expect(job.attempts).to.equal(0);
        expect(job.emitAttempts).to.equal(0);
        expect(job.untilRetry).to.be.greaterThanOrEqual(0);
        expect(job.status).to.equal(JobStatus.PENDING);
    });
});