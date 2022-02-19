import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import "./App.css";
import { useRef, useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
function App() {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [heigh, setHeigh] = useState(0);
  var scroll = Scroll.animateScroll;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHeigh(currentScrollY);
      if (currentScrollY > 5) {
        setGoingUp(true);
      } else {
        setGoingUp(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  return (
    <div className="">
      <div className="bg-black w-12/12">
        <Navbar />
      </div>
      <div className="w-full bg-black">
        <Home />
      </div>
      {heigh !== 0 && (
        <div className="footer">
          <IconContext.Provider value={{ color: "white", size: "40px" }}>
            <div
              className="w-10 h-10 bg-yellow-500 float-right mr-5 mb-5 text-center"
              onClick={() =>
                scroll.scrollToTop({
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                  containerId: "ContainerElementID",
                  offset: 50,
                })
              }
            >
              <AiOutlineArrowUp />
            </div>
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
}

export default App;
