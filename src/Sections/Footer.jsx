import React from 'react'
import {
  BsInstagram,
  BsLinkedin,
  BsGithub,
 
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-[#252734] h-80 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-gray-200 font-semibold underline underline-offset-4">
          Thank you for scrolling to the end
        </h1>
        <div className="flex justify-start gap-12 py-12">
          <BsLinkedin className="text-gray-300 text-3xl hover:text-orange-400 md:hover:text-orange-300 hover:animate-bounce" />
          <BsGithub className="text-gray-300  text-3xl hover:text-orange-400 md:hover:text-orange-300 hover:animate-bounce" />
          <BsInstagram className="text-gray-300  text-3xl hover:text-orange-400 md:hover:text-orange-300 hover:animate-bounce" />
        </div>
      </div>
    </>
  );
}

export default Footer