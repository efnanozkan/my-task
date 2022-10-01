import React from 'react'
import Menu from './Menu'
import {useState, useEffect} from 'react'

function Market() {

    const [products, setProducts] = useState([]);
 
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(response => response.json())
            .then(response => setProducts(response))
    }
    , []);

  return (
    <>
        <div className='bg-main-color h-max w-full'> {<Menu/>}
        <div className='bg-input h-20 w-52 sm:h-52 sm:w-[500px] sm:mx-auto mx-2 mt-32'> </div> 
        <div className='bg-input h-20 w-96 sm:h-32 sm:w-[900px] sm:mx-auto mx-2 mt-20'> </div> 
         </div>
         <div className='bg-main-color h-[60rem} w-full'>
         <div className='bg-main-color container mx-auto pt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
    {products.map(product => {
    return <div className='bg-main-color rounded-xl flex flex-col pl-2 sm:pl-10' key={product.id}> 
    <img src={product.itemPhoto} className="w-[300px] h-[300px]" />
    <h6 className="font-sans mt-2 text-left text-lg text-white"> {product.itemName}</h6>
    <h6 className="mt-2 text-sm text-left text-white"> {product.itemDescription} </h6>
     </div>
     })}   
     </div>
         </div>
         <div className='bg-main-color w-full h-44'> </div>

        
        

    </>
    
  )
}

export default Market