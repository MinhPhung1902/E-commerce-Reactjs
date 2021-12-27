import React from 'react'

const Footer = () => {
    return (
        <>
        <div className='bg-neutral-800 text-white grid grid-cols-1 md:grid-cols-3 mt-10 p-10 gap-5'>
            <div>
                <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique non dolore officia nobis aut tempore aperiam sapiente eos facere at recusandae doloremque provident ipsum atque assumenda, nemo fugiat dolor nisi.
                </p>
            </div>
            <div className='ml-10'>
                <h2 className='font-bold text-2xl'>Quick link</h2>
                <ul className='mt-1'>
                    <li className="list-disc"><a href="#">Instagram</a></li >
                    <li className="list-disc"><a href="#">Facebook</a></li >
                    <li className="list-disc"><a href="#">Twitter</a></li >
                    <li className="list-disc"><a href="#">Tiktok</a></li>
                </ul>
            </div>
            <div className='ml-10'>
                <h2 className='font-bold text-2xl'>Quick link</h2>
                <ul className='mt-1'>
                    <li className="list-disc"><a href="#">About Us</a></li >
                    <li className="list-disc"><a href="#">Disclaimer</a></li >
                    <li className="list-disc"><a href="#">Privacy Policy</a></li >
                    <li className="list-disc"><a href="#">Term of use</a></li>
                    <li className="list-disc"><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
             <div className='bg-neutral-800 text-white'>
                <h2 className='text-center'> &#174; Kanye Phung 2021. All right reserved. </h2>
            </div>
        </>
    )
}

export default Footer
