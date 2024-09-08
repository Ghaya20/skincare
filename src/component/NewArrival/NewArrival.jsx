
const NewArrival = (props) => {
    return (
      <div>
        <div className=" shadow-lg shadow-gray-400 mx-3 w-[260px] h-[400px] lg:space-y-4">
              {/* cards */}
              <div className=" relative group w-[270px] h-[400px]"> 
                <img src={props.image1} alt="blush" className=" h-full w-full object-cover group-hover:opacity-0 duration-500"/>
                <img src={props.image2} alt="blushGirl"
                className=" h-full w-full opacity-0 group-hover:opacity-100 object-cover absolute top-0 left-0 duration-500"/>
              </div>
              <p>{props.title} </p>
            </div>
      </div>
    )
  }
  
  export default NewArrival
  