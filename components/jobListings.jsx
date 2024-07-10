"use client";
import React, { useState, useEffect } from "react";
import JobListing from "@/components/jobListing";
import Link from "next/link";
import axios from "axios";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const jobApi = "/api/jobs";
function JobListings() {
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(jobApi).then((res) => {
        setJobs(res.data);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
      {Jobs.map((job) => (
        <div key={job.id} className="border border-gray-200 rounded-md p-2">
          <JobListing job={job} />
          <div className="flex justify-center  mt-2">
            <Link
              href={`/allJobs/${job.id}`}
              className="text-blue-500 hover:text-blue-700  "
            >
              Full Description <OpenInNewIcon fontSize="small" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobListings;
