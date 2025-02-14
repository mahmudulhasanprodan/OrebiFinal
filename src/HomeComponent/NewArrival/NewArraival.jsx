import React, { useEffect, useState } from 'react'
import Card from '../../CommonComponent/Card/Card';
import Flex from '../../CommonComponent/Flex/Flex';
import { FeatcherProduct } from '../../Redux/ProductSlice/ProductSlice';
import { useDispatch,useSelector } from 'react-redux';

const NewArraival = () => {

const dispatch = useDispatch();
const[ArrivalData,setArrivalData] = useState([]);

useEffect(() => {
   dispatch(FeatcherProduct());
},[])

const{ Data ,Status}=useSelector((state) => state.Product);


useEffect(() => {
   if(Status.payload === "Idle"){
    setArrivalData(Data.payload.products);
   };
},[Status.payload,Data.payload])


  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="shadow-ArrivalShadow h-auto sm:px-4 2xl:px-0  w-full bg-Common_Color overflow-hidden">
            <div className="">
              <div className="border-b-[1px] border-gray-300 flex items-center justify-between pr-3">
                <h2 className="p-4 font-Lato text-2xl font-bold tracking-tighter text-Btn_Color">
              
                  New Arrival
                </h2>
                <button className="px-8 py-2 bg-Btn_Color text-Common_Color">
                  Shop All Products
                </button>
              </div>
            </div>
            <Flex
              className={
                "flex flex-wrap  items-center justify-center xl:justify-start  gap-x-3 lg:gap-x-12 overflow-hidden bg-slate-100 md:bg-transparent"
              }
            >
              {ArrivalData?.map((item) => (
                <div className="py-4" key={item.id}>
                  <Card
                    Title={item.title.slice(0,15)}
                    Arrivalpic={item.thumbnail}
                    Price={item.price}
                  />
                </div>
              ))}
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArraival
