import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Flex from '../../../CommonComponent/Flex/Flex';


const FooterBottom = () => {
  return (
    <>
      <div className="bg-Footer_Color border-t-2 border-t-yellow-600 md:border-t-black">
        <div className="container">
          <Flex className={"items-center justify-between py-6"}>
            <div className="hidden md:block">
              <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
            <div className="flex items-center justify-center md:justify-end w-full md:w-[100%] gap-x-4 cursor-pointer">
              <IoLogoFacebook className="w-6 h-6 cursor-pointer hover:text-blue-500"/>
              <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-blue-500"/>
              <FaSquareInstagram className="w-6 h-6 cursor-pointer hover:text-blue-500"/>
            </div>
          </Flex>
        </div>
      </div>
    </>
  )
}

export default FooterBottom
