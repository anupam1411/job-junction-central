// JobUpdateForm.jsx

import React, { useState } from "react";
import axios from "axios";

const JobUpdateForm = ({ job, onUpdate }) => {
  const [jobData, setJobData] = useState({
    jobTitle: job.jobTitle,
    description: job.description,
    location: job.location,
    remoteOption: job.remoteOption,
    jobType: job.jobType,
    salaryRange: job.salaryRange,
    skillsRequired: job.skillsRequired,
    experience: job.experience,
    education: job.education,
    cgpaOrPercentage: job.cgpaOrPercentage,
    lastDateToApply: job.lastDateToApply,
    contactEmail: job.contactEmail,
    contactPhone: job.contactPhone,
    companyName: job.companyName,
    companyWebsite: job.companyWebsite,
    companyAddress: job.companyAddress,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`/api/jobs/${job.id}`, jobData);
      console.log("Update response:", response);
      alert("Job updated successfully!");
      onUpdate(response.data); // Update parent component state
    } catch (err) {
      console.error("Error updating job:", err);
      alert("Failed to update the job. Please try again.");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate();
      }}
    >
      <div className="mb-4">
        <label htmlFor="jobTitle" className="block font-semibold">
          Job Title
        </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={jobData.jobTitle}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 mt-1 w-full"
          required
        />
        <label htmlFor="description" className="block font-semibold">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={jobData.description}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 mt-1 w-full"
          required
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Location:
        </label>
        <input
          type="text"
          name="location"
          value={jobData.location}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Remote Option:
        </label>
        <select
          name="remoteOption"
          value={jobData.remoteOption}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="no">select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <span className="text-sm">
          {jobData.remoteOption}, remote option available
        </span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Skills Required:
        </label>
        <input
          type="text"
          name="skillsRequired"
          value={jobData.skillsRequired}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Salary Range:
        </label>
        <input
          type="text"
          name="salaryRange"
          value={jobData.salaryRange}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>{" "}
      <div className="bg-blue-200 p-4 rounded">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Job Type:
          </label>
          <select
            name="jobType"
            value={jobData.jobType}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="fulltime">Full-time</option>
            <option value="parttime">Part-time</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Experience:
          </label>
          <input
            type="text"
            name="experience"
            value={jobData.experience}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Education:
          </label>
          <input
            type="text"
            name="education"
            value={jobData.education}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            CGPA or Percentage Scored:
          </label>
          <input
            type="text"
            name="cgpaOrPercentage"
            value={jobData.cgpaOrPercentage}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Last Date to Apply:
          </label>
          <input
            type="date"
            name="lastDateToApply"
            value={jobData.lastDateToApply}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Contact Email:
          </label>
          <input
            type="email"
            name="contactEmail"
            value={jobData.contactEmail}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Contact Phone:
          </label>
          <input
            type="tel"
            name="contactPhone"
            value={jobData.contactPhone}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="bg-blue-200 p-4 rounded">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Company Name:
          </label>
          <input
            type="text"
            name="companyName"
            value={jobData.companyName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Company Website:
          </label>
          <input
            type="url"
            name="companyWebsite"
            value={jobData.companyWebsite}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Company Address:
          </label>
          <textarea
            name="companyAddress"
            value={jobData.companyAddress}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 rounded-md px-4 py-2 text-white hover:bg-blue-600"
      >
        Update Job
      </button>
    </form>
  );
};

export default JobUpdateForm;
