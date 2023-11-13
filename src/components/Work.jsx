import React, { useState } from "react";
import hkRestaurant from "../assets/images/hk-restaurant.png";
import two from "../assets/images/two.avif";
import three from "../assets/images/three.avif";
import four from "../assets/images/four.avif";
import five from "../assets/images/five.avif";
import six from "../assets/images/six.avif";
import seven from "../assets/images/seven.avif";
import eight from "../assets/images/eight.avif";
import nine from "../assets/images/nine.avif";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "HK Restaurant",
      path: hkRestaurant,
      link: "https://hk-restaurant.netlify.app/",
      code: "https://github.com/Heinkhantphyoe/HK-restaurant",
      details:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia ",
    },
    {
      id: 2,
      title: "Lorem",
      path: two,
      details:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    },
    {
      id: 3,
      title: "Lorem",
      path: three,
      details:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia ",
    },
    {
      id: 4,
      title: "Lorem",
      path: four,
      details:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia ",
    },
    {
      id: 5,
      title: "Lorem",
      path: five,
      details:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia ",
    },
    {
      id: 6,
      title: "Lorem",
      path: six,
      details:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia ",
    },
    {
      id: 7,
      title: "Lorem",
      path: seven,
      details:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia ",
    },
    {
      id: 8,
      title: "Lorem",
      path: eight,
      details:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
    },
    {
      id: 9,
      title: "Lorem",
      path: nine,
      details:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia ",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <motion.div
      className="px-4 md:mt-14 mt-0 text-white mb-20"
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 3 }}
    >
      <div className="bg-black shadow shadow-slate-700 py-14 px-4 lg:px-32  rounded-t-2xl">
        <p className="text-3xl heading mb-10">Portfolio</p>
        <div className=" grid  md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" border-2 border-slate-700  p-4  rounded-lg "
            >
              <img
                src={project.path}
                alt=""
                className=" rounded-md h-60 w-full"
              />
              <p className="mt-4 text-xl">{project.title}</p>

              <button
                className="mt-2 py-1 px-3 bg-primary rounded-md"
                onClick={() => openProjectDetails(project.id)}
              >
                Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-details-overlay">
          <div className="project-details  p-5">
            <h2 className=" text-xl md:text-3xl text-center font-bold">
              {selectedProject.title}
            </h2>
            <img
              src={selectedProject.path}
              alt=""
              className="w-full h-[150px] md:h-[200px] md:w-[50%] rounded-md my-5"
            />
            <p className="h-[98px]  overflow-y-scroll ">
              {selectedProject.details}
            </p>
            <div className=" mt-5 flex gap-1 flex-wrap">
              <a
                href={selectedProject.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-primary px-2  rounded-md py-1 text-white ">
                  Source Code
                </button>
              </a>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-primary px-2  rounded-md py-1 text-white ">
                  Link
                </button>
              </a>
            </div>
            <button onClick={closeProjectDetails} className="close-btn">
              <AiFillCloseCircle className=" text-3xl" />
            </button>
          </div>
        </div>
      )}

      {/* working slills and know ledges*/}
      <div className="bg-secondary shadow shadow-slate-700 px-4 lg:px-32 pt-8 pb-14  rounded-b-2xl ">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className=" text-3xl mb-8">Working Skills</p>

            <div className="skill mb-6">
              <div className="flex justify-between items-center mb-2">
                <p>web design</p>
                <p>65%</p>
              </div>
              <div>
                <div className="h-1 bg-slate-800 w-full rounded-md"></div>
                <div className="w-[65%] h-1 bg-green-400 mt-[-4.2px]  rounded-md"></div>
              </div>
            </div>
            <div className="skill mb-6">
              <div className="flex justify-between items-center mb-2">
                <p>mobile app</p>
                <p>90%</p>
              </div>
              <div>
                <div className="h-1 bg-slate-800 w-full rounded-md"></div>
                <div className="w-[90%] h-1 bg-red-400 mt-[-4.2px]  rounded-md"></div>
              </div>
            </div>
            <div className="skill mb-6">
              <div className="flex justify-between items-center mb-2">
                <p>illustrator</p>
                <p>50%</p>
              </div>
              <div>
                <div className="h-1 bg-slate-800 w-full rounded-md"></div>
                <div className="w-[50%] h-1 bg-violet-400 mt-[-4.2px]  rounded-md mb-2"></div>
              </div>
            </div>

            <div className="skill">
              <div className="flex justify-between items-center mb-2">
                <p>photoshop</p>
                <p>70%</p>
              </div>
              <div>
                <div className="h-1 bg-slate-800 w-full rounded-md"></div>
                <div className="w-[70%] h-1 bg-orange-400 mt-[-4.2px]  rounded-md"></div>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-3xl mb-8">Knowledges</p>

            <div className="flex flex-wrap gap-4">
              <p className="py-2 px-7 rounded-md text-slate-400 bg-slate-900  inline-block">
                Digital Design
              </p>
              <p className="py-2 px-7 rounded-md text-slate-400 bg-slate-900  inline-block">
                Marketing
              </p>
              <p className="py-2 px-7 rounded-md text-slate-400 bg-slate-900  inline-block">
                Social Media
              </p>
              <p className="py-2 px-7 rounded-md text-slate-400 bg-slate-900  inline-block">
                Timemanagement
              </p>
              <p className="py-2 px-7 rounded-md text-slate-400 bg-slate-900  inline-block">
                Flexibility
              </p>
              <p className="py-2 px-7 rounded-md text-slate-400 bg-slate-900  inline-block">
                Team Work
              </p>
              <p className="py-2 px-7 rounded-md text-slate-400 bg-slate-900  inline-block">
                Good Communication
              </p>
              <p className="py-2 px-7 rounded-md text-slate-400 bg-slate-900  inline-block">
                Public Speaking
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer
      <div className="bg-black shadow shadow-slate-700 px-4 lg:px-32 py-8  rounded-b-2xl">
        <p className="text-center text-lg">
          © 2022 All Rights Reserved by Hein Khant.
        </p>
      </div> */}
    </motion.div>
  );
};

export default Work;
