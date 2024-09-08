import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
       <div className=" w-[98%] mx-auto grid grid-cols-1 bg-[url('https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover h-[500px]">
          <h1 className="tracking-in-contract font-bold text-black text-8xl lg:text-9xl font-[poppins] text-center flex felx-col justify-center items-center ">
            {" "}
            mythree
          </h1>
          <div className="flex justify-center items-center">
            <Link to="/body">
              <button className="text-white bg-black px-6 py-4">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default MainPage
