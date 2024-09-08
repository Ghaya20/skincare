import { useState } from 'react';

const BestSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 260; // Width of each card in pixels (Tailwind w-80 = 20rem = 320px)
  const totalCards = 4; // Total number of cards

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalCards - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalCards - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative w-[260px] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
      >
        {/* Hardcoded Cards */}
        <div className="w-[260px] h-[450px] space-y-4">
          <div className="w-[260px] h-[400px]">
            <img
              src="https://ik.imagekit.io/gaia/todo/205172978-perfume-bottles-with-peony-flowers-on-a-pink-background.jpg_ver=6?updatedAt=1725721240687"
              alt="parfum"
              className="w-full h-full"
            />
          </div>
          <p> Rose Allure</p>
        </div>

        <div className="w-[260px] h-[450px] space-y-4">
          <p> Body Lotion</p>
          <div className="w-[260px] h-[400px]">
            <img
              src="https://ik.imagekit.io/gaia/todo/Unscentedbodylotion-1_800x.jpg_v=1700543591?updatedAt=1725719052703"
              alt="parfum"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="w-[260px] h-[450px] space-y-4">
          <div className="w-[260px] h-[400px]">
            <img
              src="https://ik.imagekit.io/gaia/todo/Revive-1.jpg_v=1695917398?updatedAt=1725721271019"
              alt="parfum"
              className="w-full h-full"
            />
          </div>
          <p> Revive Moisturizer</p>
        </div>

        <div className="w-[260px] h-[450px] space-y-4 mx-3">
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

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
      >
        &larr;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
      >
        &rarr;
      </button>
    </div>
  );
};

export default BestSlider;
