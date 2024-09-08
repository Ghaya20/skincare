import { useEffect, useState } from "react";
import { ProdData1 } from "../../api/ProdData";
import Card from "../Card/Card";
import Category from "../Category/Category";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Baskervville+SC&display=swap');
</style>;

const Body = () => {
  //to render the data, v need to store it in a variable which is loval state variable
  // const [prod, setProd] = useState([]);

  // const fetchData = async () => {
  //   const data = await axios.get("https://api.escuelajs.co/api/v1/products");
  //   setProd(data.data);
  // };
  // useEffect(() => {
  //   fetchData();
  //   console.log(prod);
  // }, []);

  return (
    <div>
      <div className="2xl:conatiner mx-auto font-[Baskervville]">
        <div className="w-[98%] mx-auto grid grid-cols-1 bg-[url('https://ik.imagekit.io/gaia/todo/c037121844264e7d40ffc2bb11335a21.jpg?updatedAt=1725727902126')] bg-cover h-[500px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-7xl ">
              Be The Woman You Want To Be
            </h1>
          </div>
        </div>
        <Category />
        <div className="text-amber-800 bg-[url('https://ik.imagekit.io/gaia/todo/what-are-natural-skin-care-products-alt-1440x810.jpg?updatedAt=1725731838085')] bg-cover h-[700px]">
        <div className="flex flex-col justify-start items-center text-5xl lg:text-9xl h-[600px] font-[Baskervville] font-bold">
          <h1> Shop Your Latest Brands</h1>
          <h1>@mythree</h1>
        </div>
        </div>
        <div className="w-[98%] mx-auto my-4 space-y-6">
          <h1 className="text-5xl">Products On Sale!!!</h1>
          <div className="py-4 pl-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[url('https://ik.imagekit.io/gaia/Contest/Brown%20Beige%20Vintage%20Texture%20Background%20Instagram%20Story%20(1).png?updatedAt=1725734796301')] bg-cover">
            {ProdData1.map((items) => {
              return (
                <>
                  <Card title={items.title} image={items.image} price={items.price} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
