"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
export default function Navbar() {
 
  const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#project",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed bg-[#121212] top-0 left-0 right-0 z-20 opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl text-white font-semibold"
        >
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">{'{ '}M</span>P{' }'}
        </Link>
        <div className="mobile-menu block sm:hidden">
          {!menuOpen ? (
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200 border rounded  border-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5"></Bars3Icon>
            </button>
          ) : (
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center px-3 py-2 text-slate-200 border rounded  border-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5"></XMarkIcon>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((links, index) => (
              <li key={index} className="cursor-pointer">
                <NavLink href={links.path} title={links.title} setMenuOpen={null}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {menuOpen ? <MenuOverlay links={navLinks} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> : null}
    </nav>
  );
}
