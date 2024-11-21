"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-[#5a1437] p-4">
      <div className="flex items-center">
        <Link href="/">
          <div className="mr-4 text-white font-bold flex justify-center items-center">
            <Image
              src="/logo2-ezgif.com-crop.gif"
              alt="JOB POINT"
              height={50}
              width={50}
              className="rounded-md"
            />
            <div>Career Compass🧭</div>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex space-x-3 text-white font-bold">
        <Link href="/" className="">
          <button className="p-2 bg-[#a96d2d] hover:bg-[#583b1b] rounded-lg drop-shadow-2xl">
            HOME
          </button>
        </Link>
        <Link href="/allJobs" className="">
          <button className="p-2 bg-[#a96d2d] hover:bg-[#583b1b] rounded-lg drop-shadow-2xl">
            JOBS
          </button>
        </Link>
        <Link href="/addJob" className="">
          <button className="p-2 bg-[#a96d2d] hover:bg-[#583b1b] rounded-lg drop-shadow-2xl">
            ADD
          </button>
        </Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <MenuTwoToneIcon />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-gray-800 text-white py-2 rounded-lg shadow-lg md:hidden">
          <Link href="/" className="">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700"
            >
              HOME
            </button>
          </Link>
          <Link href="/allJobs" className="">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700"
            >
              JOBS
            </button>
          </Link>
          <Link href="/addJob" className="">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700"
            >
              ADD
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
