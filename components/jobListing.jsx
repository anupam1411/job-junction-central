import React from "react";
import Link from "next/link";

function JobListing({ job }) {
  return (
    <div>
      <li
        key={job.id}
        className="m-2 w-[30vw] h-[70vh] bg-gray-200 p-4 rounded-md"
      >
        <p className="text-gray-800 font-semibold">{job.jobTitle}</p>
        <p className="text-gray-600">{job.description}</p>
        <div className="flex flex-wrap mt-2">
          <p className="mr-4">Experience: {job.experience}</p>
          <p className="mr-4">Salary Range: {job.salaryRange}</p>
          <p className="mr-4">Location: {job.location}</p>
          <p className="mr-4">Skills Required: {job.skillsRequired}</p>
          <p className="mr-4">Job Type: {job.jobType}</p>
          <p className="mr-4">Education: {job.education}</p>
        </div>
        <div className="mt-2">
          <p>Contact Email: {job.contactEmail}</p>
          <p>Contact Phone: {job.contactPhone}</p>
          <p>Company Name: {job.companyName}</p>
          <p>Remote Option: {job.remoteOption ? "Yes" : "No"}</p>
          <p>Last Date to Apply: {job.lastDateToApply}</p>
          <p>
            Company Website:{" "}
            <Link className="text-blue-600" href={job.companyWebsite}>
              {job.companyWebsite}
            </Link>
          </p>
          <p>Company Address: {job.companyAddress}</p>
        </div>
      </li>
    </div>
  );
}

export default JobListing;
