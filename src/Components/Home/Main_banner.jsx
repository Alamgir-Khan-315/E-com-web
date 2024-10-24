import React from 'react'

const Main_banner = () => {
    return (
        <div>

            <div className="banner bg-pink-200 ">

                <div className="w-[80%] h-[35rem] flex items-center mx-auto justify-between">

                    <div className="txt ">
                        <h1 className='text-5xl font-bold'>Digital Shopping</h1>
                        <h1 className='text-5xl font-bold mt-3'>Hub Junction</h1>
                        <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Itaque quas debitis placeat aliquam totam quam ipsa <br /> eaque commodi ipsam deleniti? Ratione mollitia vitae <br />tempore aliquam velit dolor ipsam alias inventore!</p>
                        <div className="btn w-fit bg-red-100 border-black border rounded-[50px] mt-[20px] p-1 px-4 cursor-pointer font-bold hover:text-white hover:bg-red-500 hover:transition-all transform hover:scale-105">Shop now</div>
                    </div>

                    <div className="pic">Pic</div>

                </div>

            </div>


        </div>
    )
}

export default Main_banner
