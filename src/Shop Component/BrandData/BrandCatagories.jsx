import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";


const BrandCatagories = ({Title,AllData=["One","Two","Three"],DropDown,Expand}) => {

const[Brandshow,setBrandshow] = useState(Expand);
// HandleShowBrand function start here

const HandleShowBrand = () => {
  setBrandshow(!Brandshow);
};

  return (
    <>
      <div>
        <div className="flex items-center justify-between pr-3 cursor-pointer mt-4 bg-yellow-500">
          <div>
            <h2 className="font-DM_Sans font-bold text-xl text-black pl-1">
              {Title ? Title : "Title Missing"}
            </h2>
          </div>
          <div onClick={HandleShowBrand}>
            {DropDown && (
              <span>
                {Brandshow ? (
                  <TiMinus className="font-bold text-xl" />
                ) : (
                  <FaPlus />
                )}
              </span>
            )}
          </div>
        </div>
        {Brandshow && (
          <div className="mt-2 divide-y divide-slate-200">
            {AllData?.map((item) => (
              <div key={item.id}>
                <p className="font-DM_Sans text-base font-bold pl-2 py-1 text-Btn_Color hover:bg-yellow-700 cursor-pointer hover:text-Common_Color">
                  {item.Brand ? item.Brand : item.Price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default BrandCatagories
