import React from 'react'
import { Link } from 'react-router-dom'

import Nav from '../nav'

const Sign_up = () => {
    return (
        <div className='h-screen '>
            <Nav />

            <div className="log w-[50%] md:w-[500px] mx-auto bg-white rounded-lg shadow-lg my-20 p-6">
                <h1 className='py-3 text-3xl font-bold'>Sign up</h1>
                <input className='p-3 bg-gray-100 my-3 w-full rounded-lg' type="text" placeholder='Email address' />
                <input className='p-3 bg-gray-100 my-3 w-full rounded-lg' type="text" placeholder='Password' />
                <Link to="/log"><div className="log mx-auto mt-4 p-2 cursor-pointer bg-black text-white text-center border-black border  rounded-lg hover:bg-red-500 hover:text-white hover:border-white hover:transition-all scale-105">Continue</div></ Link>
                <div className="nav mt-4 flex items-center">
                    <h1 className='font-bold'>Already have an account</h1><Link to="/log"><h1 className='ml-2 underline font-bold text-red-500'>Click here</h1></Link>
                </div>
            </div>

        </div>
    )
}

export default Sign_up
