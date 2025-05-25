// src/Navbar.js
import React from 'react';
import { useState } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [hamopen,setHamopen] = useState(false)
  return (
    <nav className="lg:flex-row navbar sticky top-0 z-10 bg-white px-6 py-4 shadow-md flex flex-col justify-between ">
      <div className="flex justify-between items-center">
        <h1 className=' text-2xl font-bold sm:text-3xl'>NewsBrief</h1> 
        <div>{hamopen?<FaTimes className="lg:hidden" onClick={()=>{setHamopen(!hamopen)}}/>:<FaBars className= 'lg:hidden' onClick={()=>{setHamopen(!hamopen)}}/>}</div>
        
      </div>
      {hamopen && <ul className="lg:hidden absolute left-0 top-16 w-full bg-white px-6 py-4 shadow-md flex flex-col text-center items-center ">
        <li className='hover:underline py-2 px-4 block hover:text-blue-500 font-medium' onClick={()=>{
          setHamopen(!hamopen)
        }}><a href="#sports">Sports</a></li>
        <li className='py-2 px-4 block hover:text-blue-500 font-medium' onClick={()=>{
          setHamopen(!hamopen)
        }}><a href="#business">Business</a></li>
        <li className='py-2 px-4 block hover:text-blue-500 font-medium' onClick={()=>{
          setHamopen(!hamopen)
        }}><a href="#entertainment">Movie</a></li>
        <li className='py-2 px-4 block hover:text-blue-500 font-medium' onClick={()=>{
          setHamopen(!hamopen)
        }}><a href="#science">Science</a></li>
        <li className='py-2 px-4 block hover:text-blue-500 font-medium' onClick={()=>{
          setHamopen(!hamopen)
        }}><a href="#health">Health</a></li>
        <li className='py-2 px-4 block hover:text-blue-500 font-medium' onClick={()=>{
          setHamopen(!hamopen)
        }}><a href="#tech">Tech</a></li>
      </ul>}
      <ul className="hidden  lg:flex justify-between gap-5 items-center">
        <li className='hover:underline py-2 px-4 block hover:text-blue-500 font-medium'
        ><a href="#sports">Sports</a></li>
        <li className=' hover:underline py-2 px-4 block hover:text-blue-500 font-medium'><a href="#business">Business</a></li>
        <li className='hover:underline py-2 px-4 block hover:text-blue-500 font-medium'><a href="#entertainment">Movie</a></li>
        <li className='hover:underline py-2 px-4 block hover:text-blue-500 font-medium'><a href="#science">Science</a></li>
        <li className='hover:underline py-2 px-4 block hover:text-blue-500 font-medium' 
        ><a href="#health">Health</a></li>
        <li className='hover:underline py-2 px-4 block hover:text-blue-500 font-medium' 
        ><a href="#tech">Tech</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
