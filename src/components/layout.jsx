import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

function NavBar()
{

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    return(

    <nav className="bg-gray-800  ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-end ">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                    <button type="button" onClick={toggleDropdown} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="absolute-inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>

                    <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start md:justify-between">
                    <div className="flex shrink-0 items-center">
                    <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 text-lg">
                        <NavLink to="Home"  className={({isActive})=>(`rounded-md px-3 py-2  font-medium text-white ${isActive?'bg-gray-900':'' }`)}>Home</NavLink>
                        <NavLink to="Skills" className={({isActive})=>(`rounded-md px-3 py-2  font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive?'bg-gray-900':'' }`)}>Skills</NavLink>
                        <NavLink to="Education" className={({isActive})=>(`rounded-md px-3 py-2  font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive?'bg-gray-900':'' }`)}>Education</NavLink>
                        <NavLink to="Projects" className={({isActive})=>(`rounded-md px-3 py-2  font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive?'bg-gray-900':'' }`)}>Projects</NavLink>
                        <NavLink to="Contact" className={({isActive})=>(`rounded-md px-3 py-2  font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive?'bg-gray-900':'' }`)}>Contacts</NavLink>
                    </div>
                    </div>
                </div>
            
            </div>
        </div>
        {isOpen && <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
                <NavLink to="Home" className={({isActive})=>(`block rounded-md  px-3 py-2 text-base font-medium text-white ${isActive?'bg-gray-900':'' } `)} aria-current="page">Home</NavLink>
                <NavLink to="Skills" className={({isActive})=>(`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive?'bg-gray-900':'' }`)}>Skills</NavLink>
                <NavLink to="Education" className={({isActive})=>(`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive?'bg-gray-900':'' }`)}>Education</NavLink>
                <NavLink to="Projects" className={({isActive})=>(`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive?'bg-gray-900':'' }`)}>Projects</NavLink>
                <NavLink to="Contact" className={({isActive})=>(`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive?'bg-gray-900':'' }`)}>Contacts</NavLink>
            </div>
        </div>}
    </nav>
)}

function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300 py-4 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Salal. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://github.com/salal" target="_blank" className="hover:text-white">GitHub</a>
            <a href="https://linkedin.com/in/salal" target="_blank" className="hover:text-white">LinkedIn</a>
            <a href="mailto:salal@example.com" className="hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    );
  }
  



function Layout()
{
    return (
        <div className="flex flex-col min-h-screen">
            <div className="w-full">
                <NavBar/>
            </div>
            <div className="flex-grow bg-gray-800">
                <Outlet/>
            </div>
            <div className="bg-gray-800">
                <Footer/>
            </div>
        </div>

    )
}

export default Layout;