import { JobType } from "@/utils/types";
import JobCard from "./JobCard";
import { Separator } from "../ui/separator";
import Link from "next/link";
import ButtonContainer from "./ButtonContainer";

const JobsList = async ({
  allJobs,
}: {
  allJobs: {
    jobs: JobType[];
    count: number;
    page: number;
    totalPages: number;
  };
}) => {
  const page = allJobs.page || 0;
  const totalPages = allJobs.totalPages || 0;
  const count = allJobs.count || 0;

  if (allJobs.jobs.length === 0) {
    return (
      <>
        <div className="text-center text-gray-500 text-xl mb-4">
          No jobs found. Please start by adding or creating a job.{" "}
          <Link
            href="/add-job"
            className="bg-accent text-white px-4 py-2 rounded"
          >
            Add Job(s)
          </Link>
        </div>
        <Separator />
      </>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-xl">Jobs Found: {count}</h2>
        {totalPages < 2 ? null : (
          <ButtonContainer page={page} totalPages={totalPages} />
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {allJobs.jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default JobsList;
