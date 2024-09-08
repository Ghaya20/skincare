import React from 'react'

const Category = () => {
  return (
    <div className="2xl:container my-3 mx-auto bg-[url('https://ik.imagekit.io/gaia/todo/Beauty%20Flowers%20Watercolor%20Background%20Instagram%20Story.png?updatedAt=1725731548053')] bg-cover">
          <h1 className="text-center font-bold text-5xl">
            {" "}
            Shop By Categories
          </h1>
            <div className="w-[98%] text-2xl lg:w-[60%] mx-auto grid grid-cols-2 overflow-x-hidden ">
              <div className="flex flex-col justify-center items-center">
                {/* 1st */}
                <button className="h-52 w-48 lg:w-96 shadow-lg shadow-black hover:text-white hover:bg-[url('https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599559_1280.jpg')] bg-cover ">
                  {" "}
                  Hair Care
                </button>
                <button className="h-96 w-48 lg:w-96 m-3  shadow-lg shadow-black text-center hover:bg-[url('https://azafran.in/cdn/shop/articles/Skin_Care_Blog_File.jpg?v=1673428374')] bg-cover ">
                  {" "}
                  Skin Care
                </button>
              </div>
              {/* 2nd */}
              <div>
                <button className="h-96 w-48 lg:w-96 m-3 shadow-lg shadow-black hover:bg-[url('https://www.rasluxuryoils.com/cdn/shop/files/Brightenbodywash_bodylotion_bodyscrubminicombo.jpg?v=1704881202')] bg-cover ">
                  Body Care
                </button>
                <button className="h-52 w-48 lg:w-96 m-3 shadow-lg shadow-black  hover:bg-[url('https://ik.imagekit.io/gaia/todo/istockphoto-857510484-612x612.jpg?updatedAt=1725200844116')] bg-cover ">
                  {" "}
                  Face Makeup
                </button>
              </div>
            </div>
        </div>
  )
}

export default Category
