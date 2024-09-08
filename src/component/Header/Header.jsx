import { useState } from "react";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>;

const Header = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className=" w-[98%] mx-auto grid grid-cols-1 bg-[url('https://ik.imagekit.io/gaia/todo/Watercolor%20Purple%20Phone%20Wallpaper.png?updatedAt=1725533741225')]">
          <div className="flex md:mx-11">
            <div>
              <img
                src="https://ik.imagekit.io/gaia/todo/Mythree-removebg-preview.png?updatedAt=1725542209126"
                alt="logo"
                className="h-40 "
              />
            </div>
            <div className="flex rounded-s-full rounded-e-full my-16  ">
              <input
                type="search"
                placeholder="Search "
                className="hidden lg:block h-10 w-96 px-96 py-7 rounded-s-full rounded-e-full bg-slate-50"
              />
              <div className="my-3 lg:mx-5 ">
                {/* search symbol */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />{" "}
                </svg>
              </div>
            </div>
            <div className=" flex my-16 lg:border-r-2 border-black px-2">
              {/* account */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="3em"
                width="3em"
              >
                <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 2a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1z" />
              </svg>
              <div className="flex flex-col">
                <button className="hidden lg:block text-xs">Log In or</button>
                <button className="text-x">Sign Up</button>
              </div>
            </div>
            <div className=" flex my-16 px-2 lg:border-r-2 border-black">
              {/* Heart */}
              <div className="mr-3">
                <button>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    viewBox="0 0 24 24"
                    height="2em"
                    width="2em"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
              <div>
                {/* shopping bag */}
                <button>
                  <svg
                    viewBox="0 0 64 64"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit={10}
                      strokeWidth={2}
                      d="M44 18h10v45H10V18h10z"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit={10}
                      strokeWidth={2}
                      d="M22 24V11c0-5.523 4.477-10 10-10s10 4.477 10 10v13"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className=" flex my-16 space-y-1">
              {/* stores */}
              <div>
                <svg
                  viewBox="0 0 21 21"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(4 2)"
                  >
                    <path d="M6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 002.564 3.05z" />
                    <path d="M9 6.5 A2.5 2.5 0 0 1 6.5 9 A2.5 2.5 0 0 1 4 6.5 A2.5 2.5 0 0 1 9 6.5 z" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col md:px-2">
                <button>Events & </button>
                <button>Stores</button>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          {show ? (
            <svg
              onClick={toggle}
              className="rotate-90-cw block lg:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-align-justify"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          ) : (
            <svg
              onClick={toggle}
              className=" block lg:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-align-justify"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          )}
        </div>
        <div className={show ? "block" : "hidden lg:block"}>
          <div className="slide-in-elliptic-top-fwd w-[98%] mx-auto grid grid-cols-1 bg-red-100">
            <div className=" flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-around px-6 py-6 lg:mx-20">
              <button> ABOUT</button>
              <button> NEW</button>
              <button>MADE BY MYTHREE</button>
              <button> BATH & BODY</button>
              <button> HAIR</button>
              <button> GIFTS</button>
              <button> FRGRANCE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
