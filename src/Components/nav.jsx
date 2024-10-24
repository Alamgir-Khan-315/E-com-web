import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const nav = () => {

    const [Nav, setNav] = useState(1)
    return (
        <div >
            <div className="nav flex justify-around items-center py-3 font-bold bg-white">
                <div className="logo text-3xl">Logo</div>

                <div className="links flex gap-[2rem] ">
                    <Link to="/"><div onClick={() => { setNav(1) }}>{Nav === 1 ? <div className="1 cursor-pointer border-red-500 border-b-2 text-red-500 p-1 px-2">Shop</div> : <div className="1 cursor-pointer p-1">Shop</div>}</div></Link>
                    <Link to="/men"><div onClick={() => { setNav(2) }}>{Nav === 2 ? <div className="1 cursor-pointer border-red-500 border-b-2 text-red-500 p-1 px-2">Men</div> : <div className="1 cursor-pointer p-1">Men</div>}</div></Link>
                    <Link to="/women"><div onClick={() => { setNav(3) }}>{Nav === 3 ? <div className="1 cursor-pointer border-red-500 border-b-2 text-red-500 p-1 px-2">Women</div> : <div className="1 cursor-pointer p-1">Women</div>}</div></Link>
                    <Link to="/kids"><div onClick={() => { setNav(4) }}>{Nav === 4 ? <div className="1 cursor-pointer border-red-500 border-b-2 text-red-500 p-1 px-2">Kids</div> : <div className="1 cursor-pointer p-1">Kids</div>}</div></Link>
                </div>

                <div className="btn flex gap-[2rem] items-center">
                    <div className="cart cursor-pointer">Cart</div>
                    <Link to="/log"><div className="log p-2 px-5 cursor-pointer border-black border  rounded-[50px] hover:bg-red-500 hover:text-white hover:border-white hover:transition-all scale-105">Log in</div></Link>
                </div>

            </div>
        </div>
    )
}

export default nav

