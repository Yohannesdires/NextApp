/* eslint-disable @next/next/no-html-link-for-pages */
// import Link from "next/link";
'use client'
import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";


const Navbar = () => {
 
    const [isClicked, setIsClicked] = useState(false)


    const toggleNavbar = () => {
        setIsClicked(!isClicked)
    }
  return (
    <>
      <nav className="bg-black">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  Logo
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4 ">
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  About
                </a>
                <a
                  href="/services"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Services
                </a>
                <a
                  href="/contact"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white" 
              //  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
              onClick={toggleNavbar}> 
              { isClicked ?  < IoMdCloseCircleOutline  className="size-8"/> : <VscThreeBars className="size-8" />

              }
              </button>
            </div>
          </div>
        </div>
        {
            isClicked && (
                <div className="md:hidden ">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                    <a
                  href="/"
                  className="text-white hover:bg-white block hover:text-black rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-white hover:bg-white block hover:text-black rounded-lg p-2"
                >
                  About
                </a>
                <a
                  href="/services"
                  className="text-white hover:bg-white block hover:text-black rounded-lg p-2"
                >
                  Services
                </a>
                <a
                  href="/contact"
                  className="text-white hover:bg-white block hover:text-black rounded-lg p-2"
                >
                  Contact
                </a>
                    </div>
                </div>
            )
        }
      </nav>
    </>
  );
};

export default Navbar;
