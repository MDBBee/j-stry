"use client";
import React from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ButtonContainer = ({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handlePageClick = (clickedPage: number) => {
    const urlObject = {
      search: (searchParams.get("search") as string) || "",
      jobStatus: (searchParams.get("jobStatus") as string) || "",
      page: String(clickedPage),
    };
    const urlObjectParams = new URLSearchParams(urlObject);
    router.push(`${pathName}?${urlObjectParams.toString()}`);
    // console.log(`${pathName}?${urlObjectParams.toString()}`);
  };

  return (
    <div className="space-x-1">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
        return (
          <Button
            key={p}
            size="icon"
            variant={+page === p ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => handlePageClick(p)}
          >
            {p}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
