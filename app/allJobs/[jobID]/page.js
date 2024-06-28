"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page({ params }) {
  const jobApi = "/api/jobs/";
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(jobApi);
        const jobData = res.data.find(
          (job) => job.id === parseInt(params.jobID)
        );
        console.log(jobData);
        setJob(jobData);
      } catch (err) {
        console.error("Error fetching job data:", err);
        setError("Failed to fetch job data. Please try again.");
      }
    };
    fetchData();
  }, [params.jobID]);

  const handleUpdate = async () => {
    try {
      const updatedJob = { ...job, jobTitle: "Updated Job Title" }; // Modify as needed
      const response = await axios.put(jobApi, updatedJob);
      console.log("Update response:", response);
      alert("Job updated successfully!");
      setJob(response.data); // Update the job data
    } catch (err) {
      console.error("Error updating job:", err);
      alert("Failed to update the job. Please try again.");
    }
  };
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${jobApi}`, {
        params: { id: params.jobID },
      });
      console.log("Delete response:", response);
      alert("Job deleted successfully!");
      setJob(null); // Clear the job data
      router.push("/allJobs");
    } catch (err) {
      console.error("Error deleting job:", err);
      alert("Failed to delete the job. Please try again.");
    }
  };

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <div className="space-x-3 text-white text-sm font-semibold">
            <button
              onClick={handleDelete}
              className="bg-blue-500 rounded drop-shadow-lg p-2 hover:bg-blue-600"
            >
              DELETE JOB
            </button>
            <button className="bg-blue-500 rounded drop-shadow-lg p-2  hover:bg-blue-600">
              EDIT JOB
            </button>
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
    </div>
  );
}

export default Page;
