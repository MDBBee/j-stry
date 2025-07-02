import JobsList from "@/components/jobs/JobsList";
import SearchForm from "@/components/jobs/SearchForm";
import { getAllJobsAction } from "@/utils/actions/jobs";

const JobsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string; jobStatus: string }>;
}) => {
  const { search, jobStatus } = await searchParams;
  const allJobs = await getAllJobsAction({ search, jobStatus });

  return (
    <>
      <SearchForm />
      <JobsList allJobs={allJobs.jobs} />
    </>
  );
};
export default JobsPage;
