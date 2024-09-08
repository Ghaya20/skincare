import React, { useState } from 'react';
import { NewData } from '../../api/ProdData';
import NewArrival from '../NewArrival/NewArrival';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardCount = 4; // Total number of cards
  const cardWidth = 300; // Width of each card in pixels

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < cardCount - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <div className="relative h-[500px] w-[300px] mx-auto overflow-hidden">
      <div
        className="content flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
      >
        {
            NewData.map((items)=>{
                return(
                    <>
                    <NewArrival id={items.id} title={items.title} image1={items.image1} image2={items.image2} />
                    </>
                )
            })
        }
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  );
};

export default Slider;
