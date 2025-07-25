import { auth , db } from "../Js/firebase.config";
import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, getDocs,doc } from 'firebase/firestore';
import Loader from "./loader";
import styled from "styled-components";


const CardsList = (props) => {
  const [skills, setSkills] = useState('');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsCollection = collection(db, "skills");
        const querySnapshot = await getDocs(skillsCollection);

        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  const OnDelete = async (id)=>{
    try{    
      const docRef = doc(db , "skills" , id)
      await deleteDoc(docRef);
      setSkills(prev => prev.filter(item => item.id !== id));
      alert("✅ Project deleted!" , id);
    }catch(e){
      console.log('Error ' ,e.message)
      alert("❌ Delete failed!");
    }
  }

  if(!skills)
  {
    return (
      <div className="flex w-full h-full flex-col justify-center items-center mt-11">
          <Loader/>
          <p className='text-xl text-white'>Loading ... </p>
      </div>
    )
  }

  return (
    <div className='flex flex-wrap w-full justify-center gap-4'>
      {skills.map(skill => (
        <AdminSkillCard
          key={skill.id}
          skill={skill.skill}
          level={skill.level}
          des={props.des}
          OnDelete={()=>{OnDelete(skill.id)}}
        />
      ))}
    </div>
  );
};


const AdminSkillCard = (props) => {
  return (
    <div className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
      <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
        <p className="absolute bottom-6 left-6 text-white text-2xl">Skill</p>
      </div>
      <div className="fill-violet-500 w-12">
        <svg viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
          <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z" />
        </svg>
      </div>
      <h1 className="font-bold text-xl text-black">{props.skill}</h1>
      <p className="text-sm text-zinc-500 leading-6">
        {props.level}
      </p>
      {props.des && <button onClick={props.OnDelete} className='px-4 cursor-pointer mx-2 mt-2 rounded-4xl border border-amber-50 hover:scale-105 transition-all duration-700 py-1 bg-blue-950 bottom-0 text-xl text-white shadow shadow-blue-950 '> Delete </button>}
    </div>
  );
}


export default CardsList;