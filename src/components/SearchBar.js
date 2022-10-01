import React from 'react'

function SearchBar() {
  return (
    <>
    <div className='bg-main-color h-[41rem] '> 
    <div className='text-white font-sans '> 
      <p className='text-6xl pt-20 sm:pt-40 pl-3 sm:pl-60  '> Discover, collect, <br/> and sell extraordinary NFTs</p> <br></br>
      <p className='text-2xl md:text-left pl-3 sm:pl-60'>on the world's first & largest NFTs marketplace </p>
      <form>   
    <label htmlFor="default-search" className="mb-2 text-ml font-normal text-black"> </label>
    <div className="relative pl-3  sm:pl-60 ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        </div>
        <input type="search" id="default-search" className="block  mt-5 p-4 pl-5 w-96 md:w-[40rem] sm:w-[50rem] text-ml text-black bg-input" placeholder="FIND..." required />
        <button type="submit" className="text-white absolute w-20 text-center ml-72 sm:ml-[34.5rem] bottom-2 bg-button focus:ring-4 focus:outline-none font-medium text-sm px-0 py-2"> SEARCH 
        </button>
    </div>
    </form>
      </div>
    </div>
    <div className='flex bg-space bg-opacity-95 w-full h-9'>
    </div>
    </>
  )
}

export default SearchBar