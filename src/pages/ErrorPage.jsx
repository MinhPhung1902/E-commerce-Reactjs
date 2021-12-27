import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='m-60  flex items-center justify-center'>
            <button className="text-center max-w-sm font-bold text-4xl bg-black rounded-2xl p-5 text-white mb-20">
            <Link to='/Home' href="#">
            House of Phung
                  </Link>
                
                </button>
        </div>
    )
}

export default ErrorPage
