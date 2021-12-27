import React from 'react'

const SignIn = () => {
    return (
        <div className='bg-white border-2 border-gray-400 rounded-3xl m-20 grid place-items-center grid-cols-1 md:grid-cols-2 p-20'>
            <div className='object-cover'>
                <img src="https://cdn-static.farfetch-contents.com/cms-cm/vn/media/3058796/data/0989965915d5a8aa2e6bb2cf18bf757d.jpg?ratio=1x1_messaging-side&minWidth=936" alt="" />
            </div>
            <div>
                <h1 className="font-bold text-3xl text-center text-black uppercase p-8">House of Phung's</h1>
                    <h3 className="text-gray-500 text-center text-xl font-light p-8">Welcome to <strong>House of Goods</strong></h3>
                    <div className="flex flex-col items-center justify-center m-2">
                        <p className='text-gray-400 w-8/12'>Username or email</p>
                        <input type="text"  className='mt-3 border-b border-black w-8/12'/>
                        <p className='text-gray-400 mt-6 w-8/12'>Password</p>
                        <input type="password"  className='mt-3 border-b border-black w-8/12'/>
                    </div>
                    <h4 className='text-gray-500 text-right w-10/12 mt-5'>Forgot Password?</h4>
                    <div className="flex justify-center items-center mt-3">
                    <button className='bg-gray-600 text-white hover:opacity-80 rounded-3xl px-12 py-2 m-3'>Sign In</button>
                    </div>
                    <h2 className='font-bold text-2xl text-center m-2'>OR</h2>
                    <div className="flex flex-col justify-center items-center m-2">
                        <div className="flex bg-white border-gray-400 text-gray-400 border-2 py-3 rounded-2xl w-64 justify-center items-center m-3 cursor-pointer hover:bg-gray-600 hover:border-none hover:text-white">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                            <button className='mx-2'>Sign in with Google</button>
                        </div>
                        <div className="flex bg-blue-500 text-white border-none py-3 rounded-2xl w-64 justify-center items-center m-2 hover:bg-white hover:text-black hover:border-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-204.79995 -341.33325 1774.9329 2047.9995"><path d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373" fill="#1877f2"/><path d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4" fill="#fff"/></svg>
                            <button className='mx-2'>Sign in with Facebook</button>
                        </div>
                    </div>
            </div>
        </div>
        )
    }
    
    export default SignIn
            
          
                   
           
