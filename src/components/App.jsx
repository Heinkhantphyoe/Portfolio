import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";

import AnimatedRoute from "./AnimatedRoute";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import PreLoader from "./PreLoader";
import ScrollToTop from "./ScrollTop";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Loading = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    Loading();
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <Router>
          <ScrollToTop/>
          <AnimatePresence>
            <Nav />
            <AnimatedRoute />
          </AnimatePresence>
        </Router>
      )}
    </>
  );
};

export default App;
