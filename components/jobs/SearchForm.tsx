"use client";

import { JobStatus } from "@/utils/types";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "../ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search } from "lucide-react";
import { useEffect, useRef } from "react";

const SearchForm = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "all";

  // Reset form when both params are cleared from the clear-search button
  useEffect(() => {
    if (search === "" && jobStatus === "all") {
      formRef.current?.reset();
    }
  }, [search, jobStatus]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const jobStatus = formData.get("jobStatus") as string;

    const params = new URLSearchParams();
    params.set("search", search);
    params.set("jobStatus", jobStatus);

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <form
      ref={formRef}
      className="border-2 mb-16 p-8 grid sm:grid-cols-2 md:grid-cols-3  gap-4 rounded-lg"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Search Jobs"
        name="search"
        defaultValue={search}
      />
      {/* Use Regular HTML5 select component to fix the form reset issue*/}
      <Select name="jobStatus" defaultValue={jobStatus}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Job Status" />
        </SelectTrigger>
        <SelectContent defaultValue={jobStatus}>
          {["all", ...Object.values(JobStatus)].map((jb) => (
            <SelectItem key={jb} value={jb}>
              {jb}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex gap-2">
        <Button type="submit">
          {" "}
          <Search />
          Search{" "}
        </Button>
        <Button variant="outline" asChild>
          <Link href="/jobs">Clear Search</Link>
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
