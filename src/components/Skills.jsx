import React from "react";
import CardsList from "./skillcard";


function Skill()
{
    return(
        <div className="flex flex-col box-border ">
            <div className="w-full mt-4 text-center">
                <p className="text-3xl m-2 font-bold">What I Use</p>
                <p className="">Here are the technologies and tools I’ve mastered to build modern, responsive, and user-friendly websites</p>
            </div>
            <div className="w-full flex justify-center mt-8">
                <CardsList des={false}/>
            </div>
        </div>
    )
}

export default Skill;