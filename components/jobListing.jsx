import React from "react";
import Link from "next/link";

function jobListing({ job }) {
  return (
    <div>
      <li key={job.id} className="m-2 w-[30vw] bg-slate-200">
        <p>{job.id}</p>
        <h2>{job.jobTitle}</h2> <p>{job.description}</p>
        <p>Experience: {job.experience}</p>
        <p>Salary Range: {job.salaryRange}</p>
        <p>Location: {job.location}</p>
        <p>Skills Required: {job.skillsRequired}</p>
        <p>Job Type: {job.jobType}</p>
        <p>Education: {job.education}</p>
        <p>Contact Email: {job.contactEmail}</p>
        <p>Contact Phone: {job.contactPhone}</p>
        <p>Company Name: {job.companyName}</p>
        <p>Remote Option: {job.remoteOption ? "Yes" : "No"}</p>
        <p>Last Date to Apply: {job.lastDateToApply}</p>
        <p>
          Company Website:
          <Link href={job.companyWebsite}>{job.companyWebsite}</Link>
        </p>
        <p>Company Address: {job.companyAddress}</p>
      </li>
    </div>
  );
}

export default jobListing;
