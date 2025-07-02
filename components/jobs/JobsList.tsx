import { JobType } from "@/utils/types";
import JobCard from "./JobCard";
import { Separator } from "../ui/separator";
import Link from "next/link";
// import { useSearchParams } from "next/navigation";

const JobsList = async ({ allJobs }: { allJobs: JobType[] }) => {
  if (allJobs.length === 0) {
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
    <div className="grid md:grid-cols-2 gap-8">
      {allJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobsList;
