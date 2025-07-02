"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  createAndEditJobSchema,
  CreateAndEditJobType,
  JobMode,
  JobStatus,
  JobType,
} from "@/utils/types";
import {
  CustomDate,
  CustomFormField,
  CustomFormSelect,
  CustomTextArea,
} from "../add-job/FormComponents";
import { editJobAction } from "@/utils/actions/jobs";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { Loader } from "lucide-react";

function EditJobForm({ job }: { job: JobType }) {
  console.log("EditJobForm jobId", job);

  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: job.position,
      company: job.company,
      location: job.location,
      status: job.status as JobStatus,
      mode: job.mode as JobMode,
      description: job.description,
      requirements: job.requirements || "",
      dueDate: job.dueDate
        ? new Date(job.dueDate)
        : new Date(new Date().getTime() + 1000 * 60 * 60 * 24), // Default to one day from now if no due date is set
    },
  });

  async function onSubmit(values: CreateAndEditJobType) {
    const res = await editJobAction(job.id, values);

    if (res.success) {
      toast("Job Entry Edited Successfully!", {
        description: "View Edited Job Entry in jobs page.",
        action: {
          label: "View Jobs",
          onClick: () => redirect("/jobs"),
        },
      });
    } else {
      toast.error(res.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Company */}
        <h2 className="font-semibold text-3xl mb-8 pb-2 border-b-2 text-center">
          Edit Job
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start space-y-8">
          <CustomFormField control={form.control} name="company" />
          {/* Position */}
          <CustomFormField control={form.control} name="position" />
          {/* Location */}
          <CustomFormField control={form.control} name="location" />
          {/* Due date */}
          <CustomDate control={form.control} name="dueDate" />
          {/* Job Status */}
          <CustomFormSelect
            control={form.control}
            name="status"
            items={[...Object.values(JobStatus)]}
            labelText="Job Status"
          />
          {/* Job Mode */}
          <CustomFormSelect
            control={form.control}
            name="mode"
            items={[...Object.values(JobMode)]}
            labelText="Job Type"
          />
          {/* Description */}
          <CustomTextArea
            LabelText="Job Description"
            control={form.control}
            name="description"
          />
          {/* Requirements */}
          <CustomTextArea
            LabelText="Job Requirements"
            control={form.control}
            name="requirements"
          />

          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="col-span-full text-lg disabled:bg-green-800"
          >
            {form.formState.isSubmitting ? (
              <span className="flex items-center gap-2 ">
                <Loader className="animate-spin" /> Editing Job Entry...{" "}
              </span>
            ) : (
              "Edit Job"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default EditJobForm;
