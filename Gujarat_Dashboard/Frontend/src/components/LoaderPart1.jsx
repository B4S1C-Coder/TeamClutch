import React, { useEffect } from "react";
import { gsap } from "gsap";

const LoaderPart1 = () => {
  useEffect(() => {
    gsap.fromTo(
      ".text-container h1",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      ".text-container p",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/LoaderPart1/backgroundVideo.mp4"
        autoPlay
        loop
        muted
      />
      
      {/* Solid Gray Color Overlay */}
      <div className="h-screen w-full bg-gray-700/75 absolute top-0 left-0 z-10"></div>
      
      {/* Logo and Text */}
      <div className="relative z-10 flex items-center h-full px-12">
        {/* Logo with Glow Effect */}
        <div className="logo-container">
          <img
            src="/LoaderPart1/Namo_Navodhya_Logo.png"
            alt="Logo"
            className="object-contain filter drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          />
        </div>

        {/* Text */}
        <div className="text-container text-white">
          <h1 className="text-4xl font-bold">Team Clutch</h1>
          <p className="mt-4 text-xl">Khushboo Modi</p>
          <p className="text-xl">Somya Bansal</p>
          <p className="text-xl">Namanmeet Singh</p>
          <p className="text-xl">Ashmit Cajla</p>
          <p className="text-xl">Saksham Mittal</p>
          <p className="text-xl">Priyansh Saxena</p>
        </div>
      </div>
    </div>
  );
};

export default LoaderPart1;
