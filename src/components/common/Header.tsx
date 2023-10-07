import React, { useCallback, useEffect, useState } from "react";
import headerLogo from "../../assets/headerLogo.svg";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Header: React.FC = () => {
  // const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState<string>("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const controlNavBar = useCallback(() => {
    if (window.scrollY > 200) {
      // if (window.scrollY > lastScrollY && !mobileMenu) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrollY, controlNavBar]);

  return (
    <header
      className={`w-full bg-white z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <div className="max-w-[1440px] px-5 lg:px-0 mx-auto py-4 lg:py-1 flex items-center justify-between">
        <div className="flex-1">
          <img src={headerLogo} alt="header nike logo" className="w-16 " />
        </div>
        <ul className="hidden lg:flex gap-3 px-20 ">
          <li className="group font-medium leading-[50px] px-1 cursor-pointer">
            <a href="#">New & Featured</a>
          </li>
          <li className="group font-medium leading-[50px] px-1 cursor-pointer">
            <a href="#">Men</a>
          </li>
          <li className="group font-medium leading-[50px] px-1 cursor-pointer">
            <a href="#">Women</a>
          </li>
          <li className="group font-medium leading-[50px] px-1 cursor-pointer border-b-2 border-black">
            <a href="#">Kids</a>
          </li>
          <li className="group font-medium leading-[50px] px-1 cursor-pointer">
            <a href="#">Sale</a>
          </li>
          <li className="hidden xl:block group font-medium leading-[50px] px-1 cursor-pointer">
            <a href="#">Customize with Nike By You</a>
          </li>
          <li className="hidden xl:block group font-medium leading-[50px] px-1 cursor-pointer">
            <a href="#">Sneakers</a>
          </li>
        </ul>
        <ul className="hidden lg:flex items-center gap-4">
          <li className="group py-2 px-4 rounded-full relative flex items-center gap-2 bg-gray-100 hover:bg-gray-200 w-52">
            <button>
              <AiOutlineSearch className="w-6 h-6 text-black" />
            </button>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="bg-transparent focus:outline-none group-hover:bg-gray-200 group-hover:placeholder:text-gray-500 w-full"
              autoComplete="off"
            />
          </li>
          <li>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <CiHeart className="w-7 h-7 text-black" />
            </button>
          </li>
          <li className="flex items-center justify-center relative group cursor-pointer">
            <button className="p-2 group-hover:bg-gray-200 rounded-full">
              <IoBagOutline className="w-6 h-6 text-black" />
            </button>
            <span className="text-[8px] absolute mt-1 font-medium">9+</span>
          </li>
        </ul>
        <ul className="flex lg:hidden gap-6">
          <li>
            <button>
              <AiOutlineSearch className="w-6 h-6 text-black" />
            </button>
          </li>
          <li className="flex items-center justify-center relative group cursor-pointer mt-[-10px]">
            <button className=" group-hover:bg-gray-200 rounded-full">
              <IoBagOutline className="w-6 h-6 text-black" />
            </button>
            <span className="text-[8px] absolute mt-1 font-medium">9+</span>
          </li>
          <li>
            <button>
              <FiUser className="w-6 h-6 font-" />
            </button>
          </li>
          <li>
            <button>
              <AiOutlineMenu className="w-6 h-6" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
