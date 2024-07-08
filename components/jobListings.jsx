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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Jobs.map((job) => (
        <div key={job.id} className="border border-gray-200 rounded-md p-4">
          <JobListing job={job} />
          <Link
            href={`/allJobs/${job.id}`}
            className="text-blue-500 hover:text-blue-700 mt-2"
          >
            Show More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default JobListings;
