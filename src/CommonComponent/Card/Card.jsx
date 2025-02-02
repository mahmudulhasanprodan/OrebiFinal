import React from 'react'
import img from "../../assets/HomeComponentImage/Image.png"

const Card = ({Title,Price,Arrivalpic}) => {
  return (
    <>
      <div className="h-auto md:h-[300px] w-[200px] cursor-pointer rounded-sm bg-Common_Color shadow-sm hover:shadow-md ml-2">
        <div className="h-[180px] w-full">
          <picture>
            <img src={Arrivalpic} alt={Arrivalpic} className="h-[200px] w-full" />
          </picture>
        </div>
        <div className="pl-4 mt-6">
          <div>
            <h2 className="font-DM_Sans text-base font-bold">{Title ? `${Title}...` : "No Title"}</h2>
            <p className="font-DM_Sans font-bold text-xl text-yellow-700">{Price ? `$${Price}` : "$45.00"}</p>
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
