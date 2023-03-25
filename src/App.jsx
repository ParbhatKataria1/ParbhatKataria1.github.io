import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Stats from "./Components/Stats";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function App() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.45,
  });

  // const { ref: ref2, inView: inView2 } = useInView({
  //   threshold: 0.45,
  // });

  // const { ref: ref3, inView: inView3 } = useInView({
  //   threshold: 0.45,
  // });

  // const { ref: ref4, inView: inView4 } = useInView({
  //   threshold: 0.45,
  // });

  // const { ref: ref5, inView: inView5 } = useInView({
  //   threshold: 0.45,
  // });
  // const animation1 = useAnimation();
  // const animation2 = useAnimation();
  // const animation3 = useAnimation();
  // const animation4 = useAnimation();
  // const animation5 = useAnimation();
  // useEffect(() => {
  //   if (inView1) {
  //     animation1.start({
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         duration: 2,
  //         bounce: 0.3,
  //       },
  //     });
  //   }
  //   if (!inView1) {
  //     animation1.start({ y: "0vw", opacity: 0 });
  //   }

  //   if (inView2) {
  //     animation2.start({
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         duration: 2,
  //         bounce: 0.3,
  //       },
  //     });
  //   }
  //   if (!inView2) {
  //     animation2.start({ x: "-1vw", opacity: 0 });
  //   }

  //   if (inView3) {
  //     animation3.start({
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         duration: 2,
  //         bounce: 0.3,
  //       },
  //     });
  //   }
  //   if (!inView3) {
  //     animation3.start({ x: "-1vw", opacity: 0 });
  //   }

  //   if (inView4) {
  //     animation4.start({
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         duration: 2,
  //         bounce: 0.3,
  //       },
  //     });
  //   }
  //   if (!inView4) {
  //     animation4.start({ x: "-1vw", opacity: 0 });
  //   }

  //   if (inView5) {
  //     animation5.start({
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         duration: 2,
  //         bounce: 0.3,
  //       },
  //     });
  //   }
  //   if (!inView5) {
  //     animation5.start({ x: "-1vw", opacity: 0 });
  //   }
  //   console.log("thisis gdas");
  // }, [inView1, inView2, inView3, inView4, inView5]);

  return (
    <div style={{ marginTop: "0px" }}>
      <Navbar />
      {/* <div ref={ref1}>
        <motion.div animate={animation1}> */}
      <Home />
      {/* </motion.div>
      </div> */}

      {/* <div ref={ref2}>
        <motion.div animate={animation2}> */}
      <About />
      {/* </motion.div>
      </div> */}

      {/* <div ref={ref3}>
        <motion.div animate={animation3}> */}
      <Skills />
      {/* </motion.div>
      </div> */}

      {/* <div ref={ref4}>
        <motion.div animate={animation4}> */}
      <Projects />
      {/* </motion.div>
      </div> */}

      {/* <div ref={ref5}>
        <motion.div animate={animation5}> */}
      <Stats />
      {/* </motion.div>
      </div> */}

      <Contact />
    </div>
  );
}

export default App;
