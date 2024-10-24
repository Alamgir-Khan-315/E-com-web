import React from 'react'
import P_record from '../../assets/Products/Projuct.json'
import { Link } from 'react-router-dom'

const Product = () => {

    const AddItemToLocal = (id, title, price, discription) => {
        const Item = [id, title, price, discription]
        localStorage.setItem("Item", JSON.stringify(Item))
    }

    return (
        <div>

            <div className="container mx-auto my-[100px]">
                <div className="title mx-auto w-fit my-[50px] border-b-2 p-3 border-black font-bold text-3xl">
                    <h1>Popular Products</h1>
                </div>

                <div className="w-[90%] mx-auto">
                    <div className="cards w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[2rem]">

                        {
                            P_record.map(re => {
                                return (

                                    <div className="card bg-white rounded-[20px] pb-3 shadow-lg hover:ease-in-out transition hover:scale-105">
                                        <div className="img w-full h-[250px] bg-gray-300 rounded-t-[20px]">Image</div>
                                        <div className="text p-2 mt-2 text-center">{re.p_title}</div>
                                        <div className="price flex gap-5 px-2 justify-center">
                                            <p className=';'>{re.n_price}</p> <span className='text-red-500'>{re.f_price}</span>
                                        </div>

                                        <div className="btn flex w-fit mx-auto gap-2">
                                            <Link to="/itemDisplay">
                                                <div onClick={() => { AddItemToLocal(re.id, re.p_title, re.n_price, re.discription) }} className="addcart cursor-pointer p-1 px-3 my-2 mt-4 border border-black w-fit rounded-[50px]  hover:bg-red-500 hover:text-white">Details</div>
                                            </Link>
                                            <div onClick={() => { AddItemToLocal() }} className="addcart cursor-pointer p-1 px-3 my-2 mt-4 border border-black w-fit mx-auto rounded-[50px]  hover:bg-red-500 hover:text-white">Add to cart</div>

                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>
                </div>

                <div className="btn mt-[50px] w-fit mx-auto p-2 px-3 font-bold bg-white border cursor-pointer border-black hover:transition-all transform hover:scale-105 hover:bg-red-500 hover:text-white rounded-[50px]">See more</div>

            </div>

        </div>
    )
}

export default Product
