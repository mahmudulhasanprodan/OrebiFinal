import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";



const CatagoryData = ({Title,AllData=["One","Two","Three"]}) => {

  const [showCategories, setshowCategories] = useState(
    AllData.map(() => false)
  );


console.log(showCategories);

  // HandleShow function start here

  const HandleShow = (id) => {
    setshowCategories((previousData) => { 
     return previousData.map((value, index) => {
       return id === index ? !value : false;
     });
    });
  };


  return (
    <>
      <div>
        <div>
          <h2 className="font-DM_Sans font-bold text-xl text-black bg-yellow-500 pl-1">
            {Title ? Title : "Title Missing"}
          </h2>
        </div>
        <div className="mt-2 divide-y divide-slate-200 py-1 pl-2">
          {AllData?.map((item, index) =>
            item.subcategoris.length > 0 ? (
              <div onClick={() => HandleShow(index)}>
                <div className="flex items-center justify-between pr-3 cursor-pointer">
                  <div key={item.id} className="cursor-pointer py-1">
                    <p className="font-DM_Sans text-base font-bold text-Btn_Color">
                      {item.Category}
                    </p>
                  </div>
                  <div>
                    <span className="text-Btn_Color">
                      <FaPlus />
                    </span>
                  </div>
                </div>
                <div>
                  {showCategories[index] && (
                    <div>
                      {item.subcategoris?.map((subitem) => (
                        <div key={subitem.id}>
                          <p className="font-DM_Sans text-sm text-Btn_Color py-1 pl-2 hover:bg-yellow-700 cursor-pointer hover:text-Common_Color">
                            {subitem.Subtitle}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="cursor-pointer py-1">
                <p className="font-DM_Sans text-base font-bold text-Btn_Color">
                  {item.Category}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
}

export default CatagoryData
