import { React, useState } from "react";
import android from "../images/android.png";
import dummy from "../images/logo192.png";
import flutter from "../images/flutter.png"
import { BsGithub } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "./myStyle.css";

const WorkSection = () => {
  const [androidWork] = useState([
    {
      name: "Localze",
      description: "Dual Platform Ecommerce App",
      githubLink: "https://github.com/shaquib4/Localzes",
      liveLink:
        "https://play.google.com/store/apps/details?id=com.localze.android",
    },
    {
      name: "Biet-Maintaino",
      description: "Maitainence Process Made Online",
      githubLink: "https://github.com/shaquib4/maintainenceStaff",
      liveLink: "",
    },
    {
      name: "Stimulus",
      description: "A simple Music App",
      githubLink: "https://github.com/shaquib4/Stimulus",
      liveLink: "",
    },
    {
      name: "Localze Admin",
      description: "Admin Platform for Localze App",
      githubLink: "https://github.com/shaquib4/LocalzeAdmin",
      liveLink: "",
    },
  ]);
  const [FlutterWork] = useState([
    {
      name: "Job Finder",
      description: "Post Opening or Apply Fo job App",
      githubLink: "https://github.com/shaquib4/MissionEd-Internship",
      liveLink: "",
    },
    {
      name: "To-Do-List",
      description: "Simple Task Managment App",
      githubLink: "https://github.com/shaquib4/flutter_app_to_do",
      liveLink: "",
    },
  ]);
  const [WebWork] = useState([
    {
      name: "BookMyShow Clone",
      description: "Realtime Fetching of Movies List",
      githubLink: "https://github.com/shaquib4/BookMyShowClone",
      liveLink: "",
    },
    {
      name: "Tasky",
      description: "A todo List App",
      githubLink: "https://github.com/shaquib4/Tasky",
      liveLink: "https://shaquib4.github.io/Tasky/",
    },
    {
      name: "Zomato Landing Page",
      description: "Completely On HTML, CSS",
      githubLink: "https://github.com/shaquib4/Zomato-Landing-Page",
      liveLink: "https://shaquib4.github.io/Zomato-Landing-Page/",
    },
    {
      name: "Library Mangament Api",
      description: "Book Management Api using local database",
      githubLink: "https://github.com/shaquib4/BookShala",
      liveLink: "",
    },
  ]);
  const settingsWork = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
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
      <div className="bg-[#333646] pt-0 pb-12 flex flex-col ">
        <h1 className="text-xl text-gray-400 pl-6 lg:pl-14 font-semibold">
          -Works
        </h1>
        {/* <div className=" flex-1 flex flex-col justify-start">
          <div className="flex">
            <img
              className="px-2 lg:px-4 pt-0 h-42 w-56 animate-pulse"
              src={android}
              alt=""
            />
            <h1 className="sm:hidden md:block md:text-3xl lg:text-3xl text-gray-200 font-bold pt-12 mt-2">
              Full Stack Development
            </h1>
          </div>

          <div
            id="slider1"
            className="w-full md:w-3/4 lg:w-3/5 py-12 px-4 lg:px-8  "
          >
            <Slider {...settingsWork}>
              <div>
                <div className="bg-[#424657] h-56  flex flex-col rounded-lg shadow-md border-2 border-gray-300">
                  <h1 className="text-2xl font-bold text-orange-300 px-4 pt-8 pb-4 tracking-wider">
                    Localze
                  </h1>
                  <h1 className="text-lg font-normal text-gray-300 px-4 text-justify">
                    Dual platform Ecommerce app
                  </h1>
                  <span className="py-4 px-5 flex gap-4">
                    <BsGithub className="text-3xl text-gray-300 hover:text-orange-300" />
                    <BiLinkAlt className="text-3xl text-gray-300 hover:text-orange-300" />
                  </span>
                </div>
              </div>
              <div>
                <div className="bg-[#424657] h-56 w-64 flex flex-col rounded-lg shadow-md border-2 border-gray-300">
                  <h1 className="text-2xl font-bold text-orange-300 px-4 pt-8 pb-4 tracking-wider">
                    Localze
                  </h1>
                  <h1 className="text-lg font-normal text-gray-300 px-4 text-justify">
                    Dual platform Ecommerce app
                  </h1>
                  <span className="py-4 px-5 flex gap-4">
                    <BsGithub className="text-3xl text-gray-300 hover:text-orange-300" />
                    <BiLinkAlt className="text-3xl text-gray-300 hover:text-orange-300" />
                  </span>
                </div>
              </div>
              <div>
                <div className="bg-[#424657] h-56 w-64 flex flex-col rounded-lg shadow-md border-2 border-gray-300">
                  <h1 className="text-2xl font-bold text-orange-300 px-4 pt-8 pb-4 tracking-wider">
                    Localze
                  </h1>
                  <h1 className="text-lg font-normal text-gray-300 px-4 text-justify">
                    Dual platform Ecommerce app
                  </h1>
                  <span className="py-4 px-5 flex gap-4">
                    <BsGithub className="text-3xl text-gray-300 hover:text-orange-300" />
                    <BiLinkAlt className="text-3xl text-gray-300 hover:text-orange-300" />
                  </span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className=" flex-1  flex flex-col justify-start items-end mt-12">
          <div className="flex mx-auto">
            <img
              className="h-28  w-28  mt-2 animate-bounce"
              src={dummy}
              alt=""
            />
            <h1 className="sm:hidden md:block md:text-3xl lg:text-3xl text-gray-200 font-bold pt-12">
              Flutter Development
            </h1>
          </div>

          <div
            id="slider2"
            className="w-full md:w-3/4 lg:w-3/5 py-6 px-4 lg:px-8 lg:mr-12"
          >
            <Slider {...settingsWork}>
              <div>
                <div className="bg-[#424657] h-56  flex flex-col rounded-lg shadow-md border-2 border-gray-300">
                  <h1 className="text-2xl font-bold text-orange-300 px-4 pt-8 pb-4 tracking-wider">
                    Localze
                  </h1>
                  <h1 className="text-lg font-normal text-gray-300 px-4 text-justify">
                    Dual platform Ecommerce app
                  </h1>
                  <span className="py-4 px-5 flex gap-4">
                    <BsGithub className="text-3xl text-gray-300 hover:text-orange-300" />
                    <BiLinkAlt className="text-3xl text-gray-300 hover:text-orange-300" />
                  </span>
                </div>
              </div>
              <div>
                <div className="bg-[#424657] h-56 w-64 flex flex-col rounded-lg shadow-md border-2 border-gray-300">
                  <h1 className="text-2xl font-bold text-orange-300 px-4 pt-8 pb-4 tracking-wider">
                    Localze
                  </h1>
                  <h1 className="text-lg font-normal text-gray-300 px-4 text-justify">
                    Dual platform Ecommerce app
                  </h1>
                  <span className="py-4 px-5 flex gap-4">
                    <BsGithub className="text-3xl text-gray-300 hover:text-orange-300" />
                    <BiLinkAlt className="text-3xl text-gray-300 hover:text-orange-300" />
                  </span>
                </div>
              </div>
              <div>
                <div className="bg-[#424657] h-56 w-64 flex flex-col rounded-lg shadow-md border-2 border-gray-300">
                  <h1 className="text-2xl font-bold text-orange-300 px-4 pt-8 pb-4 tracking-wider">
                    Localze
                  </h1>
                  <h1 className="text-lg font-normal text-gray-300 px-4 text-justify">
                    Dual platform Ecommerce app
                  </h1>
                  <span className="py-4 px-5 flex gap-4">
                    <BsGithub className="text-3xl text-gray-300 hover:text-orange-300" />
                    <BiLinkAlt className="text-3xl text-gray-300 hover:text-orange-300" />
                  </span>
                </div>
              </div>
            </Slider>
          </div>
        </div> */}

        <div className="flex flex-col  lg:flex-row   md:mt-10 md:px-20 lg:pr-24 ">
          <div className="flex flex-col gap-3 w-full  lg:w-2/5 px-12 lg:px-4 justify-center ">
            <div className="flex flex-col justify-end ">
              <img
                className="px-2 lg:px-4 pt-0 h-42 w-56 animate-pulse"
                src={android}
                alt=""
              />
              <h1 className=" hidden sm:hidden md:block md:text-3xl lg:text-3xl text-gray-200 font-bold pt-12 mt-2">
                Android Development
              </h1>
            </div>
            <h1 className="text-2xl text-orange-300 font-semibold text-justify">
              All Creative Work ,<br />
              Selected Projects
            </h1>
            <h1 className="lg:w-4/5 text-lg text-gray-300 font-semibold text-justify">
              brief overview of some Android development projects I've
              completed, utilizing technologies such as: <br /> Firebase, Map
              API, and more.
            </h1>
          </div>
          <div className="w-full flex flex-col justify-end lg:w-3/5 mt-12 lg:mt-0">
            <Slider {...settingsWork}>
              {androidWork.map((works) => (
                <>
                  <div>
                    <div className="bg-[#424657] h-56  flex flex-col rounded-lg shadow-md border-2 border-gray-300">
                      <h1 className="text-2xl font-bold text-orange-300 px-4 pt-8 pb-4 tracking-wider">
                        {works.name}
                      </h1>
                      <h1 className="text-lg font-normal text-gray-300 px-4 text-justify">
                        {works.description}
                      </h1>
                      <span className="py-4 px-5 flex gap-4">
                        <Link to={works.githubLink} target="_blank">
                          <BsGithub className="text-3xl text-gray-300 hover:text-orange-300" />
                        </Link>
                        <Link to={works.liveLink} target="_blank">
                          <BiLinkAlt className="text-3xl text-gray-300 hover:text-orange-300" />
                        </Link>
                      </span>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
        <div className="border-t-[3px] mt-24 border-gray-400 border-solid mr-64"></div>
        <div className="flex flex-col-reverse  lg:flex-row  mt-6 md:mt-10 md:px-20 lg:pr-24 ">
          <div className="w-full flex flex-col justify-end  lg:w-3/5 mt-12 lg:mt-0">
            <Slider {...settingsWork}>
              {WebWork.map((works) => (
                <>
                  <div>
                    <div className="bg-[#424657] h-60  flex flex-col rounded-lg shadow-md border-2 border-gray-300">
                      <h1 className="text-2xl font-bold text-orange-300 px-4 pt-8 pb-4 tracking-wider">
                        {works.name}
                      </h1>
                      <h1 className="text-lg font-normal text-gray-300 px-4 text-justify">
                        {works.description}
                      </h1>
                      <span className="py-4 px-5 flex gap-4">
                        <Link to={works.githubLink} target="_blank">
                          <BsGithub className="text-3xl text-gray-300 hover:text-orange-300" />
                        </Link>
                        <Link to={works.liveLink} target="_blank">
                          <BiLinkAlt className="text-3xl text-gray-300 hover:text-orange-300" />
                        </Link>
                      </span>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
          <div className="flex flex-col gap-3 w-full  lg:w-2/5 px-12 lg:px-4 justify-center ">
            <div className="flex flex-col justify-end">
              <img className="h-32 w-32 animate-pulse" src={dummy} alt="" />
              <h1 className=" hidden sm:hidden md:block md:text-3xl lg:text-3xl text-gray-200 font-bold pt-12 ">
                Full-Stack Development
              </h1>
            </div>
            <h1 className="text-2xl text-orange-300 font-semibold text-justify">
              All Creative Work ,<br />
              Selected Projects
            </h1>
            <h1 className="lg:w-4/5 text-lg text-gray-300 font-semibold text-justify">
              brief overview of some Web development projects I've completed,
              utilizing technologies such as: <br /> HTML,CSS, React,Mongodb,
              and more.
            </h1>
          </div>
        </div>
        <div className="border-t-[3px] mt-24 border-gray-400 border-solid ml-64"></div>
        <div className="flex flex-col  lg:flex-row   md:mt-10 md:px-20 lg:pr-24 ">
          <div className="flex flex-col gap-3 w-full  lg:w-2/5 px-12 lg:px-4 justify-center ">
            <div className="flex flex-col justify-end ">
              <img className="h-42 w-64 animate-pulse" src={flutter} alt="" />
              <h1 className=" hidden sm:hidden md:block md:text-3xl lg:text-3xl text-gray-200 font-bold pt-12">
                Flutter Development
              </h1>
            </div>
            <h1 className="text-2xl text-orange-300 font-semibold text-justify">
              All Creative Work ,<br />
              Selected Projects
            </h1>
            <h1 className="lg:w-4/5 text-lg text-gray-300 font-semibold text-justify">
              brief overview of some Flutter development projects I've
              completed, utilizing technologies such as: <br /> Firebase, Map
              API,Dart and more.
            </h1>
          </div>
          <div className="w-full flex flex-col justify-end lg:w-3/5 mt-12 lg:mt-0">
            <Slider {...settingsWork}>
              {FlutterWork.map((works) => (
                <>
                  <div>
                    <div className="bg-[#424657] h-56  flex flex-col rounded-lg shadow-md border-2 border-gray-300">
                      <h1 className="text-2xl font-bold text-orange-300 px-4 pt-8 pb-4 tracking-wider">
                        {works.name}
                      </h1>
                      <h1 className="text-lg font-normal text-gray-300 px-4 text-justify">
                        {works.description}
                      </h1>
                      <span className="py-4 px-5 flex gap-4">
                        <Link to={works.githubLink} target="_blank">
                          <BsGithub className="text-3xl text-gray-300 hover:text-orange-300" />
                        </Link>
                        <Link to={works.liveLink} target="_blank">
                          <BiLinkAlt className="text-3xl text-gray-300 hover:text-orange-300" />
                        </Link>
                      </span>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSection;
