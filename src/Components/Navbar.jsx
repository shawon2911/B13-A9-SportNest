"use client";


import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" py-5 shadow bg-gray-800  text-orange-400">
      <nav className="flex items-center justify-between max-w-7xl mx-auto ">
        <div>
          <h2 className="text-3xl"><span>Sport</span><span className="text-white">Nest</span></h2>
        </div>
        


        <ul className="flex items-center gap-3">
            
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-facilities"}>All Facilities</Link>
          </li>
          <li>
            <Link href={"/my-bookings"}>My Bookings</Link>
          </li>

          <li>
            <Link href={"/add-facility"}>Add Facility</Link>
          </li>
          <li>
            <Link href={"/manage-my-facilities"}>Manage Facilities</Link>
          </li>
        
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>

          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/signup"}>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
