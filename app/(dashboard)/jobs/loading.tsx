import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="mb-16 grid sm:grid-cols-2 md:grid-cols-3  gap-4 rounded-lg">
        <Skeleton className="col-span-full h-20" />
      </div>
      <div className="flex items-center justify-between mb-4">
        <Skeleton className="h-12 w-52" />
        <Skeleton className="h-12 w-52" />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Skeleton className=" h-80" />
        <Skeleton className=" h-80" />
        <Skeleton className=" h-80" />
        <Skeleton className=" h-80" />
      </div>
    </>
  );
};

export default loading;
