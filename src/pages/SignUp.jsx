import React from 'react'

const SignUp = () => {
    return (
        <div className='flex flex-col justify-center border-gray-400 border-2 rounded-2xl m-20'>
            <h3 className="font-bold text-2xl text-center m-5 p-3">Sign Up</h3>
            <div className="flex flex-col items-center m-2">
                        <p className='text-gray-400'>Full Name</p>
                        <input type="text"  className='mt-3 border-b border-black'/>
                        <p className='text-gray-400 mt-6'>Email</p>
                        <input type="text"  className='mt-3 border-b border-black'/>
                        <p className='text-gray-400 mt-6'>Phone Number</p>
                        <input type="number"  className='mt-3 border-b border-black'/>
                        <p className='text-gray-400 mt-6'>Username</p>
                        <input type="text"  className='mt-3 border-b border-black'/>
                        <p className='text-gray-400 mt-6'>Password</p>
                        <input type="password"  className='mt-3 border-b border-black'/>
                        <p className='text-gray-400 mt-6'>Repeat password</p>
                        <input type="password"  className='mt-3 border-b border-black'/>
            </div>
            <div className="flex justify-center items-center p-3">
            <button className='bg-gray-400  text-white hover:bg-gray-600 p-2 px-5 rounded-2xl'>Sign Up</button>
            </div>
            
        </div>
    )
}

export default SignUp
