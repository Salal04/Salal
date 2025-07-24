import React from "react";
import ProjectList from "./ProjectCard";
import { Helmet } from "react-helmet";

function Projects()
{
    return (
        <div className="flex flex-col box-border ">
             <Helmet>
                <title>Projects | Salal</title>
                <meta 
                    name="description" 
                    content="Browse through Salal's featured React, MERN Stack, Blazor, and AI-powered web development projects. Includes frontend apps, Node.js, MongoDB, and modern UI projects for all levels." 
                />
                <meta 
                    name="keywords" 
                    content="React projects, MERN Stack, Blazor, AI projects, frontend developer, MongoDB, Node.js, Salal portfolio, web development projects" 
                />
            </Helmet>
                <div className="w-full mt-4 text-center">
                    <p className="text-3xl m-2 font-bold">What I’ve Created</p>
                    <p className="">Here are some of the web projects I’ve worked on recently using React, JavaScript, and other modern technologies</p>
                </div>
                <div className="flex justify-center mt-3">
                    <ProjectList admin ={false}/>
                </div>
        </div>
    )
}

export default Projects;