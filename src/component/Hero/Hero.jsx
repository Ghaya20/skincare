<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Baskervville+SC&display=swap');
</style>;

const Hero = () => {
  return (
    <div>
      <div className="2xl:container mx-auto bg-[url('https://ik.imagekit.io/gaia/todo/Blue%20Watercolor%20Background%20Instagram%20Story%20.png?updatedAt=1725723520257')] bg-cover font-[Baskervville] px-5 py-7 ">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 font-bold text-red-950">
          <p className="text-5xl text-center flex flex-col justify-center  lg:items-start mr-10">
            {" "}
            Why Choose Us?
          </p>
          <div className="rounded-xl p-4 shadow-lg shadow-gray-500">
            <video
              controls
              width="100%"
              className="videoPlayer"
              src="https://ik.imagekit.io/gaia/todo/White%20and%20Blue%20Animated%20Minimalist%20Collage%20Fashion%20Style%20Video.mp4?updatedAt=1725643559891"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
// [url('https://cdn.pixabay.com/photo/2019/06/02/10/01/medicinal-flower-4246073_640.jpg')]
