import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="w-[260px] h-[450px] m-1 shadow-md shadow-gray-400">
      <img src={props.image} className="w-full h-4/5" />
      <p className="font-semibold mx-1">{props.title} </p>
      <p className="mx-1">{props.price} </p>
      {/* <p>{props.desc} </p> */}
      <button className="bg-pink-300 px-2 py-2 rounded-lg mx-1">Add to Cart</button>
    </div>
  );
};
export default Card;
