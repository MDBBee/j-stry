import JobsList from "@/components/jobs/JobsList";
import SearchForm from "@/components/jobs/SearchForm";
import { getAllJobsAction } from "@/utils/actions/jobs";

const JobsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string; jobStatus: string; page: number }>;
}) => {
  const { search, jobStatus, page } = await searchParams;
  const response = await getAllJobsAction({ search, jobStatus, page });

  return (
    <>
      <SearchForm />
      <JobsList allJobs={response} />
    </>
  );
};
export default JobsPage;
