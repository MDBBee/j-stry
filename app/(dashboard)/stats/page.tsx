import ChartContainer from "@/components/stats/ChartContainer";
import StatsContainer from "@/components/stats/StatsContainer";
import { getJobStats, getJobStatsPerMonth } from "@/utils/actions/jobs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// import { toast } from "sonner";

const StatsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    // toast("Please Login to view your Job application Stats");
    redirect("/");
  }
  const statsData = await getJobStats({ clerkId: userId });
  const chartData = await getJobStatsPerMonth({ clerkId: userId });

  if (!statsData || !chartData) {
    return;
  }

  return (
    <div className="space-y-14">
      <StatsContainer data={statsData} />
      <ChartContainer data={chartData} />
    </div>
  );
};
export default StatsPage;
