import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import DarkModeToggle from "./DartModeToggle";
import { motion, AnimatePresence } from "framer-motion";
import myResume from "../assets/images/hkpResume.png";
import { Download } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 120);
      return;
    }

    scrollToSection(sectionId);
  };

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [menuOpen]);

  return (
    <div className="sticky top-0 z-30">
      <nav className="text-gray-900 dark:text-white flex justify-between items-center py-4 px-6 lg:px-20 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md fixed w-full top-0 left-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <p className="text-xl md:text-2xl font-semibold tracking-tight">Hein Khant Phyoe</p>

        <div className="flex items-center gap-6">
          <DarkModeToggle />
          <ul className="lg:flex hidden items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`tracking-wide transition-all ${
                    activeSection === item.id
                      ? "text-primary font-semibold text-base"
                      : "text-gray-700 dark:text-gray-300 text-sm hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div
            className="lg:hidden text-3xl text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 cursor-pointer"
            onClick={handleMenu}
          >
            {menuOpen ? (
              <AiOutlineClose className="text-2xl font-bold text-gray-600 dark:text-gray-300" />
            ) : (
              <HiMenu className="text-2xl text-gray-600 dark:text-gray-300 font-bold" />
            )}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[72px] bg-black/30 backdrop-blur-[1px] lg:hidden z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[72px] left-0 w-full bg-white/98 dark:bg-gray-950/98 backdrop-blur-md lg:hidden z-50 overflow-y-auto border-t border-gray-200 dark:border-gray-800 max-h-[70vh]"
            >
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.05 }}
                className="flex flex-col py-4 px-4"
              >
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 min-h-12 rounded-md transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-primary/10 text-primary font-semibold text-base"
                          : "hover:bg-primary/10 text-gray-800 dark:text-gray-200 text-base"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className="mt-4">
                  <a
                    download="Hein Khant Phyoe's CV"
                    rel="noreferrer"
                    target="_blank"
                    href={myResume}
                    className="inline-flex items-center justify-center gap-2 w-full min-h-12 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition"
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800">
                      <Download size={14} />
                    </span>
                    Download Resume
                  </a>
                </li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
