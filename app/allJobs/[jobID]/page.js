"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function Page({ params }) {
  const jobApi = "/api/jobs/";
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(jobApi).then((res) => {
        const jobData = res.data.find(
          (job) => job.id === parseInt(params.jobID)
        );
        console.log(jobData);
        setJob(jobData);
      });
    };
    fetchData();
  }, [params.jobID]);

  if (!job) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <div key={params.jobID} className="p-4">
        <Link
          href={`allJobs/${params.jobID}`}
          className="text-2xl font-bold text-blue-600 hover:underline"
        >
          {job.jobTitle}
        </Link>
        <p className="text-gray-600 mb-4">{job.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Job Type:</p>
            <p>{job.jobType}</p>
          </div>
          <div>
            <p className="font-semibold">Location:</p>
            <p>{job.location}</p>
          </div>
          <div>
            <p className="font-semibold">Salary Range:</p>
            <p>{job.salaryRange}</p>
          </div>
          <div>
            <p className="font-semibold">Experience:</p>
            <p>{job.experience}</p>
          </div>
          <div>
            <p className="font-semibold">Skills Required:</p>
            <p>{job.skillsRequired}</p>
          </div>
          <div>
            <p className="font-semibold">Education:</p>
            <p>{job.education}</p>
          </div>
          <div>
            <p className="font-semibold">Contact Email:</p>
            <p>{job.contactEmail}</p>
          </div>
          <div>
            <p className="font-semibold">Contact Phone:</p>
            <p>{job.contactPhone}</p>
          </div>
          <div>
            <p className="font-semibold">Company Name:</p>
            <p>{job.companyName}</p>
          </div>
          <div>
            <p className="font-semibold">Remote Option:</p>
            <p>{job.remoteOption ? "Yes" : "No"}</p>
          </div>
          <div>
            <p className="font-semibold">Last Date to Apply:</p>
            <p>{job.lastDateToApply}</p>
          </div>
          <div>
            <p className="font-semibold">Company Website:</p>
            <Link
              href={job.companyWebsite}
              className="text-blue-600 hover:underline"
            >
              {job.companyWebsite}
            </Link>
          </div>
          <div>
            <p className="font-semibold">Company Address:</p>
            <p>{job.companyAddress}</p>
          </div>
        </div>
      </div>
      {params.jobID}
    </div>
  );
}

export default Page;
