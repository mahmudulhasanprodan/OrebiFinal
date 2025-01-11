import React from 'react'
import Card from '../../CommonComponent/Card/Card';
import Flex from '../../CommonComponent/Flex/Flex';

const NewArraival = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="shadow-ArrivalShadow h-[400px] w-full bg-Common_Color">
            <div>
              <div className="border-b-[1px] border-gray-300 flex items-center justify-between pr-3">
                <h2 className="p-4 font-Lato text-2xl font-bold tracking-tighter text-Btn_Color"> New Arrival</h2>
                <button className="px-8 py-2 bg-Btn_Color text-Common_Color">Shop All Products</button>
              </div>
            </div>
            <Flex className={"flex-wrap items-center justify-center gap-3"}>
              <div className="py-4">
                <Card />
              </div>
              <div className="py-4">
                <Card />
              </div>
              <div className="py-4">
                <Card />
              </div>
              <div className="py-4">
                <Card />
              </div>
              <div className="py-4">
                <Card />
              </div>
              <div className="py-4">
                <Card />
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArraival
