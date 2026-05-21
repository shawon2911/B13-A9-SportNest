"use client";


import { authClient } from "@/lib/auth-client";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const { 
        data: session, 
        
    } = authClient.useSession() 
    // console.log(session);
    const user = session?.user;
    // console.log(user);
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
        
          {/* <li>
            <Link href={"/profile"}>Profile</Link>
          </li> */}


            <Dropdown placement="bottom-end">
  <DropdownTrigger>
    <Avatar
      src={user?.image}
      name={user?.name}
      className="cursor-pointer"
    />
  </DropdownTrigger>

  <DropdownMenu aria-label="Profile Actions">

    <DropdownItem key="profile">
      <Link href="/profile">Profile</Link>
    </DropdownItem>

    <DropdownItem key="bookings">
      <Link href="/my-bookings">My Bookings</Link>
    </DropdownItem>

    <DropdownItem key="add">
      <Link href="/add-facility">Add Facility</Link>
    </DropdownItem>

    <DropdownItem key="manage">
      <Link href="/manage-my-facilities">Manage Facilities</Link>
    </DropdownItem>

    <DropdownItem key="logout" className="text-danger" color="danger">
      <button onClick={handleSignOut}>Log Out</button>
    </DropdownItem>

  </DropdownMenu>
</Dropdown>







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
