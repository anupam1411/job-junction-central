import { NextResponse } from "next/server";

const jobsData = [
  {
    id: 1,
    jobTitle: "Software Engineer",
    description: "Develop and maintain software applications.",
    location: "San Francisco, CA",
    remoteOption: false,
    jobType: "fulltime",
    salaryRange: "$80,000 - $100,000",
    skillsRequired: "JavaScript, React, Node.js",
    experience: "2-4 years",
    education: "Bachelor's degree in Computer Science",
    cgpaOrPercentage: "3.5",
    lastDateToApply: "2024-06-30",
    contactEmail: "example@example.com",
    contactPhone: "123-456-7890",
    companyName: "Tech Solutions Inc.",
    companyWebsite: "https://www.techsolutions.com",
    companyAddress: "123 Main St, San Francisco, CA",
  },
  {
    id: 2,
    jobTitle: "Marketing Specialist",
    description: "Create and execute marketing campaigns.",
    location: "New York, NY",
    remoteOption: true,
    jobType: "parttime",
    salaryRange: "$50,000 - $70,000",
    skillsRequired: "Digital Marketing, SEO, Social Media Marketing",
    experience: "1-3 years",
    education: "Bachelor's degree in Marketing",
    cgpaOrPercentage: "3.2",
    lastDateToApply: "2024-07-15",
    contactEmail: "info@example.com",
    contactPhone: "987-654-3210",
    companyName: "Marketing Solutions LLC",
    companyWebsite: "https://www.marketingsolutions.com",
    companyAddress: "456 Oak St, New York, NY",
  },
  {
    id: 3,
    jobTitle: "Data Analyst",
    description: "Analyze and interpret data to drive business decisions.",
    location: "Chicago, IL",
    remoteOption: false,
    jobType: "fulltime",
    salaryRange: "$70,000 - $90,000",
    skillsRequired: "SQL, Python, Data Visualization",
    experience: "3-5 years",
    education: "Bachelor's degree in Statistics or related field",
    cgpaOrPercentage: "3.7",
    lastDateToApply: "2024-07-10",
    contactEmail: "hr@example.com",
    contactPhone: "555-123-4567",
    companyName: "Data Insights Co.",
    companyWebsite: "https://www.datainsights.com",
    companyAddress: "789 Elm St, Chicago, IL",
  },
  {
    id: 4,
    jobTitle: "Graphic Designer",
    description: "Create visual concepts and designs for various projects.",
    location: "Los Angeles, CA",
    remoteOption: true,
    jobType: "fulltime",
    salaryRange: "$60,000 - $80,000",
    skillsRequired: "Adobe Creative Suite, Typography, UI/UX Design",
    experience: "2-4 years",
    education: "Bachelor's degree in Graphic Design or related field",
    cgpaOrPercentage: "3.4",
    lastDateToApply: "2024-07-20",
    contactEmail: "design@example.com",
    contactPhone: "111-222-3333",
    companyName: "Design Studio Inc.",
    companyWebsite: "https://www.designstudio.com",
    companyAddress: "321 Pine St, Los Angeles, CA",
  },
  {
    id: 5,
    jobTitle: "Content Writer",
    description:
      "Produce engaging and informative content for various platforms.",
    location: "Austin, TX",
    remoteOption: false,
    jobType: "parttime",
    salaryRange: "$40,000 - $60,000",
    skillsRequired: "Copywriting, SEO, Content Strategy",
    experience: "1-3 years",
    education: "Bachelor's degree in English, Journalism, or related field",
    cgpaOrPercentage: "3.0",
    lastDateToApply: "2024-07-25",
    contactEmail: "content@example.com",
    contactPhone: "999-888-7777",
    companyName: "Content Creators Ltd.",
    companyWebsite: "https://www.contentcreators.com",
    companyAddress: "567 Maple St, Austin, TX",
  },
  {
    id: 6,
    jobTitle: "Sales Representative",
    description: "Sell products or services to potential customers.",
    location: "Miami, FL",
    remoteOption: false,
    jobType: "fulltime",
    salaryRange: "$50,000 - $70,000",
    skillsRequired: "Sales, Communication, Negotiation",
    experience: "1-3 years",
    education: "High School diploma or equivalent",
    cgpaOrPercentage: "-",
    lastDateToApply: "2024-08-01",
    contactEmail: "sales@example.com",
    contactPhone: "777-666-5555",
    companyName: "Sales Solutions Inc.",
    companyWebsite: "https://www.salessolutions.com",
    companyAddress: "987 Cedar St, Miami, FL",
  },
];
export async function GET(request) {
  return NextResponse.json(jobsData);
}
export async function POST(request) {
  const newJob = await request.json();
  jobsData.push(newJob);
  return NextResponse.json(newJob, { status: 201 });
}
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const jobId = parseInt(searchParams.get("id"), 10);

  const jobIndex = jobsData.findIndex((job) => job.id === jobId);

  if (jobIndex === -1) {
    return NextResponse.json({ message: "Job not found" }, { status: 404 });
  }

  jobsData.splice(jobIndex, 1);

  return NextResponse.json(
    { message: "Job deleted successfully" },
    { status: 200 }
  );
}

// routes.js

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const jobId = parseInt(searchParams.get("id"), 10);
  const updatedJob = await request.json();

  const jobIndex = jobsData.findIndex((job) => job.id === jobId);

  if (jobIndex === -1) {
    return NextResponse.json({ message: "Job not found" }, { status: 404 });
  }

  // Update the job in the jobsData array
  jobsData[jobIndex] = {
    ...jobsData[jobIndex],
    ...updatedJob,
    id: jobId, // Ensure the ID remains unchanged
  };

  return NextResponse.json({
    message: "Job updated successfully",
    job: jobsData[jobIndex],
  });
}
