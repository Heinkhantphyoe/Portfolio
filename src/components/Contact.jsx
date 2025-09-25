import React, { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   if (!validateForm()) return;

    try {
      const response = await fetch("https://formsubmit.co/heinkhantphyoe2811@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/thankyou"); 
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  return (
    <motion.div
      className="px-4 mx-auto md:mt-14 mt-8 text-gray-900 dark:text-white mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 3 }}
    >
      <div className="bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 py-14 px-4 lg:px-20 rounded-t-2xl transition-colors duration-200">
        <p className="text-3xl heading mb-8">Contact</p>

        <div className="lg:flex gap-10">
          {/* Left side info */}
          <div className="left-side">
            <div className="flex gap-3 border border-gray-300 dark:border-gray-600 px-4 py-6 rounded-xl mb-8 bg-white dark:bg-gray-800">
              <FaPhoneVolume className="text-3xl text-blue-600 mt-3" />
              <div>
                <p className="text-2xl mb-2 font-bold">Phone :</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">09-988 343 986</p>
              </div>
            </div>

            <div className="flex gap-3 border border-gray-300 dark:border-gray-600 px-4 py-6 rounded-xl mb-8 bg-white dark:bg-gray-800">
              <MdEmail className="text-4xl text-yellow-600 mt-3" />
              <div className="flex flex-col">
                <p className="text-2xl mb-2 font-bold">Email :</p>
                <p className="text-lg text-slate-400">
                  heinkhantphyoe2811
                  <span className="hidden sm:inline">@gmail.com</span>
                  <p className="sm:hidden">@gmail.com</p>
                </p>
              </div>
            </div>

            <div className="flex gap-3 border border-gray-300 dark:border-gray-600 px-4 py-6 rounded-xl mb-8 bg-white dark:bg-gray-800">
              <FaMapMarkedAlt className="text-4xl text-red-600 mt-3" />
              <div>
                <p className="text-2xl mb-2 font-bold">Address :</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">ChanMyaTharzi ,</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">Mandalay</p>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="right-side w-full border border-gray-300 dark:border-gray-600 rounded-xl p-10 bg-white dark:bg-gray-800">
            <p className="text-2xl">I'm always open to discussing product design,</p>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mt-1">work or partnerships.</p>

            <form className="mt-14"
              onSubmit={handleSubmit}
            >

              <div className="relative mb-16">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className={`py-1 bg-transparent border-b ${
                    errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none w-10/12 peer focus:border-b-2 focus:border-primary text-gray-900 dark:text-white`}
                />
                <label className="absolute top-[-20px] left-0 peer-focus:text-sm peer-focus:text-primary">
                  Name*
                </label>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="relative mb-16">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className={`py-1 bg-transparent border-b ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none w-10/12 peer focus:border-b-2 focus:border-primary text-gray-900 dark:text-white`}
                />
                <label className="absolute top-[-20px] left-0 peer-focus:text-sm peer-focus:text-primary">
                  Email*
                </label>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="relative mb-16">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows="3"
                  className={`py-1 bg-transparent border-b ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none w-10/12 peer focus:border-b-2 focus:border-primary text-gray-900 dark:text-white`}
                ></textarea>
                <label className="absolute top-[-20px] left-0 peer-focus:text-sm peer-focus:text-primary">
                  Message*
                </label>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="py-2 px-5 font-bold outline-none ring-2 ring-gray-300 dark:ring-gray-600 rounded-md hover:bg-primary hover:text-white hover:ring-primary transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 px-4 lg:px-32 py-8 rounded-b-2xl">
        <p className="text-center text-lg">
          © 2022 All Rights Reserved by Hein Khant.
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
