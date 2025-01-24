import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import Flex from "../../CommonComponent/Flex/Flex"
import { DropdownData,DropdownShowData } from '../../../JsonData/JsonData';





const RightTop = () => {

const[DataOne,setDataOne] = useState(DropdownData);
const[DataTwo,setDataTwo] = useState(DropdownShowData);


  return (
    <>
      <div className="py-2 bg-slate-100 shadow-md">
        <Flex className={"items-center justify-between cursor-pointer px-2"}>
          <div>
            <div className="flex items-center gap-x-3">
              <div className="bg-slate-400 p-2">
                <FaBars className="font-bold text-2xl text-Common_Color" />
              </div>
              <div>
                <FaBarsStaggered className="font-bold text-2xl" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-14">
            <div>
              <select
                name="Short"
                id="Short"
                className="w-52 border-2 border-slate-200 py-1 px-1 cursor-pointer"
              >
                <option value="feature">Select Item</option>
                {DataOne?.map((item) => (
                  <option value={item.product} key={item.product}>
                    {item.product}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="#" className="font-DM_Sans font-bold text-base">
                Show:
              </label>
              <select
                name="ItemList"
                id="ItemList"
                className="w-32 border-2 border-slate-200 py-1 px-1 cursor-pointer"
              >
                <option value="Select Item">Select Item</option>
                {DataTwo?.map((item) => (
                  <option value={item.product} key={item.product}>
                    {item.product}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Flex>
      </div>
    </>
  );
}

export default RightTop
