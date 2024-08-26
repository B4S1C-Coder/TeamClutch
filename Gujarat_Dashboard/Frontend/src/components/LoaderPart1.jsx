import React, { useEffect } from 'react';
import Site from './LoaderPart1.js'

const LoaderPart1 = () => {
  useEffect(() => {
    const site = new Site({ dom: document.querySelector('.canvas') });
  }, []);

  return (
    <div className="app w-full overflow-hidden h-screen text-white flex bg-zinc-900">
      <div className="canvas position-fixed z-0 top-0 left-0 w-1/2 h-screen relative">
        <div className="images w-[25vw] h-[32vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="absolute w-full h-full opacity-0 object-cover" src="/LoaderPart1/Images/Namo_Navodhya_Logo.png" alt="First" />
          <img className="absolute w-full h-full opacity-0 object-cover" src="/LoaderPart1/Images/Khushboo_Modi.jpg" alt="Second" />
          <img className="absolute w-full h-full opacity-0 object-cover" src="/LoaderPart1/Images/Somya_Bansal.jpg" alt="Third" />
          <img className="absolute w-full h-full opacity-0 object-cover" src="/LoaderPart1/Images/Namanmeet_Singh.jpg" alt="Fourth" />
          <img className="absolute w-full h-full opacity-0 object-cover" src="/LoaderPart1/Images/Ashmit_Cajla.png" alt="Fifth" />
          <img className="absolute w-full h-full opacity-0 object-cover" src="/LoaderPart1/Images/Saksham_Mittal.png" alt="Sixth" />
          <img className="absolute w-full h-full opacity-0 object-cover" src="/LoaderPart1/Images/Priyansh_Saxena.png" alt="Seventh" />
        </div>
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="links flex flex-col gap-10">
          <a className="transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-6xl" href="#">
            <small className="text-xl tracking-normal"></small>
            Team Clutch
          </a>
          <a className="transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-4xl" href="https://github.com/KhushbooModi2803">
            <small className="text-xl tracking-normal">01.</small>
            Khushboo Modi
          </a>
          <a className="transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-4xl" href="https://github.com/somya17bansal">
            <small className="text-xl tracking-normal">02.</small>
            Somya Bansal
          </a>
          <a className="transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-4xl" href="https://github.com/NamanmeetSingh">
            <small className="text-xl tracking-normal">03.</small>
            Namanmeet Singh
          </a>
          <a className="transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-4xl" href="https://github.com/AshmitCajla">
            <small className="text-xl tracking-normal">04.</small>
            Ashmit Cajla
          </a>
          <a className="transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-4xl" href="https://github.com/B4S1C-Coder">
            <small className="text-xl tracking-normal">05.</small>
            Saksham Mittal
          </a>
          <a className="transition-all hover:ml-5 opacity-30 hover:opacity-100 block tracking-tighter text-4xl" href="https://github.com/priyanshsaxena24">
            <small className="text-xl tracking-normal">06.</small>
            Priyansh Saxena
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoaderPart1;
