import React, { useState } from "react";
import { ArrowRight, Briefcase, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setIsSubmitting(true);

    try {
      const serviceId = process.env.REACT_APP_SERVICEID;
      const templateId = process.env.REACT_APP_TEMPLATEID;
      const publicKey = process.env.REACT_APP_PUBLICKEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "heinkhantphyoe2811@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setFormData({ name: "", email: "", message: "" });
      navigate("/thankyou");
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
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
      className="px-4 mx-auto md:mt-12 text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 0.6 }}
    >
      <div className="py-14 px-4 lg:px-20 transition-colors duration-200">
        <div className="mb-8">
          <p className="text-3xl md:text-4xl font-semibold">Contact</p>
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-6">
          <aside className="space-y-4">
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white/90 dark:bg-gray-900/80 p-5">
              <p className="text-lg font-semibold mb-3">Open to Opportunities</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                I am currently open to internship and junior software engineering roles.
              </p>
            </div>

            <div className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white/90 dark:bg-gray-900/80 p-5 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <Mail size={16} />
                <span>heinkhantphyoe2811@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <MapPin size={16} />
                <span>Mandalay, Myanmar</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <Briefcase size={16} />
                <span>Internship / Junior Software Roles</span>
              </div>
            </div>

            <div className="border border-gray-300 dark:border-gray-700 rounded-lg bg-white/90 dark:bg-gray-900/80 p-5">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Quick Links</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Heinkhantphyoe"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/hein-khant-phyoe-20b834366/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          <div className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-6 md:p-8 bg-white/90 dark:bg-gray-900/80">
            <p className="text-xl font-semibold">Send a message</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Feel free to reach out for collaboration, product ideas, or job opportunities.
            </p>

            <a
              href="mailto:heinkhantphyoe2811@gmail.com"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-sm font-medium"
            >
              <Mail size={16} />
              Email Me
            </a>

            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">Name*</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                  disabled={isSubmitting}
                  className={`h-11 px-3 bg-transparent border rounded-md ${
                    errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                  } focus:outline-none focus:ring-2 focus:ring-primary/40 w-full text-gray-900 dark:text-white disabled:opacity-50`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">Email*</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  disabled={isSubmitting}
                  className={`h-11 px-3 bg-transparent border rounded-md ${
                    errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                  } focus:outline-none focus:ring-2 focus:ring-primary/40 w-full text-gray-900 dark:text-white disabled:opacity-50`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  autoComplete="off"
                  rows="5"
                  disabled={isSubmitting}
                  className={`px-3 py-2 bg-transparent border rounded-md ${
                    errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                  } focus:outline-none focus:ring-2 focus:ring-primary/40 w-full text-gray-900 dark:text-white disabled:opacity-50 resize-none`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 py-2.5 px-5 font-semibold outline-none border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <ArrowRight size={16} />}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-32 py-8 rounded-b-2xl">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">© 2026 Hein Khant Phyoe. All rights reserved.</p>
      </div>
    </motion.div>
  );
};

export default Contact;
