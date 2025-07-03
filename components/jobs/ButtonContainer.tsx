"use client";
import React from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  };

  const addPageButton = (page: number, activeClass: boolean) => {
    return (
      <Button
        key={page}
        variant={activeClass ? "default" : "outline"}
        className="cursor-pointer w-5"
        onClick={() => {
          handlePageClick(Number(page));
        }}
      >
        {page}
      </Button>
    );
  };

  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  const curPage = Number(page);
  return (
    <div className="space-x-1 flex items-center ">
      {/* Prev */}
      <Button
        key={"prev"}
        size="lg"
        variant="outline"
        className="cursor-pointer"
        onClick={() => {
          let prev = curPage - 1;
          if (prev < 1) prev = totalPages;
          handlePageClick(prev);
        }}
      >
        <span>
          <ChevronLeft />
        </span>
        Prev
      </Button>
      {/* Center buttons */}
      <div className="p-2 space-x-1 text-center">
        {pagesArray.map((p) => {
          const active = p === curPage;
          return addPageButton(p, active);
        })}
      </div>
      {/* Next */}
      <Button
        key={"next"}
        size="lg"
        variant="outline"
        className="cursor-pointer"
        onClick={() => {
          let next = curPage + 1;
          if (next > totalPages) next = 1;
          handlePageClick(next);
        }}
      >
        Next
        <span>
          <ChevronRight />
        </span>
      </Button>
    </div>
  );
};

export default ButtonContainer;
