"use client";
import React, { useState, useEffect } from "react";
import JobListing from "@/components/jobListing";
import Link from "next/link";
import axios from "axios";

const jobApi = "/api/jobs";
function JobListings() {
  const [Jobs, setJobs] = useState([]);
  const [latestJobId, setLatestJobId] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(jobApi).then((res) => {
        setJobs(res.data);
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul className=" flex justify-center flex-wrap">
        {Jobs.map((job) => (
          <div key={job.id}>
            <JobListing className="" key={job.id} job={job} />
            <Link href={`/allJobs/${job.id}`}>Show More</Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default JobListings;
