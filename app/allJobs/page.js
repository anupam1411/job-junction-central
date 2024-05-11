"use client";
import React, { useState, useEffect } from "react";
import JobListing from "@/components/jobListing";
const jobApi = "http://localhost:5000/Jobs";
function Page() {
  const [Jobs, setJobs] = useState([]);
  const [latestJobId, setLatestJobId] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(jobApi);
      const Jobs = result.json().then((json) => {
        console.log(json);
        setJobs(json);
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl">All Jobs</h1>
      <ul className=" flex justify-center flex-wrap">
        {Jobs.map((job) => (
          <JobListing className="" key={job.id} job={job} />
        ))}
      </ul>
    </div>
  );
}

export default Page;
