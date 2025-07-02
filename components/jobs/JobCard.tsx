import { JobType } from "@/utils/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import DeleteJobBtn from "./DeleteJobBtn";
import JobInfo from "./JobInfo";

const JobCard = ({ job }: { job: JobType }) => {
  const dueDate = job.dueDate
    ? new Date(job.dueDate).toLocaleDateString()
    : null;

  return (
    <Card className="hover:-translate-y-2 transition-all duration-200 hover:shadow-sidebar-ring hover:shadow-md ">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {job.position}
          {dueDate && <JobInfo type="date" text={dueDate} />}
        </CardTitle>
        <CardDescription className="flex items-center justify-between">
          {job.company}
          {dueDate && <span className="text-sm text-gray-500">{dueDate}</span>}
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="mt-4 grid grid-cols-2 gap-4 items-center">
        <JobInfo type="mode" text={job.mode} />
        <JobInfo type="location" text={job.location} />
        <Badge className="w-32">
          <JobInfo type="status" text={job.status} />
        </Badge>
        <Link
          href={`/agent/${job.id}`}
          className="border-2 border-gray-300 p-2 rounded-md  transition-colors hover:border-chart-2"
        >
          <JobInfo type="AI" text="AI refinement" />
        </Link>
      </CardContent>
      <CardFooter className="flex gap-4 items-center justify-between">
        <Button
          asChild
          className="hover:border-chart-2 border-2 hover:bg-muted hover:text-muted-foreground"
        >
          <Link href={`/jobs/${job.id}`}>edit</Link>
        </Button>
        <DeleteJobBtn id={job.id} />
      </CardFooter>
    </Card>
  );
};

export default JobCard;
