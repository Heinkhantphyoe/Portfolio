import React, { useState } from "react";
import hkRestaurant from "../assets/images/hk-restaurant.png";
import sarMal from "../assets/images/sarmal.png";
import movieExplorer from "../assets/images/movie-explorer.png";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setSelectedProject(project);
  };

  const projects = [
    {
      id: 1,
      title: "HK Restaurant",
      path: hkRestaurant,
      link: "https://hk-restaurant.netlify.app/",
      code: "https://github.com/Heinkhantphyoe/HK-restaurant",
      details:
        "This is my first project that I created using HTML, CSS,Bootstrap and JavaScript.",
    },
    {
      id: 2,
      title: "Sar Mal",
      path: sarMal,
      code: "https://github.com/one-project-one-month/food-ordering-system-java",
      details:
        "I Contributed as a Backend Developer to Sar Mal,a fully functional food ordering platform designed to streamline the process for customers, restaurant owners, delivery freelancers, and administrators developed in one month with a team from my country.",
    },
    {
      id: 3,
      title: "Movie Explorer",
      path: movieExplorer,
      link: "https://hkp-movie-web.vercel.app/",
      code: "https://github.com/Heinkhantphyoe/Movie",
      details:
        "A movie web application that allows users to search for movies, view details, and watch from Youtube and Channel Myanmar using React and the TMDB API.",
    },

    
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-8 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent mt-14 md:mt-12 mb-8">My Portfolio</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">Here are some of my recent projects that showcase my skills and experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/20 overflow-hidden transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={project.path}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.details}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-white dark:bg-gray-700 text-primary hover:text-pink-500 rounded-lg text-sm font-medium transition-all duration-300 border-2 border-primary hover:border-pink-500"
                      >
                        View Demo
                      </a>
                    )}
                    <button
                      onClick={() => handleProjectClick(project.id)}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-pink-500 hover:from-pink-500 hover:to-primary text-white rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-2xl w-full relative shadow-2xl dark:shadow-gray-900/30"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <AiFillCloseCircle className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h2>

                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.path}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover object-center"
                  />
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedProject.details}
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  {selectedProject.code && (
                    <a
                      href={selectedProject.code}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-primary to-pink-500 hover:from-pink-500 hover:to-primary text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                    >
                      View Source
                    </a>
                  )}
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 bg-white dark:bg-gray-700 text-primary hover:text-pink-500 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 border-2 border-primary hover:border-pink-500"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* working skills and knowledges */}
      <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 px-4 lg:px-32 pt-8 pb-14 rounded-xl transition-all duration-200 mt-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className=" text-3xl mb-8">Working Skills</p>

            <div className="skill mb-6">
              <div className="flex justify-between items-center mb-2">
                <p>web design</p>
                <p>90%</p>
              </div>
              <div>
                <div className="h-1 bg-gray-200 dark:bg-gray-700 w-full rounded-md transition-all duration-200 shadow-inner"></div>
                <div className="w-[90%] h-1 bg-green-400 mt-[-4.2px]  rounded-md"></div>
              </div>
            </div>
            <div className="skill mb-6">
              <div className="flex justify-between items-center mb-2">
                <p>mobile app</p>
                <p>60%</p>
              </div>
              <div>
                <div className="h-1 bg-gray-200 dark:bg-gray-700 w-full rounded-md transition-all duration-200 shadow-inner"></div>
                <div className="w-[60%] h-1 bg-red-400 mt-[-4.2px]  rounded-md"></div>
              </div>
            </div>
            <div className="skill mb-6">
              <div className="flex justify-between items-center mb-2">
                <p>RestApi</p>
                <p>90%</p>
              </div>
              <div>
                <div className="h-1 bg-gray-200 dark:bg-gray-700 w-full rounded-md transition-all duration-200 shadow-inner"></div>
                <div className="w-[90%] h-1 bg-violet-400 mt-[-4.2px]  rounded-md mb-2"></div>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-3xl mb-8">Knowledges</p>

            <div className="flex flex-wrap gap-4">
              <p className="py-2 px-7 rounded-md text-gray-600 dark:text-gray-400 bg-gray-300 dark:bg-gray-900 inline-block transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 hover:bg-primary hover:text-white dark:hover:bg-primary">
                Object-Oriented Programming (OOP)
              </p>
              <p className="py-2 px-7 rounded-md text-gray-600 dark:text-gray-400 bg-gray-300 dark:bg-gray-900 inline-block transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 hover:bg-primary hover:text-white dark:hover:bg-primary">
                Database Design & Management
              </p>
              <p className="py-2 px-7 rounded-md text-gray-600 dark:text-gray-400 bg-gray-300 dark:bg-gray-900 inline-block transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 hover:bg-primary hover:text-white dark:hover:bg-primary">
                RESTful API Development
              </p>
              <p className="py-2 px-7 rounded-md text-gray-600 dark:text-gray-400 bg-gray-300 dark:bg-gray-900 inline-block transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 hover:bg-primary hover:text-white dark:hover:bg-primary">
                Responsive Web Design
              </p>
              <p className="py-2 px-7 rounded-md text-gray-600 dark:text-gray-400 bg-gray-300 dark:bg-gray-900 inline-block transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 hover:bg-primary hover:text-white dark:hover:bg-primary">
                Version Control
              </p>
              <p className="py-2 px-7 rounded-md text-gray-600 dark:text-gray-400 bg-gray-300 dark:bg-gray-900 inline-block transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 hover:bg-primary hover:text-white dark:hover:bg-primary">
                Web Security Principles
              </p>
              <p className="py-2 px-7 rounded-md text-gray-600 dark:text-gray-400 bg-gray-300 dark:bg-gray-900 inline-block transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-900/10 hover:bg-primary hover:text-white dark:hover:bg-primary">
                Data Structures & Algorithms
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer
      <div className="bg-black shadow shadow-slate-700 px-4 lg:px-32 py-8  rounded-b-2xl">
        <p className="text-center text-lg">
          2022 All Rights Reserved by Hein Khant.
        </p>
      </div> */}
    </motion.div>
  );
};

export default Work;
