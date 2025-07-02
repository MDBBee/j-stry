import { PrismaClient } from "@prisma/client";
import data from "./mock-data.json";
import { JobType } from "@/utils/types";
const prisma = new PrismaClient();

async function main() {
  const userId = "";
  const jobs: unknown[] = data.map((job) => ({
    ...job,
    clerkId: userId,
  }));

  try {
    await prisma.job.createMany({
      data: jobs as JobType[],
    });
  } catch (error) {
    console.log("Error seeding data:", error);
  }
  console.log("Seeding completed successfully.");
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (e) => console.log(e));
