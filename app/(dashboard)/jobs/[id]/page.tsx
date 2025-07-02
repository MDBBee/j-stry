import EditJobForm from "@/components/jobs/EditJobForm";
import { getSingleJobAction } from "@/utils/actions/jobs";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const JobEditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const job = await getSingleJobAction(id);

  if (!job) {
    toast("Event has been created", {
      action: {
        label: "Undo",
        onClick: () => redirect("/jobs"),
      },
    });
    return;
  }

  return (
    <>
      <EditJobForm job={job} />
    </>
  );
};

export default JobEditPage;
