import React, { useState } from "react";
import Link from "next/link";

function JobListing({ job }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="m-1">
      {" "}
      <li
        key={job.id}
        className="m-2 sm:w-[30vw] sm:max-h-[60vh] w-[85vw] h-fit min-h-[30vh] text-sm bg-gray-200 p-4 rounded-md"
      >
        <Link href={`allJobs/${job.id}`} job={job}>
          <p className="text-gray-800 font-semibold">{job.jobTitle}</p>
        </Link>
        <p>{job.id}</p>
        <p className="mr-4">Job Type: {job.jobType}</p>
        <div className="flex flex-wrap mt-2">
          <p className="mr-4">Salary Range: {job.salaryRange}</p>
          <p className="mr-4">Location: {job.location}</p>
          <p className="mr-4">Experience: {job.experience}</p>
          <p className="mr-4">Skills Required: {job.skillsRequired}</p>
        </div>
        {showMore && (
          <div className="mt-2">
            <p className="mr-4">Education: {job.education}</p>
            <p>Contact Email: {job.contactEmail}</p>
            <p>Contact Phone: {job.contactPhone}</p>
            <p>Company Name: {job.companyName}</p>
            <p>Remote Option: {job.remoteOption ? "Yes" : "No"}</p>
            <p>Last Date to Apply: {job.lastDateToApply}</p>
            <p>
              Company Website:
              <Link className="text-blue-600" href={job.companyWebsite}>
                {job.companyWebsite}
              </Link>
            </p>
            <p className="text-gray-600">{job.description}</p>
            <p>Company Address: {job.companyAddress}</p>
          </div>
        )}

        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
        <br />
        <br />
      </li>
    </div>
  );
}

export default JobListing;
