import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDisplay = () => {

  const Item = JSON.parse(localStorage.getItem("Item"))
  const [Quantity, setQuantity] = useState(1)

  return (
    <div>

      <div className="container mx-auto h-screen">
        <nav>
          <Link to="/"><h1 className='p-2 cursor-pointer font-bold'>Home</h1></Link>
        </nav>

        <h1 className='text-3xl text-center my-14 uppercase'>Product Details</h1>
        <div className="item-body mt-10 flex justify-around items-center">
          <div className="img bg-red-100 w-[20rem] h-[20rem]">
            <img src="" alt="Product img" />
          </div>
          <div className="text p-10">
            <h1 className='text-3xl font-bold uppercase'>{Item[1]}</h1>
            <h1 className='text-3xl font-bold'>{parseInt(Item[2]) * Quantity} $</h1>

            <div className="quantity flex items-center mt-10 gap-4">
              <div onClick={() => { Quantity === 0 ? {} : setQuantity(Quantity - 1) }} className="minus cursor-pointer bg-white p-1 px-2 rounded-lg">-</div>
              <div className="count">{Quantity}</div>
              <div onClick={() => { setQuantity(Quantity + 1) }} className="plus cursor-pointer bg-white p-1 px-2 rounded-lg">+</div>
              <div className="addcart cursor-pointer p-1 px-3 border border-black w-fit rounded-[50px]  hover:bg-red-500 hover:text-white">Add to cart</div>
            </div>

            <p className='my-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corrupti. Dolor blanditiis nostrum, <br />
              repellendus beatae eligendi quisquam fuga ullam similique debitis suscipit. Amet, aperiam dignissimos <br />
              quia nemo aliquam nobis ullam fugit ea!</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ItemDisplay
