"use server";

import db from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import {
  CreateAndEditJobType,
  JobType,
  createAndEditJobSchema,
} from "@/utils/types";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import { formatError } from "@/lib/utils";
import { revalidatePath } from "next/cache";

// import { Prisma } from "@prisma/client";

async function authenticateAndRedirect(): Promise<string> {
  const userDetails = await currentUser();
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }
  // Check if the user exists in the database
  // If not, you might want to create a new user entry or handle it accordingly
  const user = await db.user.findUnique({
    where: { clerkId: userId },
  });

  if (!user && userDetails && userId) {
    await db.user.create({
      data: {
        clerkId: userId,
        email: userDetails?.emailAddresses[0]?.emailAddress || "",
        name: userDetails?.fullName
          ? userDetails.fullName
          : userDetails?.emailAddresses[0]?.emailAddress.split("@")[0] ||
            "No_Name",
      },
    });
  }

  return userId;
}

// Create a job action
export async function createJobAction(values: CreateAndEditJobType) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const userId = await authenticateAndRedirect();
  try {
    createAndEditJobSchema.parse(values);
    await db.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });
    return { success: true, message: "Job entry created successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "something went wrong" };
  }
}

type GetAllJobsActionTypes = {
  search?: string;
  jobStatus?: string;
  page?: number;
  limit?: number;
};

export async function getAllJobsAction({
  search,
  jobStatus,
  page = 1,
  limit = 10,
}: GetAllJobsActionTypes): Promise<{
  jobs: JobType[];
  count: number;
  page: number;
  totalPages: number;
}> {
  try {
    const userId = await authenticateAndRedirect();

    let whereClause: Prisma.JobWhereInput = {
      clerkId: userId,
    };
    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          { company: { contains: search, mode: "insensitive" } },
          { position: { contains: search, mode: "insensitive" } },
          { location: { contains: search, mode: "insensitive" } },
        ],
      };
    }
    if (jobStatus && jobStatus !== "All") {
      whereClause = { ...whereClause, status: jobStatus };
    }

    const jobs = await db.job.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
    });

    return { jobs, count: 0, page: 1, totalPages: 1 };
  } catch (error) {
    console.log("Error fetching jobs:", error);
    const formerr = formatError(error);
    console.log("Error fetching jobs:", formerr);
    return { jobs: [], count: 0, page: 1, totalPages: 1 };
  }
}

// Delete a job action
export async function deleteJobAction(jobId: string): Promise<{
  success: boolean;
  message: string;
}> {
  const userId = await authenticateAndRedirect();
  try {
    const job = await db.job.findUnique({
      where: { id: jobId, clerkId: userId },
    });

    if (!job) {
      throw new Error(
        "Job not found or you do not have permission to delete this job."
      );
    }
    await db.job.delete({
      where: { id: jobId },
    });
    revalidatePath("/jobs");
    return { success: true, message: "Job entry deleted successfully!" };
  } catch (error) {
    return {
      success: false,
      message: formatError(error) || "Something went wrong DELETE_JOB_ACTION",
    };
  }
}

// Get a single job action
export async function getSingleJobAction(
  jobId: string
): Promise<JobType | null> {
  const userId = await authenticateAndRedirect();
  try {
    const job = await db.job.findUnique({
      where: { id: jobId, clerkId: userId },
    });
    return job;
  } catch (error) {
    console.error("Error fetching job:", error);
    return null;
  }
}

// Edit a job action
export async function editJobAction(
  jobId: string,
  values: CreateAndEditJobType
): Promise<{ success: boolean; message: string }> {
  const userId = await authenticateAndRedirect();
  try {
    createAndEditJobSchema.parse(values);
    const job = await db.job.findUnique({
      where: { id: jobId, clerkId: userId },
    });

    if (!job) {
      throw new Error(
        "Job not found or you do not have permission to edit this job."
      );
    }

    await db.job.update({
      where: { id: jobId },
      data: { ...values, clerkId: userId },
    });
    // revalidatePath("/jobs");
    return { success: true, message: "Job entry updated successfully!" };
  } catch (error) {
    console.error("Error updating job:", error);
    return {
      success: false,
      message: formatError(error) || "Something went wrong EDIT_JOB_ACTION",
    };
  }
}
