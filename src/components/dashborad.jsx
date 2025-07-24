import React from "react";
import styled from "styled-components";
import ProjectList from "./ProjectCard";
import Skill from "./Skills";
import CardsList from "./skillcard";
import { NavLink } from "react-router-dom";
import whatsapp from "../assets/whatsapp.png"
import profile from "../assets/pic23.png"
import github from "../assets/github.png"
import linkedln from "../assets/linkedin.png"
import email from "../assets/email.png"
import loc from "../assets/Location.png";
import { Helmet } from "react-helmet";


function Dashboard()
{
    return(
        <div className="">
          <HomePage/>
        </div>
    )
}

function HomePage(){

    return (
        <div className="flex flex-col w-full">
            <Helmet>
                <title>Home | Salal – MERN Stack & Web Developer</title>
                <meta 
                    name="description" 
                    content="I'm Salal, a MERN Stack web developer based in Lahore, Pakistan. Explore my portfolio, skills in React, Node.js, MongoDB, and modern web projects. Let's build clean, fast, and dynamic websites together!" 
                />
                <meta 
                    name="keywords" 
                    content="Salal, MERN stack developer, React developer, Node.js, MongoDB, Lahore developer, frontend developer, web portfolio, freelance web developer" 
                />
                <meta name="author" content="Salal Shabbir" />
                
                {/* Open Graph for Social Sharing */}
                <meta property="og:title" content="Salal – MERN Stack Developer Portfolio" />
                <meta property="og:description" content="Modern and responsive portfolio showcasing Salal's React, MERN Stack, and web development projects." />
                <meta property="og:url" content="https://salal-five.vercel.app/" />
                <meta property="og:type" content="website" />
            </Helmet>

            <div class="grid grid-cols-1  md:grid-cols-[1fr_1fr] gap-4 p-4 w-full">
                <div class="  md:p-10 lg:pt-28 justify-center items-center order-last md:order-first">
                    <p className="text-3xl text-white mb-3">
                        Hello, I'm Salal A Web Developer
                    </p>
                    <p className="text-white">
                        A Mern Stack web developer skilled in building static and dynamic websites using React, JavaScript, Nodejs , express js , mongodb. 
                        I focus on creating clean, responsive, and interactive user interfaces tailored to client needs. Let's bring your vision to 
                        life with fast and modern web solutions!
                    </p>
                    <a href="https://drive.google.com/file/d/1xlqqwojIZrxDYpFmZf1-76vAOf3fXViF/view?usp=drive_link" className="btn btn-success m-2 mt-4 mx-3" >View Resume</a>
                    <a href="https://drive.google.com/uc?export=download&id=1xlqqwojIZrxDYpFmZf1-76vAOf3fXViF" className="btn btn-success m-2 mt-4 mx-3" >Download Resume</a>
                    </div>
                <div className=" m-auto relative mt-12 rounded">
                        <svg viewBox="0 0 200 200" className="md:inline hidden  absolute top-0 left-0  z-0 w-96 h-96" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#08BDBA"  d="M42.6,-65.9C57.4,-56.8,73,-48.6,79.9,-35.8C86.9,-23,85.2,-5.5,81.1,10.5C77,26.5,70.5,41,60.4,51.7C50.2,62.4,36.3,69.3,21.5,74.1C6.7,78.9,-9,81.6,-22.3,77.1C-35.5,72.7,-46.4,61.1,-56.1,49.1C-65.8,37,-74.4,24.5,-78.5,10C-82.5,-4.4,-82,-20.8,-77,-36.5C-71.9,-52.1,-62.3,-67.1,-48.7,-76.7C-35.1,-86.4,-17.6,-90.8,-1.8,-88C13.9,-85.1,27.8,-75,42.6,-65.9Z" transform="translate(100 100)" />
                        </svg>
                        <img src={profile} alt="my pic" className="rop-shadow-[0_0_0_white] drop-shadow-[0_0_3px_white] md:drop-shadow-[0_0_3px_black] relative w-80 h-96 rounded-full md:-translate-y-14 md:translate-x-9" />
                </div>
           </div>

           <div className="w-full p-2 flex md:justify-around items-center flex-col md:flex-row flex-wrap">
             <div className="bg-white text-black mt-3 flex flex-row md:px-10 p-4  px-2 rounded-2xl">
                                    <img src={email}  alt="icon" className="w-16 h-16 me-8"/>
                                    <div className="px-3">
                                        <p className="text-2xl font-bold ">Email: </p>
                                        <p className=""> salalshabbir242@gmail.com</p>
                                    </div>
                            </div>
           <div className="bg-white border text-black mt-3 flex flex-row md:px-10 p-4  px-2 rounded-2xl">
                            <img src={linkedln}  alt="icon" className="w-16 h-16 me-8"/>
                            <div className="px-3">
                                <p className="text-2xl font-bold ">Linkedln Profile</p>
                                <a href="https://www.linkedin.com/in/salal-shabbir-a022172b6" className="cursor-pointer text-blue-950 hover:underline"> click to visit</a>
                            </div>
            </div>
                                            <div className="bg-white text-black mt-3 flex flex-row md:px-10 p-4  px-2 rounded-2xl">
                                                    <img src={loc}  alt="icon" className="w-16 h-16 me-8"/>
                                                    <div className="px-3">
                                                        <p className="text-2xl font-bold ">Address</p>
                                                        <p className=""> Shahadara, Lahore, Pakistan</p>
                                                    </div>
                                            </div>

            </div>

           <div className="p-4 w-full">
                <div className="flex justify-between mx-4">
                    <p className="text-2xl text-white mb-3 ">Skills</p>
                    <NavLink to="/Skills" className="text-2xl  mb-3 cursor-pointer text-blue-900 hover:underline hover:text-blue-600"> View All </NavLink>
                </div>
                <div className="w-full flex justify-center m-auto">
                    <CardsList admin={false}/>
                </div>
           </div>

           <div className="p-4 w-full">
                <div className="flex justify-between mx-4">
                    <p className="text-2xl text-white mb-3 ">Projects</p>
                    <NavLink to="/Projects" className="text-2xl  mb-3 cursor-pointer text-blue-900 hover:underline hover:text-blue-600"> View All </NavLink>
                </div>
                <div>
                        <ProjectList/>
                </div>
           </div>
           

        </div>
    
)
}



export default Dashboard;