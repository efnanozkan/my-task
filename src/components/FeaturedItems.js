import React from 'react'
import {useState, useEffect } from 'react'
import profile from 'C:/Users/90541/Desktop/my-task/src/components/profile.jpg'
import {AiOutlineHeart} from 'react-icons/ai'


function FeaturedItems() {
  const [items, setİtems] = useState([]);
 
    useEffect(() => {
        fetch("http://localhost:5000/items")
            .then(response => response.json())
            .then(response => setİtems(response))
    }
    , []);

  return (
    <>
     <div className='bg-main-color w-full h-[85rem]  sm:h-[41rem]'> 
     <h1 className='text-left sm:text-center pl-3 sm:pl-2 text-white font-sans pt-8 sm:pt-28 text-4xl'> Featured Items </h1>
     <div className='container mx-auto mt-5 grid md:grid-cols-2 lg:grid-cols-3 px-0 md:px-6 gap-y-80 sm:gap-4'>
    {items.map(item => {
    return <div className='md:flex relative p-1 rounded-lg shadow-sm text-center flex flex-col ' key={item.itemID}> 
    <img src={item.photo} alt='photos' className=" absolute m-2 justify-between mx-auto object-center p-1 sm:w-[55rem] sm:h-[18rem] w-[26.2rem] h-[21rem] mb-6  " /> 
    <h6 className="absolute mt-56 ml-1 mx-auto w-40 bg-white bg-opacity-30 rounded-sm  text-left font-bold text-lg text-black"> {item.itemName} <br/> {item.itemPrice}</h6>
    <div className='relative  top-[294px] sm:top-[280px] h-14 sm:h-11 left-1 w-[410px] sm:w-[395px] p-1 rounded-lg text-center bg-gray-400 '>
    <img alt="name" src={profile} className=" absolute h-9 object-cover rounded-full  w-10 ml-1 " />
    <h2 className='absolute mt-2 sm:row-3 row-1 left-14 font-semibold '> Username </h2>
    <h2 className='absolute mt-2 sm:row-3 row-1 left-80 sm:left-80 md:mx-auto font-sans'> 50 likes </h2>
    <a href="/" className=" absolute  mt-3 sm:mt-2 sm:row-3 row-1 left-[379px] sm:left-[375px] mr-2 text-black "> < AiOutlineHeart size={20} /> </a> 
    </div>
     </div>
     })}   
     </div>
    <button type="button" className="flex text-xl p-2 sm:p-2 pl-28 sm:pl-40 text-white bg-button font-medium rounded-lg mt-[320px] sm:mt-[300px] ml-3 sm:ml-[433px] w-[410px] sm:w-[490px] h-12 text-center "> 
     SHOW MORE ITEMS 
    </button>
     </div>
    <div className='flex bg-space bg-opacity-95 w-full h-9 sm:h-8'>
    </div>
    </>
  )
}

export default FeaturedItems