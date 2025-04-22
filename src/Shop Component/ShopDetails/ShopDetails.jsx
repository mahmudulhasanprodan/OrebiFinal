import React from 'react'
import ShopLeft from '../ShopLeft/ShopLeft'
import ShopRight from '../ShopRight/ShopRight'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb'

const ShopDetails = ({Title}) => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="pb-28 px-4 xl:px-0">
            <div>
              <h2 className="font-DM_Sans text-4xl font-bold text-Btn_Color">
                {Title ? Title : "Title Missing"}
              </h2>
            </div>
            <div>
              <BreadCrumb />
            </div>
          </div>
          <div className="flex px-4 md:px-0">
            <ShopLeft className={"w-0 md:w-[25%]"} />
            <ShopRight className={"w-full md:w-[75%] border-2 border-slate-300"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopDetails
