import React, {useState} from 'react'
import '../data'
import items from '../data'

const CheckOut = ({cart, setCart}) => {
    const [count, setCount] = useState(1)
    const [total, getTotal] = useState([])
    function increment  ()  {
        setCount(count+1)
    }
    function decrement () {
        setCount(count-1)
        if (count < 0) {
            setCount(count = 0)
        }
    }
    const removeFromCart = (itemToRemove) => {
        setCart(cart.filter((item) => item !== itemToRemove))
    }
  
    return (
        <div className='m-10 p-2'>
            <h1 className="text-center font-bold text-3xl">Your Cart</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between border-gray-400 rounded-2xl mt-5">
               {cart.map((item) => {
                   return (
                    <div className='flex m-2'>
                    <img className='max-w-sm' src={item.img} alt="" />
                    <div className='p-3'>
                        <h3 className='text-2xl font-bold'>{item.name}</h3>
                        <p>{item.price}</p>
                        <div class="inline-flex rounded-md shadow-sm mt-2" role="group">
<button type="button" onClick={() => {decrement()}} class="py-2 px-4 text-sm font-medium  bg-white rounded-l-lg border ">
    -
  </button>
  <button type="button" class="py-2 px-4 text-sm font-medium  bg-white border-t border-b ">
    {count}
  </button>
  <button type="button" onClick={() => {increment()}}  class="py-2 px-4 text-sm font-medium  bg-white rounded-r-md border ">
    +
  </button>
</div> 
                    </div>
                    <div className='p-3'>
                        <h3 className='text-2xl font-bold'>Size</h3>
                        <p>XL</p>
                    </div>
                    <div className='p-3'>
                        <button onClick={() => removeFromCart(item)} className='text-red-600 hover:text-red-300 text-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                        </button>
                    </div>
                </div>
                   )
               })}
                
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold p-2">Summary</h3>
                    <div className="flex justify-between p-2">
                        <h4 className='font-light'>Subtotal</h4>
                        <h4 className='font-light'>$1959</h4>
                    </div>
                    <div className="flex justify-between p-2">
                        <h4 className='font-light'>Delivery</h4>
                        <h4 className='font-light'>$24</h4>
                    </div>
                    <hr />
                    <div className="flex justify-between p-3">
                        <h4 className='font-bold'>Total</h4>
                        <h4 className='font-light'>$3189</h4>
                    </div>
                   <button className='bg-gray-700 text-white font-bold text-base hover:translate-x-5 m-5 p-3 flex items-center justify-evenly max-w-sm'>
                       Go to Checkout
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
                       </button>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
