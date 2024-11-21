import JobListings from "@/components/jobListings";
import React from "react";

function page() {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold text-teal-500 shadow-lg">
        Browse Jobs
      </h1>
      <JobListings />
    </div>
  );
}

export default page;
