import React, {useState} from 'react'
import items from '../data'

const Items = ({categories, filterItems, items, count, handleAddtoCart, addToCart}) => {
   return (
        <div className='m-2 sm:m-10'>
            <h1 className='mt-6 text-3xl font-bold text-center'>New Items</h1>
            <div className="mt-5 flex items-center justify-center">
                {categories.map((categories, index) => {
                    return (
                        <button key={index} onClick={() => filterItems(categories)} className='bg-black rounded-xl text-white px-3 py-1 mr-3 hover:bg-transparent hover:text-black hover:border-2 hover:border-black'>{categories}</button>
                    )
                })}
               
                
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 m-14">
                {items.map(item => {
                    return (
                        <div key={item.id}  className="p-2">
                           
                    <div className="object-cover">
                        <img src={item.img} alt="" />
                    </div>
                    <h2 className="mt-1 text-xl">{item.name}</h2>
                    <div className="flex justify-between">
                        <p className='text-gray-500 mt-1'>{item.price}</p>
                        <button onClick={() => {handleAddtoCart(); addToCart(item)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 right-2 inset-4 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
                        </button>
                       
                    </div>
                </div>
                    )
                }
                )}
                    
             
                 </div>
        </div>
    )
}

export default Items
                
                
           
