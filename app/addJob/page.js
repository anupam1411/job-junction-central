"use client";
import React, { useState } from "react";
import JobForm from "@/components/JobForm";

const AddJob = () => {
  // State to manage form data
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

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to backend or perform desired action
    console.log(formData);
  };

  // Function to handle form field changes
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
};

export default AddJob;
