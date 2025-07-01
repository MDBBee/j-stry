"use server";

import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { CreateAndEditJobType, createAndEditJobSchema } from "@/utils/types";
import { redirect } from "next/navigation";
// import { Prisma } from "@prisma/client";

async function authenticateAndRedirect(): Promise<string> {
  const session = await auth();

  console.log("Session:", session);

  const { userId } = session;

  if (!userId) {
    redirect("/");
  }
  // Check if the user exists in the database
  // If not, you might want to create a new user entry or handle it accordingly
  const user = await db.user.findUnique({
    where: { clerkId: userId },
  });
  console.log(user);

  // if (!user) {
  //   await db.user.create({
  //     data: {
  //       clerkId: userId,
  //     },
  //   });
  // }

  return userId;
}

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
