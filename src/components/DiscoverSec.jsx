import { useEffect, useRef } from "react";
import { 
  CentralParkIcon, 
  CommercialAreasIcon, 
  HotelsIcon, 
  KidsFriendlyAreasIcon, 
  MedicalFacilitiesIcon, 
  SportsFacilitiesIcon 
} from "../icons/icons"
import DiscoverSlider from "./DiscoverSlider"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger);




const services = [
  {
    name: "Commercial Areas",
    icon: <CommercialAreasIcon fill="#268FB4" />,
    content: "Downtown Makadi Heights Mall"
  },
  {
    name: "Sports Facilities",
    icon: <SportsFacilitiesIcon fill="#268FB4" />,
    content: "Sports Courts, Fitness Center Water Sports Activities"
  },
  {
    name: "Kids Friendly Areas",
    icon: <KidsFriendlyAreasIcon fill="#268FB4" />,
    content: "Kids Aqua Park Kids Areas"
  },
  {
    name: "Central Park",
    icon: <CentralParkIcon fill="#268FB4" />,
    content: "Far far away, behind the word mountains"
  },
  {
    name: "Hotels",
    icon: <HotelsIcon fill="#268FB4" />,
    content: "Far far away, behind the word mountains"
  },
  {
    name: "Medical Facilities",
    icon: <MedicalFacilitiesIcon fill="#268FB4" />,
    content: "Far far away, behind the word mountains"
  },
]

const DiscoverSec = () => {

  const descRef = useRef();
  const imgSliderRef = useRef();

  useEffect(() => {
    const imgSlider = imgSliderRef.current;
    const desc = descRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: imgSlider,
        start: "+=50 70%",
        end: "+=50 60%",
        scrub: true,
        onEnter: () => {
          gsap.to(imgSlider, {
            translateX: 0, opacity: 1, duration: 1
          })
        },
        onLeaveBack: () => {
          gsap.to(imgSlider, {
            translateX: "100%", opacity: 0, duration: 1
          })
        },
      }
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: desc,
        start: "+=50 70%",
        end: "+=50 60%",
        scrub: true,
        onEnter: () => {
          gsap.to(desc, {
            translateX: 0, opacity: 1, duration: 1
          })
        },
        onLeaveBack: () => {
          gsap.to(desc, {
            translateX: "-100%", opacity: 0
          })
        },
      }
    })

  }, [])

  return (
    <div>
      <div className="container flex lg:flex-row flex-col lg:py-[170px] py-10">
        {/* Desc */}
        <div className="flex flex-col -translate-x-full lg:w-1/2" ref={descRef}>
          {/* Title */}
          <h2 className="md:text-[60px] text-4xl text-primary leading-none mb-3">
            Discover Lifestyle<br />
            <span className="font-bold md:text-[80px]">
              Amentities
            </span>
          </h2>

          {/* Desc */}
          <p className="text-sm leading-7 md:text-lg lg:w-4/6">
            Occupying a land area of 33,000 square meters, Makadi Heights’ stunning clubhouse
          </p>

          {/* Services */}
          <div className="flex justify-end md:mt-[40px] mt-5" >
            <div className="flex flex-wrap md:w-11/12 ">
              {
                services.map((serv, i) => {
                  const checkForBorderLeft = i % 2 === 0;
                  const checkforBorderBottom = i !== 4 & i !== 5;
                  const checkIfNameIsSports = i === 1

                  return (
                    <div 
                      className={`py-6 relative flex flex-col justify-center items-center md:w-1/2 w-full ${!checkForBorderLeft && "serv-border-left"} ${checkforBorderBottom && "serv-border-bottom"}`} 
                      key={i}
                      >
                      {/* Icon */}
                      {serv.icon}
                      {/* Name */}
                      <h4 className={`text-center text-lg ${checkIfNameIsSports ? "text-primary" : "text-[#268FB4]"}`}>{serv.name}</h4>
                      {/* Desc */}
                      <p className={`text-center text-base text-[#757575] ${checkIfNameIsSports ? "px-5" : "px-16" }`}>{serv.content}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>

        </div>


        {/* Slider */}
        <div className="mt-3 translate-x-full d:w-1/2 md:pt-16" ref={imgSliderRef}>
          <DiscoverSlider />
        </div>
      </div>
    </div>
  )
}

export default DiscoverSec