"use client";
import React, { useState } from "react";
import JobForm from "@/components/JobForm";
import { useRouter } from "next/navigation";
import axios from "axios";

function Page() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    description: "",
    location: "",
    remoteOption: false,
    jobType: "fulltime",
    salaryRange: "",
    skillsRequired: "",
    experience: "",
    education: "",
    cgpaOrPercentage: "",
    lastDateToApply: "",
    contactEmail: "",
    contactPhone: "",
    companyName: "",
    companyWebsite: "",
    companyAddress: "",
  });

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch the current jobs to get the maximum ID
      const jobsResponse = await axios.get("/api/jobs");
      const jobs = jobsResponse.data;
      const maxId = jobs.reduce(
        (max, job) => Math.max(max, parseInt(job.id)),
        0
      );

      // Increment the maximum ID by 1 for the new job
      const newJobId = maxId + 1;

      const newJob = { ...formData, id: newJobId };

      // Post the new job
      const postResponse = await axios.post("/api/jobs", newJob);

      if (postResponse.status !== 201) {
        throw new Error("Failed to add job");
      }

      setFormData({
        jobTitle: "",
        description: "",
        location: "",
        remoteOption: false,
        jobType: "fulltime",
        salaryRange: "",
        skillsRequired: "",
        experience: "",
        education: "",
        cgpaOrPercentage: "",
        lastDateToApply: "",
        contactEmail: "",
        contactPhone: "",
        companyName: "",
        companyWebsite: "",
        companyAddress: "",
      });

      router.push("/allJobs");
      alert("Job added successfully");
    } catch (error) {
      console.error("Error adding job:", error);
      alert("Failed to add job. Please try again later.");
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <div>
      <h2>Add Job</h2>
      <JobForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Page;
