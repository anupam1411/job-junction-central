"use client";
import React from "react";
import Jobs from "@/assets/jobList.json";
import Link from "next/link";
import JobListing from "@/components/jobListing";

function Page() {
  console.log(Jobs, "job");

  return (
    <div>
      <h1 className="text-3xl">All Jobs</h1>
      <ul className=" flex justify-center flex-wrap">
        {Jobs.map((job) => (
          <JobListing key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
}

export default Page;
