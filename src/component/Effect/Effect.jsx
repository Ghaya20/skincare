import Hero from "../Hero/Hero";
import Slider from "../Slider/Slider";
import BestSlider from "../BestSlider/BestSlider";
import { NewData } from "../../api/ProdData";
import NewArrival from "../NewArrival/NewArrival";
import BestSellers from "./../BestSellers/BestSellers";
import MainPage from "../MainPage/MainPage";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Baskervville+SC&display=swap');
</style>;

const Effect = () => {
  return (
    <div>
      <MainPage />
      {/* 1st blank */}
      <div className="content text-center space-y-3">
        <p className="text-5xl font-bold">New Arrivals </p>
        <br />
        <div className="hidden lg:block lg:grid lg:grid-cols-4">
          {NewData.map((items) => {
            return (
              <>
                <NewArrival
                  id={items.id}
                  title={items.title}
                  image1={items.image1}
                  image2={items.image2}
                />
              </>
            );
          })}
        </div>
        <div className="block grid grid-cols-1 lg:hidden">
          <Slider />
        </div>
      </div>
      <div className="parallax parallax-1"></div>

      {/* 2nd blank */}
      <div className="content text-start rounded-lg grid grid-cols-1 md:grid-cols-2 bg-[url('https://ik.imagekit.io/gaia/todo/Watercolor%20Purple%20Phone%20Wallpaper.png?updatedAt=1725533741225')] bg-cover h-full">
        <div className=" text-5xl text-red-950 md:text-9xl">
          <p> 40% OFF</p>
          <p className=""> + </p>
          <p> Free Samples With Every Purchase!</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://ik.imagekit.io/gaia/todo/S0A2710petalblushsquare-removebg-preview.png?updatedAt=1725635411498"
            alt="blush"
            className="h-[300px] md:h-[500px]"
          />
        </div>
      </div>
      <div className="parallax parallax-2"></div>

      {/* 3rd blank */}
      <div className="content text-center space-y-3 bg-[url('https://ik.imagekit.io/gaia/todo/Blue%20Gold%20Luxury%20Elegant%20Background%20Instagram%20Story%20(1).png?updatedAt=1725722706152')] bg-cover">
        <p className="text-5xl font-bold">Best Sellers </p>
        <br />
        <div className="hidden lg:block">
          <BestSellers />
        </div>
        <div className="block grid grid-cols-1 lg:hidden">
          <BestSlider />
        </div>
      </div>
      <div className="parallax parallax-3"></div>
      <Hero />
    </div>
  );
};
export default Effect;
// {
//   NewData.map((items)=>{
//       return(
//           <>
//           <NewArrival title={items.title} image1={items.image1} image2={items.image2} />
//           </>
//       )
//   })
// }
