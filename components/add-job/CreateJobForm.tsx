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
} from "@/utils/types";
import {
  CustomDate,
  CustomFormField,
  CustomFormSelect,
  CustomTextArea,
} from "./FormComponents";
import { createJobAction } from "@/actions/jobs";
import { CREATEJOBCONSTANT } from "@/lib/constants";
import { toast } from "sonner";

function CreateJobForm() {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      ...CREATEJOBCONSTANT,
    },
  });

  async function onSubmit(values: CreateAndEditJobType) {
    const res = await createJobAction(values);

    if (res.success) {
      toast("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
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
          Add A Job
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
            items={[JobStatus.Pending, JobStatus.Interview, JobStatus.Declined]}
            labelText="Job Status"
          />
          {/* Job Mode */}
          <CustomFormSelect
            control={form.control}
            name="mode"
            items={[JobMode.FullTime, JobMode.PartTime, JobMode.Internship]}
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

          <Button type="submit" className="col-span-full">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CreateJobForm;
