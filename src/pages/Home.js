import React from "react";
import pict1 from "../img/gambar1.png";
import pict2 from "../img/gambar2.jpeg";
import pict3 from "../img/gambar3.png";
import YouTube from "react-youtube";
import ourvalue from "../img/ourvalue.png";
import "./Home.css";
const Home = () => {
  // const heigh = window.scrollY;
  // console.log(heigh, "ini heigh");
  const opts = {
    height: "300",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const opts1 = {
    height: "640",
    width: "900",
    playerVars: {
      autoplay: 10,
    },
  };
  const text = [
    "lecapturer is a creative house located in yogyakarta, we",
    "focus on always producing works that always have a story in",
    "it. We want our work to be enjoyed like a child who is always",
    "told a story before he sleeps.",
  ];
  const text2 = [
    "Videography",
    "Web Series",
    "Photography",
    "Social Media Management",
    "Logo & Branding",
  ];
  const text3 = [
    "IP development",
    "Scenario & CF",
    "Short film",
    "Web series, Feature & Series",
    "Creative writing",
  ];
  return (
    <div className="w-12/12 m-auto">
      <img src={pict3} className="pt-20 w-11/12 m-auto" />
      <div clasname="w-10/12 m-auto">
        <div clasname="w-10/12 pt-20" id="ourvalues">
          <img src={ourvalue} clasname="w-80" />
        </div>
      </div>
      <div id="portofolio" className="pt-20 w-3/12 lg:w-10/12 lg:m-auto">
        <div className="flex w-5/12 m-auto mt-10">
          <YouTube
            videoId="JsqR2AwLBwk"
            opts={opts}
            className="w-32 lg:w-64 h-44 "
          />
          <YouTube
            videoId="CA0R-EgJt9c"
            opts={opts1}
            className="w-44 lg:80 h-44 m-auto ml-5"
          />
        </div>
        <div className="flex w-5/12 m-auto mt-10">
          <YouTube
            videoId="cg6scJamnfs"
            opts={opts1}
            className="w-44 lg:80 h-44 m-auto "
          />
          <YouTube
            videoId="cg6scJamnfs"
            opts={opts}
            className="w-32 lg:w-64 h-44 ml-5"
          />
        </div>
        <div className="flex w-5/12 m-auto mt-10">
          <YouTube
            videoId="2g811Eo7K8U"
            opts={opts}
            className="w-32 lg:w-64 h-44 "
          />
          <YouTube
            videoId="2g811Eo7K8U"
            opts={opts1}
            className="w-44 lg:80 h-44 m-auto ml-5"
          />
        </div>
      </div>
      <img src={pict1} />
      <div className="" id="about">
        <img src={pict2} />
        <h3 className="text-white text-center text-2xl mt-10">Our Services</h3>
        {text.map((data, index) => (
          <p className="text-white text-center text-xs lg:text-xl">
            {text[index]}
          </p>
        ))}
        <div className="w-11/12 lg:w-5/12 grid grid-cols-2 gap-5 text-white m-auto mt-10">
          <div>
            {text2.map((data, index) => (
              <p className="text-center text-xs lg:text-base">{text2[index]}</p>
            ))}
          </div>
          <div>
            {text3.map((data, index) => (
              <p className="text-center text-xs lg:text-base">{text3[index]}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-10/12 m-auto mt-44" id="contact">
        <h3 className="text-white text-xl">CONTACT US</h3>
        <p className="text-white mt-10">Instagram.com/lecapturer.id</p>
        <p className="text-white">Linkedin</p>
        <p className="text-white">Contact Person +6285229077940</p>
      </div>
      <div className="w-10/12 m-auto mt-20">
        <h3 className="text-white text-xl">OUR LOCATIONS</h3>
        <div className="w-12/12 lg:w-4/12 grid grid-cols-2 gap-5 mt-10">
          <p className="text-white">Yogyakarta</p>
        </div>
      </div>
      {/* <p className="text-center text-9xl font-bold text-gray-600">THANK YOU</p>
      <p className="text-center text-9xl font-bold text-gray-600">
        FOR VISITING US
      </p> */}
      <div className="h-20" />
    </div>
  );
};

export default Home;
