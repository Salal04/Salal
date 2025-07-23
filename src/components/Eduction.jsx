import React from "react";

function Education()
{
    return(
            <div className="flex flex-col box-border items-center ">
                <div className="w-full mt-4 text-center">
                    <p className="text-3xl m-2 font-bold">Learning Journey</p>
                    <p className="">Here’s a brief overview of my academic background and the degrees I’ve earned so far</p>
                </div>
                <div className="mt-12 m-4 text-black">
                        <div  className="bg-white md:p-10 p-4 rounded-4xl ">
                            <div className="flex justify-between">
                                <p className="text-4xl md:pe-60 pe-10 font-semibold">BS- Software Engneering</p>
                                <p className="text-xl mt-1">2022 - 2026</p>
                            </div>
                            <p>Punjab University collage of information Technology</p>
                            <div className="p-3">
                                <p className=" text-2xl mb-3 font-semibold">Courses</p>
                                <ul className="list-disc list-inside space-y-1 mx-3">
                                    <li>Web Engineering</li>
                                    <li>Software Construction</li>
                                    <li>Data Structure and Algorithims</li>
                                    <li>Object oriented Programing (OOP)</li>
                                    <li>Machine Learning </li>
                                    <li>Computer Vision</li>
                                </ul>
                            </div>

                        </div>
                        <div  className="bg-white md:p-10 p-4 mt-3 rounded-4xl ">
                            <div className="flex justify-between">
                                <p className="text-xl md:pe-60 pe-10 font-semibold">Fsc Pre-Engneering</p>
                                <p className="text-md mt-1">2020 - 2022</p>
                            </div>
                            <p>Government Islamia college civilines Lahore</p>

                        </div>
                        <div  className="bg-white md:p-10 p-4 mt-3 rounded-4xl ">
                            <div className="flex justify-between">
                                <p className="text-xl md:pe-60 pe-10 font-semibold">Matric</p>
                                <p className="text-md mt-1">2018 - 2020</p>
                            </div>
                            <p>Quaid Educational Complex</p>

                        </div>
                </div>
            </div>
    )
}

export default Education;