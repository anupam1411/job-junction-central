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
        <button>
          <Link href="/allJobs" className="hover:text-gray-500">
            JOBS
          </Link>
        </button>
        <button>
          <Link href="/addJob" className="hover:text-gray-500">
            ADD
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
