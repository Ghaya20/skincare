import React from "react";

const BestSellers = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-90% shadow-lg shadow-gray-300 grid grid-cols-1 lg:grid-cols-4">
        <div className="w-[300px] h-[500px] space-y-4 mx-1">
          <div className="w-[300px] h-[400px]">
            <img
              src="https://ik.imagekit.io/gaia/todo/205172978-perfume-bottles-with-peony-flowers-on-a-pink-background.jpg_ver=6?updatedAt=1725721240687"
              alt="parfum"
              className="w-full h-full"
            />
          </div>
          <p> Rose Allure</p>
        </div>

        <div className="w-[300px] h-[450px] space-y-4">
          <p> Body Lotion</p>
          <div className="w-[300px] h-[400px]">
            <img
              src="https://ik.imagekit.io/gaia/todo/Unscentedbodylotion-1_800x.jpg_v=1700543591?updatedAt=1725719052703"
              alt="parfum"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="w-[300px] h-[450px] space-y-4">
          <div className="w-[300px] h-[400px]">
            <img
              src="https://ik.imagekit.io/gaia/todo/Revive-1.jpg_v=1695917398?updatedAt=1725721271019"
              alt="parfum"
              className="w-full h-full"
            />
          </div>
          <p> Revive Moisturizer</p>
        </div>

        <div className="w-[300px] h-[450px] space-y-4">
          <p> Hair Serum</p>
          <div className="w-[300px] h-[400px]">
            <img
              src="https://ik.imagekit.io/gaia/todo/anti-frizzy-hair-serums.jpg?updatedAt=1725721316190"
              alt="parfum"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
