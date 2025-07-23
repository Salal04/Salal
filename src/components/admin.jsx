import React, { useEffect } from "react";
import AddSkill from "./addSkill";
import AdminSkillCard from "./skillcard";
import AddProject from "./AddProject";
import ProjectList from "./ProjectCard";
import RegisterForm from "./SignIn";
import { useState } from "react";
import { auth , db } from "../Js/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import CardsList from "./skillcard";

function AdminPage()
{
    const [username , setname] = useState();
    const [password , setpassword] = useState();
    const [Authenticate , setAuthantication] = useState(false);
    
      useEffect(() => {
        async function getData() {
            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("Password");
    
            console.log("---> username", storedUsername);
            console.log("---> Password", storedPassword);
    
            if (storedUsername && storedPassword) {
                try {
                    const userCredential = await signInWithEmailAndPassword(auth, storedUsername, storedPassword);
                    console.log("Login Success:", userCredential.user);
                    setAuthantication(true);
                } catch (error) {
                    console.error("Login Failed:", error.message);
                    setAuthantication(false);
                }
    
                setname(storedUsername);
                setpassword(storedPassword);
            }
        }
    
        getData();
    }, []);
    

    function logOut()
    {
        console.log('Logout')
        localStorage.clear();
        setname(null)
        setpassword(null)
        setAuthantication(false)
    }

    if(Authenticate == false)
    {
        return (
            <div className="w-screen  flex justify-center items-center">
                <RegisterForm/>
            </div>
        )
    }
    return(
        <div className="bg-gray-800 h-fit lg:mt-4 m-3">
            <p className="text-3xl mx-2 text-white">Skills </p>
            <div className="w-full flex lg:flex-row flex-wrap">
                <div className="md:w-60 w-80">
                    <AddSkill />
                </div>
                <div className="flex lg:flex-row md:gap-2   flex-wrap">
                    <CardsList des={true}  />
                </div>
            </div>
            <p className="text-3xl mx-2 mb-5 text-white"> Projects  </p>
            <div className="flex lg:flex-row flex-col">
                <div className="lg:w-60 w-80">
                    <AddProject />
                </div>  
                <div>
                    <ProjectList admin = {true}/>
                </div>
            </div>
            <button onClick={logOut} className="border px-5 mb-16 mx-10 text-xl text-white rounded-2xl fixed bottom-0 right-0  py-2 bg-red-600 cursor-pointer hover:shadow-2xl hover:shadow-orange-100 hover:scale-105 transition-all duration-700"> LogOut</button>
        </div>
    )
}

export default AdminPage;