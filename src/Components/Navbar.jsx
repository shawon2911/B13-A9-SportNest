"use client";

import { authClient } from "@/lib/auth-client";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Label,
} from "@heroui/react";
import Link from "next/link";
import React, { useEffect } from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  // console.log(session);
  const user = session?.user;
  // console.log(user);

  useEffect(() => {
  console.log("Navbar rendered");
}, []);





  const handleSignOut = async() => {
    await authClient.signOut();
  }
  return (
    <div className=" py-5 shadow bg-gray-800  text-orange-400">
      <nav className="flex items-center justify-between max-w-7xl mx-auto ">
        <div>
          <h2 className="text-3xl">
            <span>Sport</span>
            <span className="text-white">Nest</span>
          </h2>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-5">
          <li className="hover:text-white">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-white">
            <Link href={"/all-facilities"}>All Facilities</Link>
          </li>
        </ul> 
        
       <div className="">
        {
          user ? <ul className="flex items-center gap-5">
            <li className="hover:text-white">
            <Link href={"/my-bookings"}>My Bookings</Link>
          </li>

          <li className="hover:text-white">
            <Link href={"/add-facility"}>Add Facility</Link>
          </li>
          <li className="hover:text-white">
            <Link href={"/manage-my-facilities"}>Manage Facilities</Link>
          </li>

          <li>
            <Dropdown>
            

              <Button  className={' bg-orange-400 py-6 rounded-md'}>
                <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <h4>{user?.name}</h4>
              </div>
              </Button>

              <Dropdown.Popover>
                <Dropdown.Menu
                  className="text-orange-600"
                  onAction={(key) => console.log(`Selected: ${key}`)}
                >
                  <Dropdown.Item>
                    <Link href={"/my-bookings"}>My Bookings</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href={"/add-facility"}>Add Facility</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href={"/manage-my-facilities"}>
                      Manage Facilities
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button onClick={handleSignOut}
                      className={"bg-red-800 text-white rounded-none w-full"}
                    >
                      Log Out
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </li>
          </ul> : 
          <ul className="flex items-center gap-5">
          <li className="hover:text-white">
            <Link href={"/login"}>Login</Link>
          </li>
          <li className="hover:text-white">
            <Link href={"/signup"}>Sign Up</Link>
          </li>
        </ul>
        }
       </div>
        </div>

        
      </nav>
    </div>
  );
};

export default Navbar;
