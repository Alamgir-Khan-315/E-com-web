import React from 'react'

const Shoe_banner = () => {
    return (
        <div>

            <div className="banner bg-pink-200 ">

                <div className="w-[80%] h-[30rem] flex items-center mx-auto justify-between">

                    <div className="txt ">
                        <p className='text-sm'>NEW ARRIVALS ONLY</p>
                        <h1 className='text-3xl font-bold'>new</h1>
                        <h1 className='text-3xl font-bold'>collections</h1>
                        <h1 className='text-3xl font-bold'>for everyone</h1>
                        <div className="btn w-fit bg-red-100 border-black border cursor-pointer rounded-[50px] mt-[20px] p-1 px-4 font-bold hover:text-white hover:bg-red-500 hover:transition-all transform hover:scale-105">Latest Collection</div>
                    </div>

                    <div className="pic">Pic</div>

                </div>

            </div>

        </div>
    )
}

export default Shoe_banner
