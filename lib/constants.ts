import { JobMode, JobStatus } from "@/utils/types";

export const CREATEJOBCONSTANT = {
  position: "Full-stack engineer",
  company: "ABB",
  location: "Vaasa, Finland",
  status: JobStatus.Pending,
  mode: JobMode.FullTime,
  description: "Job pays well, you have to be on time!",
  requirements: "MERN stack plus fast-api",
  dueDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
};
