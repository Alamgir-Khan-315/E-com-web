import React from 'react'

const offer_email = () => {
    return (
        <div className=' bg-white py-28'>

            <div className="w-[80%] text-center mx-auto">
                <h1 className='text-3xl w-fit mx-auto my-5 font-bold'>Get Exclusive offers on Your Email</h1>
                <p className='font-bold'>SUBSCRIVE TO OUR NEWSLETTER AND STAY UPDATED</p>

                <div className="input relative w-[50%] mx-auto justify-center flex my-5">
                    <input className='p-3 px-6 bg-gray-100 w-full rounded-[50px]' type="text" placeholder='Your Email address' />
                    <div className="absolute right-0 p-3 px-5 h-fit cursor-pointer bg-black text-white  rounded-[50px] hover:bg-red-500 hover:text-white hover:border-white hover:transition-all scale-105">Subscribe</div>
                </div>
            </div>

        </div>
    )
}

export default offer_email
