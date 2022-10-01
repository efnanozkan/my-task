import React from 'react'
import { useState, useEffect } from 'react'
import profile from 'C:/Users/90541/Desktop/my-task/src/components/profile.jpg'
import {MdOutlineStorefront}  from 'react-icons/md'
import { GoGraph } from 'react-icons/go'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'

function TopCreators() {
  const [users, setUards] = useState([]);
 
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(response => response.json())
            .then(response => setUards(response))
    }
    , []);
  return (
    <>
       <div className='bg-main-color w-full h-[90rem] sm:h-[41rem]'>  
       <div className='absolute mt-[70px] sm:mt-9 bg-button w-40 h-2 rounded-sm  ml-3 sm:ml-8  '>
        <h1 className='absolute mt-4 text-3xl text-white font-sans w-96'> Weekly Top Creators </h1> 
        <h2 className='absolute mt-14 text-lg text-white font-sans w-[40rem]'> Cum doctus civibus efficiantur in imperdiet deteurruiesset.</h2>      
       </div>
       <div className='container pt-40 mx-auto grid md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 gap-4'>
    {users.map(user => {
    return <div className='relative bg-white bg-opacity-80 h-[4.5rem] w-96 mt-8 rounded-lg shadow-sm flex flex-col items-center ' key={user.userID}> 
    <img alt="name" src={profile} className=" absolute h-14 object-cover rounded-full w-14 -ml-72 mt-2 " />
    <h6 className="font-semibold items-left text-left text-lg mt-4 -ml-12"> {user.username}</h6>
    <h6 className="mt-0 text-left items-left text-sm text-gray-700 -ml-44"> {user.amountOfSales} </h6>
    <a href="/" className="absolute row-3 mt-6 left-[270px] mr-2 text-black "> <MdOutlineStorefront size={20} /> </a> 
    <a href="/" className="absolute row-3 mt-6 left-[310px] mr-2 text-black "> <GoGraph size={20} /> </a> 
    <a href="/" className="absolute row-3 mt-6 left-[345px] mr-2 text-black "> <AiOutlineUsergroupAdd size={20} /> </a> 
     </div>
     })}   
     </div>
     <div className='absolute mt-7 mx-auto ml-3 sm:ml-[200px] w-[400px] sm:w-[900px] h-32 sm:h-[100px] bg-gradient-to-l from-[#1E1E1E] 12.82%, via-[#C83131] 45.11%, to-[#1E1E1E] 80.54%)'>
      <h1 className='text-white font-sans text-3xl text-center mt-3'> Become a Creator </h1>
      <div className='bg-white text-black pt-2 text-center font-bold text-sm bg-opacity-80 w-32 h-10 sm:w-72 sm:h-8 rounded-md ml-56 sm:ml-[445px] '> JOIN NOW </div>
       </div>
       </div>
    </>
  )
}

export default TopCreators