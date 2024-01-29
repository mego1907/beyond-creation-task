import { useRef, useEffect } from "react";
import { PhoneIcon, ToggleIcon, WeatherIcon } from "../icons/icons";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap";
import useFetch from "./../hooks/useFetch";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const logoRef = useRef();
  const navbarRef = useRef();
  const menuItemsRef = useRef();

  const { data } = useFetch()

  useEffect(() => {
    // const navbar = navbarRef.current;
    const logo = logoRef.current;
    const menuItems = menuItemsRef.current

    gsap.fromTo(logo, {
      opacity: 0,
      translateX: -200,
      duration: 2
    }, {
      opacity: 1,
      translateX: 0
    })

    gsap.fromTo(menuItems, {
      opacity: 0,
      translateX: 200,
      duration: 3
    }, {
      opacity: 1,
      translateX: 0
    })

  }, []);


  function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    return valNum ?  ((valNum - 32) / 1.8).toFixed(2) : 0 ;
  }


  return (
    <div className="flex items-center w-full h-32 align-top" ref={navbarRef}>
      {/* Container */}
      <div className="container flex items-center justify-between w-full min-w-full ">
        {/* Logo */}
        <div className="" ref={logoRef}>
          <img src="/logo.png" alt="" className="sm:w-28 md:w-full" />
        </div>

        {/* Right */}
        <div className="flex items-center gap-1 md:gap-3" ref={menuItemsRef}>
          {/* Weather Icon */}
          <div className="flex items-center gap-1 text-white md:mr-4 md:gap-4 md:scale-100 scale-75">
            <WeatherIcon />
            <span>
              <span className="-mt-1 text-lg">{temperatureConverter(data?.main?.temp)}</span>
              <span className="absolute text-3xl"> ْ </span>
            </span>
          </div>

          {/* Phone Icon */}
          <div className="md:mr-[34px] md:scale-100 scale-75">
            <PhoneIcon />
          </div>

          {/* Book Now Icon */}
          <button 
            type="button" 
            className="bg-white text-black md:px-[33px] md:py-[15px] p-3 md:mr-[10px] mr-1 md:text-lg text-[10px] pb-5"
          >
            BOOK NOW
          </button>

          {/* Menu Icon */}
          <div className="gap-2 text-lg text-white md:gap-5 hidden md:flex">
            <span className="hidden md:block">MENU</span>
            <ToggleIcon className="md:w-[44px] w-[30px]" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar