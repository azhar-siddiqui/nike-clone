import React from "react";
import preHeaderImg from "../../assets/preHeaderImg.svg";

const PreHeader: React.FC = () => {
  return (
    <nav className="w-full bg-gray-100 hidden lg:block">
      <div className="max-w-[1440px] px-5 lg:px-0 mx-auto py-2 flex justify-between items-center">
        <img src={preHeaderImg} alt="PreHeaderImages" className="w-5" />
        <ul className="ms-auto flex">
          <li className="text-xs font-medium">
            <a href="#" className="border-r-2 border-black px-3">
              Find a Store
            </a>
          </li>
          <li className="text-xs font-medium">
            <a href="#" className="border-r-2 border-black px-3">
              Help
            </a>
          </li>
          <li className="text-xs font-medium">
            <a href="#" className="border-r-2 border-black px-3">
              Join Us
            </a>
          </li>
          <li className="text-xs font-medium">
            <a href="#" className="px-3">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PreHeader;
