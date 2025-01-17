import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Flex from '../../CommonComponent/Flex/Flex';
import { Link } from 'react-router-dom';
import Imag from "../../assets/HomeComponentImage/Image.png"



const Menu = () => {
const [MouseHover,setMouseHover] = useState(false);


// HandleMouseEnter Function Start Here
    const HandleMouseEnter = () => {
        setMouseHover(!MouseHover);
};

// HandleMouseLeave Function Start Here
    const HandleMouseLeave = () => {
    setMouseHover(false);
};

  return (
    <>
      <div className="bg-Menu_Color py-4 pt-16 md:pt-0">
        <div className="container">
          <Flex className={"items-center justify-between"}>
            <div className="relative flex cursor-pointer items-center gap-x-2 px-4 md:px-0">
              <div
                className="flex items-center gap-x-2"
                onMouseEnter={HandleMouseEnter}
              >
                <span className={`${MouseHover && "text-yellow-600"}`}>
                  <FaBarsStaggered />
                </span>
                <p>Shop by Category</p>
              </div>
              {MouseHover && (
                <div
                  className="absolute z-10 top-8 h-[250px] w-[200px] overflow-hidden border-[1px] border-gray-300 bg-Common_Color"
                  onMouseLeave={HandleMouseLeave}
                >
                  <ul className="flex flex-col">
                    <Link
                      to={"/"}
                      className="flex items-center justify-between py-1 pl-3 hover:bg-gray-400 hover:text-Common_Color"
                    >
                      Beauty
                      <span className="text-Common_Color">
                        <FaAngleRight />
                      </span>
                    </Link>
                    <Link
                      to={"/"}
                      className="flex items-center justify-between py-1 pl-3 hover:bg-gray-400 hover:text-Common_Color"
                    >
                      Fragrances
                      <span className="text-Common_Color">
                        <FaAngleRight />
                      </span>
                    </Link>
                    <Link
                      to={"/"}
                      className="flex items-center justify-between py-1 pl-3 hover:bg-gray-400 hover:text-Common_Color"
                    >
                      Groceries
                      <span className="text-Common_Color">
                        <FaAngleRight />
                      </span>
                    </Link>
                    <Link
                      to={"/"}
                      className="flex items-center justify-between py-1 pl-3 hover:bg-gray-400 hover:text-Common_Color"
                    >
                      Furniture
                      <span className="text-Common_Color">
                        <FaAngleRight />
                      </span>
                    </Link>
                    <Link
                      to={"/"}
                      className="flex items-center justify-between py-1 pl-3 hover:bg-gray-400 hover:text-Common_Color"
                    >
                      Women Clothes
                      <span className="text-Common_Color">
                        <FaAngleRight />
                      </span>
                    </Link>
                    <Link
                      to={"/"}
                      className="flex items-center justify-between py-1 pl-3 hover:bg-gray-400 hover:text-Common_Color"
                    >
                      Men Clothes
                      <span className="text-Common_Color">
                        <FaAngleRight />
                      </span>
                    </Link>
                    <Link
                      to={"/"}
                      className="flex items-center justify-between py-1 pl-3 hover:bg-gray-400 hover:text-Common_Color"
                    >
                      Electronics Device
                      <span className="text-Common_Color">
                        <FaAngleRight />
                      </span>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div className="relative hidden md:block">
              <div>
                <input
                  type="text"
                  id="SearchId"
                  name="SearchId"
                  placeholder="Search Products"
                  className="w-[500px] border-2 py-2 pl-3"
                />
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-2/4 cursor-pointer">
                <span>
                  <IoSearch />
                </span>
              </div>
            </div>
            <div className="relative flex cursor-pointer items-center gap-x-6 px-4 md:px-0">
              <div className="flex items-center gap-x-1">
                <span>
                  <FaUser />
                </span>
                <span>
                  <FaCaretDown />
                </span>
              </div>
              {/* <div className="absolute top-6 right-10 w-[150px] bg-white rounded-md shadow-md">
                <h3 className="py-2 pl-3 font-Lato font-bold hover:bg-gray-300">My Account</h3>
                <p className="py-2 pl-3 font-Lato font-bold hover:bg-gray-300">Log Out</p>
              </div> */}
              <span>
                <FaShoppingCart />
              </span>
              {/* <div className="absolute right-0 top-6 h-[500px] w-[300px]">
                <div className="absolute right-0 top-6 h-[400px] w-[300px] overflow-y-scroll scrollbar-thumb-gray-700 scrollbar-track-gray-300 scrollbar-thin  rounded-md border-[1px] border-gray-300 bg-gray-100">
                  <div className="flex items-center justify-between border-b-[1px] border-gray-300 hover:bg-gray-300">
                    <div className="flex items-center gap-x-3 py-2 pl-2">
                      <picture>
                        <img
                          src={Imag}
                          alt={Imag}
                          className="h-24 w-24 border-2"
                        />
                      </picture>
                      <div>
                        <h2 className="font-Lato text-base font-semibold">
                          Furniture....
                        </h2>
                        <p className="font-Lato text-sm font-semibold">
                          $48.00
                        </p>
                      </div>
                    </div>
                    <div className="pr-3">
                      <span>
                        <FaAngleRight />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 h-[100px] w-[300px] rounded-b-md border-[1px] border-gray-300 bg-[#D8D8D8]">
                  <button className="m-auto mt-6 block w-48 bg-Btn_Color py-3 font-Lato text-lg font-bold text-Common_Color hover:bg-yellow-700">
                    Cheackout
                  </button>
                </div>
              </div> */}
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Menu
