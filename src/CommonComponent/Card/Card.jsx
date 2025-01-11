import React from 'react'
import img from "../../assets/HomeComponentImage/Image.png"

const Card = () => {
  return (
    <>
      <div className="h-[300px] w-[200px] cursor-pointer rounded-sm bg-Common_Color shadow-md">
        <div className="h-[180px] w-full">
          <picture>
            <img src={img} alt={img} className="h-full w-full" />
          </picture>
        </div>
        <div className="pl-4 mt-2">
          <div>
            <h2 className="font-DM_Sans text-base font-bold">Furniture</h2>
            <p className="font-DM_Sans font-bold text-xl text-yellow-700">$45.00</p>
          </div>
          <div>
            <del className="font-DM_Sans text-base mr-2">$129</del>
            <span className="bg-yellow-700 px-1 py-1 font-Lato text-sm font-bold text-Common_Color rounded-md">
              85%
            </span>
            <h3>*****</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card
