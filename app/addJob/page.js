"use client";
import React, { useState } from "react";
import JobForm from "@/components/JobForm";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    jobTitle: "",
    description: "",
    location: "",
    remoteOption: "____",
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch the current jobs to get the maximum ID
      const jobsResponse = await fetch("http://localhost:8000/Jobs");
      const jobs = await jobsResponse.json();
      const maxId = jobs.reduce(
        (max, job) => Math.max(max, parseInt(job.id)),
        0
      );

      // Increment the maximum ID by 1 for the new job
      const newJobId = maxId + 1;

      const postResponse = await fetch("http://localhost:8000/Jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, id: newJobId }), // Include the new ID in the request body
      });

      if (!postResponse.ok) {
        throw new Error("Failed to add job");
      }

      setFormData({
        // Reset form data after successful submission
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

// i edited the code to automatically add new id to new job entry  to ensure perfect mapping
// "use client";
// import React, { useState } from "react";
// import JobForm from "@/components/JobForm";
// import { useRouter } from "next/navigation";
// function Page() {
//   const router = useRouter();
//   // State to manage form data
//   const [formData, setFormData] = useState({
//     jobTitle: "",
//     description: "",
//     location: "",
//     remoteOption: false,
//     jobType: "fulltime",
//     salaryRange: "",
//     skillsRequired: "",
//     experience: "",
//     education: "",
//     cgpaOrPercentage: "",
//     lastDateToApply: "",
//     contactEmail: "",
//     contactPhone: "",
//     companyName: "",
//     companyWebsite: "",
//     companyAddress: "",
//   });

//   // Function to handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8000/Jobs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add job");
//       }
//       setFormData({
//         jobTitle: "",
//         description: "",
//         location: "",
//         remoteOption: false,
//         jobType: "fulltime",
//         salaryRange: "",
//         skillsRequired: "",
//         experience: "",
//         education: "",
//         cgpaOrPercentage: "",
//         lastDateToApply: "",
//         contactEmail: "",
//         contactPhone: "",
//         companyName: "",
//         companyWebsite: "",
//         companyAddress: "",
//       });
//       router.push("/");
//       alert("Job added successfully");
//     } catch (error) {
//       console.error("Error adding job:", error);
//       alert("Failed to add job. Please try again later.");
//     }
//   };

//   // Function to handle form field changes
//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const newValue = type === "checkbox" ? checked : value;
//     setFormData({
//       ...formData,
//       [name]: newValue,
//     });
//   };

//   return (
//     <div>
//       <h2>Add Job</h2>
//       <JobForm
//         formData={formData}
//         onChange={handleChange}
//         onSubmit={handleSubmit}
//       />
//     </div>
//   );
// }

// export default Page;
