
import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { auth , db } from "../Js/firebase.config";
import Loader from './loader';
import { collection, getDocs,deleteDoc,doc } from 'firebase/firestore';


const ProjectList= (props)=>{

  const [data , setData] = useState('');
  useEffect(()=>{
    const fetchSkills = async () => {
      try {
        const skillsCollection = collection(db, "Projects");
        const querySnapshot = await getDocs(skillsCollection);
        const fun = querySnapshot.docs.map((doc)=>({
          id: doc.id,
          ...doc.data(),
        }));
        setData(fun);
        
      }
      catch(e){
        console.log('Erroe Message: ', e.massage)
      }
      
    }
    fetchSkills();
    

  },[])

  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, "Projects", id);
      await deleteDoc(docRef);

      setData(prev => prev.filter(item => item.id !== id));
      alert("✅ Project deleted!");
    } catch (e) {
      console.error("Delete error:", e.message);
      alert("❌ Delete failed!");
    }
  };

  if(!data)
  {
    return (
      <div className="flex w-full h-full flex-col justify-center items-center mt-11">
          <Loader/>
          <p className='text-xl text-white'>Loading ... </p>
      </div>
    )
  }
  return  (
    <div className='flex lg:flex-row justify-center items-center flex-wrap gap-4 px-2'>
        {data.map((i)=>{
            return <ProjectCard 
            status={i.Status} 
            title={i.Title} 
            link={i.gitLink} 
            host={i.liveLink} 
            des = {i.description}
            admin = {props.admin}
            onDelete={()=>(handleDelete(i.id))}
          />
        })}

    </div>
  )

}



function ProjectCard(props) {
  return (
    <div className="w-full shadow-2xl  max-w-sm px-4 py-3 bg-white rounded-xl  dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-800 dark:text-gray-400">Project Details</span>
        <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
          {props.status}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{props.title}</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{props.des}</p>
      </div>

      <div>
        <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
          <span>Visit on:</span>
          <a
            href={props.link}
            className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline"
            tabIndex="0"
            role="link"
          >
            github.com
          </a>
          <span>or</span>
          <a
            href={props.host}
            className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline"
            tabIndex="0"
            role="link"
          >
            hosted app
          </a>
          {props.admin && (
            <>
              <span>or</span>
              <button
                type="button"
                onClick={props.onDelete}
                className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline"
                tabIndex="0"
                role="link"
              >
                Delete
              </button>
            </>
          )}
        </div>

        <div className="flex items-center justify-center mt-4">
          <a
            className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            tabIndex="0"
            role="link"
            aria-label="twitter link"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M496,109.5a201.8...Z" />
            </svg>
          </a>

          <a
            className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            tabIndex="0"
            role="link"
            aria-label="share link"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="..." />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}


export default ProjectList;
