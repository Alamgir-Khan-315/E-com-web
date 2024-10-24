import React from 'react'

const footer = () => {
  return (
    <div className='py-20'>

      <div className="container mx-auto flex justify-around">
        <div className="title font-bold text-xl">Shoppee</div>

        <div className="title">
          <h1 className=' font-bold text-xl'>Learn more</h1>

          <div className="list text-gray-500 list-none mt-4">
            <li>About us</li>
            <li>Catogary</li>
            <li>Exchangr policy</li>
            <li>FAQ</li>
            <li>Privacy policy</li>
          </div>
        </div>

        <div className="title">
          <h1 className=' font-bold text-xl'>Our Community</h1>
          <div className="list text-gray-500 list-none mt-4">
            <li>Term and Condition</li>
            <li>Special Offer</li>
            <li>Customer Reviews</li>
          </div>
        </div>

        <div className="title">
          <h1 className=' font-bold text-xl'>Contact Us</h1>
          <div className="list text-gray-500 list-none mt-4">
            <li>Contact Number : 0315 4572266</li>
            <li>Email Address : alamgirkhqwer@gmail.com</li>
          </div>
        </div>

        <div className="title font-bold text-xl">Social</div>
      </div>

      <h1 className='text-center text-gray-500 mt-14'>2024 | All rights reserved</h1>

    </div>
  )
}

export default footer
