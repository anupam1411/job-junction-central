import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-900 p-4">
      <div className="flex items-center">
        <Link href="/">
          <div className="mr-4 text-white font-bold  flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="JOB POINT"
              height={50}
              width={50}
              className="rounded-md"
            />
            <div>JOB POINT</div>
          </div>
        </Link>
      </div>
      <div className="space-x-3 font-medium text-white">
        <Link href="/" className="">
          <button className="p-2 bg-blue-800 hover:bg-blue-900 rounded-lg drop-shadow-2xl  ">
            HOME
          </button>
        </Link>
        <Link href="/allJobs" className="">
          <button className="p-2 bg-blue-800 hover:bg-blue-900 rounded-lg drop-shadow-2xl  ">
            JOBS
          </button>
        </Link>
        <Link href="/addJob" className="">
          <button className="p-2 bg-blue-800 hover:bg-blue-900 rounded-lg drop-shadow-2xl  ">
            ADD
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
