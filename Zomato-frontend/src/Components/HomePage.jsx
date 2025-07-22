
import React from "react";
import { useNavigate } from "react-router-dom";
import Zomatostats from "./Zomatostats";
import Footer from "./Footer";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ position: "relative min-h-screen", height: "100vh",  }} className="m-0 p-0">
      {/* Background video */}
      <video
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div className="absolute top-4 right-4 flex gap-4 zindex-10">
        <button
          onClick={() => navigate("/Login")}
          className="bg-blue-500 hover:bg-slate-600 text-white px-4 py-2 rounded-md shadow z-30"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/Signup")}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md shadow "
        >
          Signup
        </button>
      </div>

      {/* Foreground content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4 z-20 mt-25 gap-3">
        {/* Zomato logo */}
        <img
          className="h-10 md:h-14 lg:h-15 mb-4 "
          src="/zomatoimg.avif"
          alt="Zomato"
          loading="eager"
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 ">
          India’s #1 <br /> <h1 gap-5>food delivery app </h1>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg mb-6 lg:text-3xl font-medium">
          Experience fast & easy online ordering <br />
          on the Zomato app
        </p>

        {/* App download buttons */}
        <div className="flex gap-4 mb-8 ">
          <a
            href="https://link.zomato.com/xqzv/iwz6g6kg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Get it on Play Store"
              className="h-12 hover:scale-110 transition-transform "
              src="https://b.zmtcdn.com/data/o2_assets/aad864bd17860b27634fe621001c32db1739350431.png"
            />
          </a>
          <a
            href="https://link.zomato.com/xqzv/xigpfha6"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="Download on App Store"
              className="h-12 hover:scale-110 transition-transform"
              src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png"
            />
          </a>
        </div>

        {/* Bouncing scroll indicator */}
        <div className=" text-sm md:text-base cursor-pointer pt-10">
          <p className="animate-bounce">⬇ Scroll down</p>
        </div>
      </div>
      <Zomatostats />
      <Footer />
    </div>
  );
};

export default HomePage;
