import React, { useState } from "react";
import SkillComponent from "../components/skillComponent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./myStyle.css";


const ServicesSection = () => {
  const [skills] = useState([
    {
      skillName: "Android Development",
      description:
        "I have done several projects in it of which 2 are major. I have knowledgle about:",
      techs:
        "XML, Kotlin, Jetpack-Compose , Use of API, Payment Gateways, Firebase etc.",
    },
    {
      skillName: "Full Stack Development",
      description:
        "I have done 4 projects in it. I have knowledgle about MERN some techs are :",
      techs:
        "HTML, CSS, Node, MongoDB, React, Express, Talwind CSS, API, Payment Gateways etc.",
    },
    {
      skillName: "Flutter Development",
      description: "I have done 2 projects in it. I have knowledgle about:",
      techs:
        "Flutter, Dart, working-with-packages , Use of API, Payment Gateways, Firebase etc.",
    },
    {
      skillName: "Skills Snapshot",
      description: " I have worked on several techs. I have knowledgle about:",
      techs:
        "Android Development, Cross-platform devlopment, MERN, C++, DataStructure, DBMS, Git/GitHub",
    },
  ]);

  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full">
        <h1 className="w-full bg-[#252734] text-xl text-gray-400 px-6 lg:px-16 font-semibold ">
          - Skills
        </h1>
        <div className="relative ">
          <div className="h-48 bg-[#252734]"></div>
          <div className="h-48 bg-[#333646]"></div>
          <div id="slider" className="absolute top-12 h-64 bottom-8 w-full ">
            <Slider className="h-full w-full" {...settings}>
              {skills.map((skill) => (
                <div className="h-64 w-72 bg-[#424657] rounded-md border-[3px]  border-orange-200">
                  <div className="h-full w-full flex flex-col justify-start pt-10 pb-5 items-center">
                    <h1 className="text-center text-orange-300 font-semibold  text-xl pb-4 tracking-wider">
                      {skill.skillName}
                    </h1>
                    <p className="text-base text-justify px-6 font-medium text-gray-400">
                      {skill.description}
                      <p className="text-base text-justify text-gray-300 font-semibold">
                        {skill.techs}
                      </p>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default ServicesSection;
