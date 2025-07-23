import React from "react";
import loc from "../assets/Location.png";
import cell from "../assets/cell.png"
import email from "../assets/email.png"
import whatsapp from "../assets/whatsapp.png"
import github from "../assets/github.png"
import linkedln from "../assets/linkedin.png"

function Contact()
{
    return(
        <div>

            <div className="flex flex-col box-border ">
                <div className="w-full mt-4 text-center">
                    <p className="text-3xl m-2 font-bold">Let’s Connect</p>
                    <p className="">I’m always open to discussing new opportunities, collaborations, or freelance work</p>
            </div>

            <div className="flex justify-center mt-9">

                <div>
                <div className="bg-white text-black mt-3 flex flex-row md:px-10 p-4  px-2 rounded-2xl">
                        <img src={loc}  alt="icon" className="w-16 h-16 me-8"/>
                        <div className="px-3">
                            <p className="text-2xl font-bold ">Address</p>
                            <p className=""> Shahadara, Lahore, Pakistan</p>
                        </div>
                </div>

                <div className="bg-white text-black mt-3 flex flex-row md:px-10 p-4  px-2 rounded-2xl">
                        <img src={cell}  alt="icon" className="w-16 h-16 me-8"/>
                        <div className="px-3">
                            <p className="text-2xl font-bold">Call us: </p>
                            <p className="">+923364531083</p>
                        </div>
                </div>

                <div className="bg-white text-black mt-3 flex flex-row md:px-10 p-4  px-2 rounded-2xl">
                        <img src={email}  alt="icon" className="w-16 h-16 me-8"/>
                        <div className="px-3">
                            <p className="text-2xl font-bold ">Email: </p>
                            <p className=""> salalshabbir242@gmail.com</p>
                        </div>
                </div>

                <div className="bg-white text-black mt-3 flex flex-row md:px-10 p-4  px-2 rounded-2xl">
                        <img src={whatsapp}  alt="icon" className="w-16 h-16 me-8"/>
                        <div className="px-3">
                            <p className="text-2xl font-bold ">Whatsapp</p>
                            <a href="https://wa.me/923364531083" className="cursor-pointer text-blue-950 hover:underline"> click to whatsapp</a>
                        </div>
                </div>

                <div className="bg-white text-black mt-3 flex flex-row md:px-10 p-4  px-2 rounded-2xl">
                        <img src={github}  alt="icon" className="w-16 h-16 me-8"/>
                        <div className="px-3">
                            <p className="text-2xl font-bold ">GitHub</p>
                            <a href="https://github.com/Salal04" className="cursor-pointer text-blue-950 hover:underline"> click to visit</a>
                        </div>
                </div>
                <div className="bg-white text-black mt-3 flex flex-row md:px-10 p-4  px-2 rounded-2xl">
                        <img src={linkedln}  alt="icon" className="w-16 h-16 me-8"/>
                        <div className="px-3">
                            <p className="text-2xl font-bold ">Linkedln Profile</p>
                            <a href="https://www.linkedin.com/in/salal-shabbir-a022172b6" className="cursor-pointer text-blue-950 hover:underline"> click to visit</a>
                        </div>
                </div>
                
            </div> 
            </div> 
        </div>
    </div>
    )
}

export default Contact;