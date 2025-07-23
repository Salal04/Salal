import React from "react";
import ProjectList from "./ProjectCard";

function Projects()
{
    return (
        <div className="flex flex-col box-border ">
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