import React, { useState } from 'react'



const RightDetails = ({Title,ShopImage,Price}) => {


const[MouseEnter,setMouseEnter] = useState(false)

// HandleEnter Function Start Here
const HandleEnter = () => {
    setMouseEnter(!MouseEnter);
};

// HandleLeave Function start Here
const HandleLeave = () => {
    setMouseEnter(false);
};


  return (
    <>
      <div className='mx-3'>
        <div
          className="w-[280px] h-[350px] relative cursor-pointer shadow-md"
          onMouseEnter={HandleEnter}
          onMouseLeave={HandleLeave}
        >
          <div>
            <div className="relative">
              <div className="absolute pl-8 pt-8">
                <button className="px-6 py-1 bg-Btn_Color text-Common_Color">
                  New
                </button>
              </div>
              <picture>
                <img
                  src={ShopImage}
                  alt={ShopImage}
                  className="w-full h-[300px] cursor-pointer"
                />
              </picture>
            </div>
            <div className="flex items-center justify-between py-3 px-2">
              <h2 className="font-Lato text-lg text-Btn_Color font-bold">
                {Title ? `${Title}...` : "Basic Crew Neck Tee"}
              </h2>
              <p className="font-DM_Sans font-bold text-sm text-Text_ColorTwo">
                {Price ? Price : "$44.00"}
              </p>
            </div>
            <div>
              {MouseEnter && (
                <div className="w-full h-[300px] bg-slate-100 opacity-80 absolute top-0 left-0">
                  <div className="flex items-center justify-center h-full opacity-100">
                    <button className="px-6 py-2 bg-Btn_Color font-bold text-Common_Color opacity-100">
                      View Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightDetails
