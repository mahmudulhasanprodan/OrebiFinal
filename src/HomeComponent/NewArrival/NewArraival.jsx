import React, { useEffect, useState } from 'react'
import Card from '../../CommonComponent/Card/Card';
import Flex from '../../CommonComponent/Flex/Flex';
import { FeatcherProduct } from '../../Redux/ProductSlice/ProductSlice';
import { useDispatch,useSelector } from 'react-redux';
import Loading from '../../CommonComponent/Loading/Loading';

const NewArraival = () => {

const dispatch = useDispatch();
const[ArrivalData,setArrivalData] = useState([])
const[LoadingItem,setLoadingItem]= useState(false);

useEffect(() => {
   dispatch(FeatcherProduct("https://dummyjson.com/products"));
},[])

const{ Data,Status}=useSelector((state) => state.Product);


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
            <Flex>
              {Status.payload === "Loading" ? (
                <div>
                  <Loading className={"border flex items-center justify-center border-blue-300 shadow rounded-md p-4 max-w-sm h-[300px] w-[200px] mx-auto"}/>
                </div>
              ) : Status.payload === "Error" ? (
                <div>
                  <h1>This is Error item</h1>
                </div>
              ) : (
                <div className="flex items-center flex-wrap xl:justify-between  overflow-hidden bg-slate-100 md:bg-transparent">
                  {ArrivalData?.map((item) => (
                    <div className="py-4" key={item.id}>
                      <Card
                        Title={item.title.slice(0, 15)}
                        Arrivalpic={item.thumbnail}
                        Price={item.price}                      
                      />
                    </div>
                  ))}
                </div>
              )}
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArraival
