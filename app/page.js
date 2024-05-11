import React from "react";
import Hero from "@/components/Hero";
import JobListings from "@/components/jobListings";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <Hero title="Welcome to JobHub!" subtitle="Find your dream job now!" />
      <main className=" mt-8">
        <JobListings />
      </main>
    </div>
  );
}
