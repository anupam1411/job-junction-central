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
        <button className="p-2 bg-blue-800 hover:bg-blue-900 rounded-lg drop-shadow-2xl  ">
          <Link href="/" className="">
            HOME
          </Link>
        </button>
        <button className="p-2 bg-blue-800 hover:bg-blue-900 rounded-lg drop-shadow-2xl  ">
          <Link href="/allJobs" className="">
            JOBS
          </Link>
        </button>
        <button className="p-2 bg-blue-800 hover:bg-blue-900 rounded-lg drop-shadow-2xl  ">
          <Link href="/addJob" className="">
            ADD
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
