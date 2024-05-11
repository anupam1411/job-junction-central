// pages/api/jobs.js

const jobsData = [
  {
    id: 1,
    jobTitle: "Software Engineer",
    // Rest of the job data...
  },
  // Rest of the jobs data...
];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Return the jobs data as JSON
    res.status(200).json(jobsData);
  } else {
    // Handle other HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
