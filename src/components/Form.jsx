import CustomInput from "./CustomInput"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CustomModal from "./CustomModal";

gsap.registerPlugin(ScrollTrigger);


const formInputs = [
  {
    name: "name",
    placeholder: "Your name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    placeholder: "Email ID",
    type: "email",
    required: true,
  },
  {
    name: "phoneNumber",
    placeholder: "Phone Number",
    type: "number",
    required: true,
  },
  {
    name: "bugdet",
    type: "select",
    placeholder: "Choose your bugdet",
    required: true,
  },
  {
    name: "message",
    type: "text",
    placeholder: "Enter you message",
    required: true,
  }
]

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  phoneNumber: yup.string().nullable().required("Phone Number is required"),
  bugdet: yup.string().required("BugDetail is required"),
  message: yup.string().required("Message is required"),
})


const Form = ({ formData, setFormData, setOpenModal }) => {
  const imgRef = useRef();
  const formRef = useRef();


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });


  useEffect(() => {
    const img = imgRef.current;
    const form = formRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: img,
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
        trigger: form,
        scrub: true,
        onEnter: () => {
          gsap.to(form, {
            translateX: 0, opacity: 1, duration: 1
          })
        },
        onLeaveBack: () => {
          gsap.to(form, {
            translateX: "100%", opacity: 0, duration: 1
          })
        },
      }
    })

  }, []);


  const handleFormSubmit = (data) => { 
    console.log("formData:", data)
    setFormData(data);
    setOpenModal(true);
  }
  

  return (
    <div
      className="flex flex-col pt-1 md:flex-row md:mt-20 bg-form" 
      style={{ boxShadow: "inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
    >
      {/* Image */}
      <div className="relative -translate-x-full opacity-0" ref={imgRef}>
        <img src="/FormImg.png" alt="" className="h-full object-cover" />
        <div className="absolute -rotate-90 -translate-y-1/2 top-1/2 md:-right-40 -right-10">
          <p className="text-lg font-semibold md:text-3xl text-primary leading-9">Ready for a Home at </p>
          <h3 className="md:text-[80px] text-4xl whitespace-nowrap text-primary leading-[60px]">Makadi Heights</h3>
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col px-5 mt-8 mb-3 md:w-2/3 md:px-20 md:mt-16 opacity-0 translate-x-full" ref={formRef}>
        {/* Title */}
        <div className="text-lg font-semibold text-primary mb-11">
          <p>Enter your details and our representative</p>
          <p>will get back to you shortly</p>
        </div>

        <form className="flex flex-col w-full gap-8" onSubmit={handleSubmit(handleFormSubmit)}>
          {
            formInputs.map(({ name, placeholder, type, required }, i) => (
              <div className="flex flex-col" key={i}>
                <CustomInput
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  // onChange={handleFormChange}
                  required={required}
                  register={register(name)}
                />
                {errors[name] && <p className="text-red-500 mt-1">{errors[name]?.message}</p>}
              </div>
            )
            )
          }

          <div>
            <div className="flex mb-11">
              <input 
                type="checkbox" 
                id="agree" 
                className="w-4"
              />
              <label 
                htmlFor="agree" 
                className="text-[#646464] text-[14px] ml-3 pb-1.5"
              >
                I agree to the processing of personal data
              </label>
            </div>

            <button 
              type="submit" 
              className="px-8 pb-4 pt-2 text-white uppercase bg-primary"
            >
              leave a Call request</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Form