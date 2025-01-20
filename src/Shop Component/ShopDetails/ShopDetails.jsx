import React from 'react'
import ShopLeft from '../ShopLeft/ShopLeft'
import ShopRight from '../ShopRight/ShopRight'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb'

const ShopDetails = ({Title}) => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="pb-28">
            <div>
              <h2 className="font-DM_Sans text-4xl font-bold text-Btn_Color">
                {Title ? Title : "Title Missing"}
              </h2>
            </div>
            <div>
              <BreadCrumb />
            </div>
          </div>
          <div className="flex">
            <ShopLeft className={"w-[25%]"} />
            <ShopRight className={"w-[75%] bg-green-400 h-72"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopDetails
