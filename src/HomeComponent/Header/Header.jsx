import React, { useState } from 'react'
import MainLogo from "../../assets/HomeComponentImage/Logo.png"
import { NavLink } from "react-router-dom";
import Flex from '../../CommonComponent/Flex/Flex';
import { FaBars } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdOutlineCallMerge } from "react-icons/md";
import { FaBlogger } from "react-icons/fa6";





const Header = () => {

  const[MenubarOpen,setMenubarOpen] = useState(false);

  // HandleMenuBar function is here
  const HandleMenuBar = () => {
    setMenubarOpen(!MenubarOpen);
  };

  
  return (
    <div className="bg-Common_Color fixed md:static z-10 md:z-0 w-full md:w-[100%] pl-4 xl:pl-0 md:pr-4 xl:pr-0">
      <div className="container">
        <Flex className={"items-center justify-between py-4"}>
          <div className="cursor-pointer md:hidden lg:block">
            <picture>
              <img src={MainLogo} alt={MainLogo} />
            </picture>
          </div>
          <div className={"flex items-center gap-x-48 md:gap-x-32 lg:gap-x-48"}>
            <div
              className={`absolute z-10 md:z-0 flex flex-col items-center gap-x-24 md:static md:flex-row ${MenubarOpen ? "right-0 top-10 h-[300px] w-48 bg-slate-200 py-2 transition-all delay-150 ease-in-out md:h-0" : "right-[-100%] top-0 h-[200px] transition-all delay-150 ease-in-out md:h-0"}`}
            >
              <NavLink
                to={"/"}
                className={
                  "md:border-b-gray-0 flex w-48 items-center gap-x-4 border-b-[1px] border-b-gray-300 py-2 font-Lato text-base hover:bg-slate-100 md:w-0 md:border-b-0 md:py-0 md:hover:bg-none"
                }
              >
                <span className="pl-5 md:hidden">
                  <IoHome />
                </span>
                <h3>Home</h3>
              </NavLink>

              <NavLink
                to={"/"}
                className={
                  "md:border-b-gray-0 flex w-48 items-center gap-x-4 border-b-[1px] border-b-gray-300 py-2 font-Lato text-base hover:bg-slate-100 md:w-0 md:border-b-0 md:py-0 md:hover:bg-none"
                }
              >
                <span className="pl-5 md:hidden">
                  <FaShopify />
                </span>
                <h3>Shop</h3>
              </NavLink>

              <NavLink
                to={"/"}
                className={
                  "md:border-b-gray-0 flex w-48 items-center gap-x-4 border-b-[1px] border-b-gray-300 py-2 font-Lato text-base hover:bg-slate-100 md:w-0 md:border-b-0 md:py-0 md:hover:bg-none"
                }
              >
                <span className="pl-5 md:hidden">
                  <FaUserPen />
                </span>
                <h3>About</h3>
              </NavLink>

              <NavLink
                to={"/"}
                className={
                  "md:border-b-gray-0 flex w-48 items-center gap-x-4 border-b-[1px] border-b-gray-300 py-2 font-Lato text-base hover:bg-slate-100 md:w-0 md:border-b-0 md:py-0 md:hover:bg-none"
                }
              >
                <span className="pl-5 md:hidden">
                  <MdOutlineCallMerge />
                </span>
                <h3>Contact</h3>
              </NavLink>

              <NavLink
                to={"/"}
                className={
                  "md:border-b-gray-0 flex w-48 items-center gap-x-4 border-b-[1px] border-b-gray-300 py-2 font-Lato text-base hover:bg-slate-100 md:w-0 md:border-b-0 md:py-0 md:hover:bg-none"
                }
              >
                <span className="pl-5 md:hidden">
                  <FaBlogger />
                </span>
                <h3>Blog</h3>
              </NavLink>
            </div>

            <div className="hidden md:block ">
              <Flex className={"items-center gap-x-6"}>
                <div>
                  <button className="w-24 rounded-bl-[20px] bg-Btn_Color py-2 font-DM_Sans text-base font-bold text-Common_Color">
                    Login
                  </button>
                </div>
                <div>
                  <button className="w-24 rounded-tr-[20px] bg-yellow-600 py-2 font-DM_Sans text-base font-bold text-Common_Color">
                    SignUp
                  </button>
                </div>
              </Flex>
            </div>
          </div>

          <div
            className={`cursor-pointer px-4 md:hidden md:px-0 ${MenubarOpen && "text-yellow-600"}`}
            onClick={HandleMenuBar}
          >
            <span>
              <FaBars />
            </span>
          </div>
        </Flex>
      </div>
    </div>
  );
}

export default Header
