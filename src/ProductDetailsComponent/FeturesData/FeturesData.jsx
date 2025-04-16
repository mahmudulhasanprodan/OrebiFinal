import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const FeturesData = ({Title}) => {

const[dropdown,setdropdown]= useState(false);

// HandleDescription Function Start Here

const HandleDescription = () => {
  setdropdown(!dropdown);
};

  return (
    <>
      <div className="flex items-center justify-between w-[60%] py-1 cursor-pointer">
        <h2 className="text-Btn_Color font-DM_Sans font-bold">
          {Title ? Title : "No Title"}
        </h2>
        <span onClick={HandleDescription}>
          {dropdown ? <FaMinus /> : <FaPlus />}
        </span>      
      </div>
      <div>
      {dropdown && (
          <p className="font-DM_Sans text-base w-[60%] text-Text_Color py-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            iure minus quidem quae sunt? Nisi veniam, dolor quisquam temporibus
            corrupti ipsum doloribus assumenda minima facere.
          </p>
        )}
      </div>
    </>
  );
}

export default FeturesData
