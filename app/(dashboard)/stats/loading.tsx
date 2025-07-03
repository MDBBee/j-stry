import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const StatsLoadingPage = () => {
  return (
    <>
      <div className="space-y-2">
        <div className="h-12 w-56">
          <Skeleton className="size-full" />
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-2">
          <Card className="bg-transparent border-0 border-sidebar-accent-foreground p-0 h-30">
            <Skeleton className="h-full w-full" />
          </Card>
          <Card className="bg-transparent border-0 border-sidebar-accent-foreground p-0 h-30">
            <Skeleton className="h-full w-full" />
          </Card>
          <Card className="bg-transparent border-0 border-sidebar-accent-foreground p-0 h-30">
            <Skeleton className="h-full w-full" />
          </Card>
          <Card className="bg-transparent border-0 border-sidebar-accent-foreground p-0 h-30">
            <Skeleton className="h-full w-full" />
          </Card>
          <Card className="bg-transparent border-0 border-sidebar-accent-foreground p-0 h-30">
            <Skeleton className="h-full w-full" />
          </Card>
        </div>
      </div>
      <Skeleton className="h-[30vh] w-full mt-8" />
    </>
  );
};

export default StatsLoadingPage;
