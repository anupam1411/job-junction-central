import React, { useState } from "react";
import Link from "next/link";

function JobListing({ job }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="m-1">
      <div
        key={job.id}
        className="m-2 sm:w-[30vw]  w-[85vw] h-fit min-h-[30vh] text-sm bg-gray-200 p-4 rounded-md"
      >
        <Link href={`allJobs/${job.id}`} job={job}>
          <p className="text-gray-800 font-semibold">{job.jobTitle}</p>
        </Link>
        <p>{job.id}</p> <p className="text-gray-600">{job.description}</p>
        <p className="mr-4">Job Type: {job.jobType}</p>
        <div className="flex flex-wrap mt-2">
          <p>Company Name: {job.companyName}</p>
          <p className="mr-4">Salary Range: {job.salaryRange}</p>
          <p className="mr-4">Experience: {job.experience}</p>
          <p className="mr-4">Skills Required: {job.skillsRequired}</p>
        </div>
        {showMore && (
          <div className="mt-2">
            <p className="mr-4">Education: {job.education}</p>

            <p>Remote Option: {job.remoteOption ? "Yes" : "No"}</p>
            <p>Last Date to Apply: {job.lastDateToApply}</p>
            <p>
              Company Website:
              <Link className="text-teal-600" href={job.companyWebsite}>
                {job.companyWebsite}
              </Link>
            </p>
          </div>
        )}
        <button
          className="bg-teal-300 hover:bg-teal-600 text-black hover:text-white font-bold py-2 px-4 rounded-md"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}

export default JobListing;
