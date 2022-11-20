import {Job, JobStatus} from "../src/components/job";
import {expect} from "chai";
import {Source} from "../src/index";

describe('Jobs', function () {
    it('Create valid job', function () {
        const source = new Source();
        source.name = 'name';

        const job = new Job(source, 'worker-id', 1000, null);
        expect(job.id).to.satisfy((x) => x.startsWith('job_name_'));
        expect(job.source.name).to.equal('name');
        expect(job.worker).to.equal('worker-id');
        expect(job.attempts).to.equal(0);
        expect(job.emitAttempts).to.equal(0);
        expect(job.untilRetry).to.be.greaterThanOrEqual(0);
        expect(job.status).to.equal(JobStatus.PENDING);
    });
});