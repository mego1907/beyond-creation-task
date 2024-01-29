import { useEffect, useRef } from "react";
import Navbar from "./Navbar"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger);


const Header = () => {
  const descRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const img = imgRef.current;
    const desc = descRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "+=50 70%",
        end: "+=50 60%",
        scrub: true,
        onEnter: () => {
          gsap.to(img, {
            translateX: 0, opacity: 1, duration: 1
          })
        },
        onLeaveBack: () => {
          gsap.to(img, {
            translateX: "-100%", opacity: 0, duration: 1
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
            translateX: "100%", opacity: 0, duration: 1
          })
        },
      }
    })

  }, [])

  return (
    <div className="flex overflow-hidden header">
      <div className="container flex flex-col justify-between">
        <Navbar />
        <div></div>

        {/* Desc */}
        <div className="align-bottom mb-10 flex flex-col lg:flex-row  gap-[55px]">
          <img src="/header-call.png" alt="" ref={imgRef} className="-translate-x-full" />

          {/* Desc */}
          <div className="flex flex-col translate-x-full" ref={descRef}>
            {/* Title */}
            <h2 className="md:text-[80px] text-5xl text-white leading-none">
              The place <br/>
              <span className="font-bold">
                we call home
              </span>
            </h2>

            <p className="md:text-[22px] text-base text-white leading-normal w-5/6 pt-5 pb-9">
              Makadi Heights is a town built over 3.4 million square meters planned for development, with an elevation reaching 78 meters above sea level guaranteeing magnificent panoramic sea views residential units.
              Envisioned as a comprehensive town.
            </p>

            {/* Buttons */}
            <div className="flex gap-5">
              <button type="button" className="bg-white pb-4 md:px-[30px] p-2.5">Download Brochure</button>
              <button type="button" className="bg-white pb-4 md:px-[30px] p-2.5">Show Master plan</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header