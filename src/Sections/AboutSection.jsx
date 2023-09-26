import React, { useState, useEffect } from "react";
import dummy from "../images/dummy.png";
import TextReveal from "../components/TextReveal";
import {
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsTelephoneFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const AboutSection = () => {
      const [revealText, setRevealText] = useState(false);

      useEffect(() => {
        const delayTimer = setTimeout(() => {
          setRevealText(true);
        }, 1000);

        return () => clearTimeout(delayTimer);
      }, [1000]);
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="flex-1 w-full  bg-[#333646]">
          <div className="sm:flex-col md:flex  md:flex-row h-full w-full ">
            <div className="relative flex-1">
              <div className="h-full w-full flex flex-col justify-end">
                <img
                  className=" h-2/5 md:h-3/5 lg:h-full object-cover"
                  src={dummy}
                  alt="dummy"
                />
              </div>

              <div className="absolute top-16 md:top-20 lg:top-36  ml-6 md:ml-20">
                <TextReveal text={"Mohd"} />
                {revealText && <TextReveal text={"Shaquib Khan"} />}
              </div>
            </div>

            <div className="flex-1 bg-[#252734] md:bg-[#333646] px-5  lg:pr-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex justify-start gap-12 mt-12 ">
                  <h1 className="text-gray-400 text-lg md:text-2xl font-medium hover:text-orange-400 hover:cursor-pointer">
                    About
                  </h1>
                  <h1 className="text-gray-400 text-lg md:text-2xl font-medium hover:text-orange-400 hover:cursor-pointer">
                    Services
                  </h1>
                  <h1 className="text-gray-400 text-lg md:text-2xl font-medium hover:text-orange-400 hover:cursor-pointer">
                    Works
                  </h1>
                </div>

                <div className="flex flex-col mt-10 md:mt-20">
                  <h1 className="font-medium text-gray-300 text-[18px]">
                    --INRODUCTION
                  </h1>
                  <h1 className="mt-2 font-semibold text-white text-xl md:text-2xl">
                    Software Developer , Based <br />
                    in India
                  </h1>
                  <div className="flex flex-row justify-center">
                    <p className="text-sm md:text-base  mt-4 text-gray-400 font-medium text-justify">
                      I'm a versatile software developer with a year of Android
                      development experience and proficiency in Flutter, React,
                      Firebase, MongoDB, Git/GitHub, and database management
                      systems (DBMS). My passion lies in creating efficient
                      mobile and web applications. I'm committed to delivering
                      high-quality solutions and continually expanding my tech
                      expertise.
                    </p>
                  </div>
                </div>
                <div className="flex justify-start gap-12 py-12">
                  <BsLinkedin className="text-gray-300 text-3xl hover:text-orange-400 md:hover:text-orange-300 hover:animate-bounce" />
                  <BsGithub className="text-gray-300  text-3xl hover:text-orange-400 md:hover:text-orange-300 hover:animate-bounce" />
                  <BsInstagram className="text-gray-300  text-3xl hover:text-orange-400 md:hover:text-orange-300 hover:animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 pt-20 pb-16 w-full  bg-[#252734]">
          <div className="flex flex-col   lg:flex-row  md:px-16 lg:px-0">
            <div className="flex-1 lg:pl-14 lg:pr-6">
              <div className="flex flex-col items-center px-5 lg:px-0 lg:items-start">
                <h1 className="text-gray-400 text-lg font-medium">- Contact</h1>
                <h1 className="text-white text-xl md:text-2xl font-semibold py-6">
                  Have a Question? Get in Touch!
                </h1>
                <p className="text-gray-400 text-sm md:text-base font-medium text-justify">
                  I'm always eager to hear from you! Whether you're interested
                  in exploring exciting project collaborations, discussing
                  potential job opportunities, or simply dropping a friendly
                  hello, please don't hesitate to reach out. Your feedback and
                  creative ideas are not only valued but encouraged. Connecting
                  with like-minded individuals and engaging in meaningful
                  conversations is what fuels my passion for technology and
                  innovation.
                </p>
                <p className="text-gray-400  text-sm md:text-base font-medium text-justify pt-6">
                  If you're looking for software solutions that can take your
                  projects to the next level, I'd love to discuss how we can
                  collaborate and bring your ideas to life. Whether you're a
                  fellow enthusiast, a potential employer, or someone seeking
                  custom software solutions, I'm here to make great things
                  happen. Don't underestimate the power of a single message.
                  Let's spark inspiration, share insights, and explore the
                  endless possibilities together. Your goals and challenges are
                  what drive me to find the best solutions. I'm looking forward
                  to connecting with you soon!
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center mt-12 px-8 lg:pl-6 lg:pr-14">
              <div className="inline-flex">
                <MdEmail className="text-2xl md:text-4xl text-orange-400 font-bold" />
                <h1 className="text-orange-200 text-base md:text-2xl font-bold tracking-wider px-2 animate-pulse">
                  mohammadshaquib4@gmail.com
                </h1>
              </div>
              <div className="flex flex-row justify-end lg:pr-12">
                <div className="inline-flex py-12">
                  <BsTelephoneFill className="text-2xl md:text-3xl text-orange-400 font-bold animate-bounce" />
                  <h1 className="text-orange-200 text-base md:text-2xl font-bold tracking-wider px-2">
                    +91 8528436997
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
