import z from "zod";

export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
  description: string;
  requirements?: string | null;
  dueDate: Date;
};

export enum JobStatus {
  Pending = "pending",
  Interview = "interview",
  Declined = "declined",
  Offered = "offered",
  Applied = "applied",
}

export enum JobMode {
  FullTime = "full-time",
  PartTime = "part-time",
  Internship = "internship",
  Freelance = "freelance",
  Remote = "remote",
}

export const createAndEditJobSchema = z.object({
  position: z.string().min(2, {
    message: "position must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "company must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "location must be at least 2 characters.",
  }),
  status: z.nativeEnum(JobStatus),
  mode: z.nativeEnum(JobMode),
  description: z
    .string()
    .min(6, "Job description must be at least 6 characters long"),
  requirements: z.string().optional(),
  dueDate: z.date(),
});

export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>;

export type GetAllJobsActionTypes = {
  search?: string;
  jobStatus?: string;
  page?: number;
  limit?: number;
};

export type JOBCONSTANT = {
  position: string;
  company: string;
  location: string;
  status: JobStatus;
  mode: JobMode;
  description: string;
  requirements: string;
  dueDate: Date;
};
