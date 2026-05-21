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
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    console.log("Navbar rendered");
  }, []);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="py-5 shadow bg-gray-800 text-orange-400">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4">
        
        {/* Logo */}
        <div>
          <h2 className="text-3xl">
            <span>Sport</span>
            <span className="text-white">Nest</span>
          </h2>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-5">
            <li className="hover:text-white">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-white">
              <Link href={"/all-facilities"}>All Facilities</Link>
            </li>
          </ul>

          <div>
            {user ? (
              <ul className="flex items-center gap-5">
                <li className="hover:text-white">
                  <Link href={"/my-bookings"}>My Bookings</Link>
                </li>

                <li className="hover:text-white">
                  <Link href={"/add-facility"}>Add Facility</Link>
                </li>

                <li className="hover:text-white">
                  <Link href={"/manage-my-facilities"}>
                    Manage Facilities
                  </Link>
                </li>

                <li>
                  <Dropdown>
                    <Button className={"bg-orange-400 py-6 rounded-md"}>
                      <div className="flex items-center gap-2">
                        <Avatar size="sm">
                          <Avatar.Image
                            alt={user?.name}
                            src={user?.image}
                          />
                          <Avatar.Fallback>
                            {user?.name.charAt(0)}
                          </Avatar.Fallback>
                        </Avatar>
                        <h4>{user?.name}</h4>
                      </div>
                    </Button>

                    <Dropdown.Popover>
                      <Dropdown.Menu
                        className="text-orange-600"
                        onAction={(key) =>
                          console.log(`Selected: ${key}`)
                        }
                      >
                        <Dropdown.Item>
                          <Link href={"/my-bookings"}>My Bookings</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link href={"/add-facility"}>
                            Add Facility
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link href={"/manage-my-facilities"}>
                            Manage Facilities
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Button
                            onClick={handleSignOut}
                            className={
                              "bg-red-800 text-white rounded-none w-full"
                            }
                          >
                            Log Out
                          </Button>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Popover>
                  </Dropdown>
                </li>
              </ul>
            ) : (
              <ul className="flex items-center gap-5">
                <li className="hover:text-white">
                  <Link href={"/login"}>Login</Link>
                </li>
                <li className="hover:text-white">
                  <Link href={"/signup"}>Sign Up</Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        
        {/* Mobile Menu */}
{mobileOpen && (
  <div className="absolute top-20 left-0 w-full bg-gray-900 md:hidden px-6 py-4 z-50 flex flex-col gap-4">

    {/* Profile info on mobile */}
    {user && (
      <div className="flex items-center gap-3 pb-3 border-b border-gray-700">
        <Avatar size="sm">
          <Avatar.Image alt={user?.name} src={user?.image} />
          <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <span className="text-white font-medium">{user?.name}</span>
      </div>
    )}

    <Link className="hover:text-white" onClick={() => setMobileOpen(false)} href={"/"}>
      Home
    </Link>

    <Link className="hover:text-white" onClick={() => setMobileOpen(false)} href={"/all-facilities"}>
      All Facilities
    </Link>

    {user ? (
      <>
        <Link className="hover:text-white" onClick={() => setMobileOpen(false)} href={"/my-bookings"}>
          My Bookings
        </Link>

        <Link className="hover:text-white" onClick={() => setMobileOpen(false)} href={"/add-facility"}>
          Add Facility
        </Link>

        <Link className="hover:text-white" onClick={() => setMobileOpen(false)} href={"/manage-my-facilities"}>
          Manage Facilities
        </Link>

        <button onClick={handleSignOut} className="bg-red-800 text-white px-4 py-2 w-full rounded">
          Log Out
        </button>
      </>
    ) : (
      <>
        <Link className="hover:text-white" onClick={() => setMobileOpen(false)} href={"/login"}>
          Login
        </Link>
        <Link className="hover:text-white" onClick={() => setMobileOpen(false)} href={"/signup"}>
          Sign Up
        </Link>
      </>
    )}
  </div>
)}
      </nav>
    </div>
  );
};

export default Navbar;