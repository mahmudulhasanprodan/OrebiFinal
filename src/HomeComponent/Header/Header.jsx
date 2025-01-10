import React from 'react'
import MainLogo from "../../assets/HomeComponentImage/Logo.png"
import { NavLink } from "react-router-dom";
import Flex from '../../CommonComponent/Flex/Flex';


const Header = () => {
  return (
    <div className="bg-Common_Color">
      <div className="container">
        <Flex className={"items-center justify-between py-8"}>
          <div>
            <picture>
              <img src={MainLogo} alt={MainLogo} />
            </picture>
          </div>
          <Flex className={"items-center gap-x-48"}>
            <div className="flex items-center gap-x-10">
              <NavLink to={"/"} className={"font-DM_Sans text-base font-bold"}>
                Home
              </NavLink>

              <NavLink
                to={"/shop"}
                className={
                  "font-DM_Sans text-Header_text_Color text-base font-normal"
                }
              >
                Shop
              </NavLink>

              <NavLink
                to={"/about"}
                className={
                  "font-DM_Sans text-Header_text_Color text-base font-normal"
                }
              >
                About
              </NavLink>

              <NavLink
                to={"/contact"}
                className={
                  "font-DM_Sans text-Header_text_Color text-base font-normal"
                }
              >
                Contact
              </NavLink>

              <NavLink
                to={"/blog"}
                className={
                  "font-DM_Sans text-Header_text_Color text-base font-normal"
                }
              >
                Blog
              </NavLink>
            </div>
            <Flex className={"items-center gap-x-6"}>
              <div>
                <button className="bg-Btn_Color text-Common_Color font-DM_Sans w-24 rounded-bl-[20px] py-2 text-base font-bold">
                  Login
                </button>
              </div>
              <div>
                <button className="text-Common_Color font-DM_Sans w-24 rounded-tr-[20px] bg-yellow-600 py-2 text-base font-bold">
                  SignUp
                </button>
              </div>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}

export default Header
