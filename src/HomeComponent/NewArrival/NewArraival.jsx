import React, { useEffect, useState } from 'react'
import Card from '../../CommonComponent/Card/Card';
import Flex from '../../CommonComponent/Flex/Flex';
import { FeatcherProduct } from '../../Redux/ProductSlice/ProductSlice';
import { useDispatch,useSelector } from 'react-redux';
import Loading from '../../CommonComponent/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const NewArraival = () => {

const dispatch = useDispatch();
const[ArrivalData,setArrivalData] = useState([])
const Navigate = useNavigate();

useEffect(() => {
   dispatch(FeatcherProduct("https://dummyjson.com/products"));
},[])

const{ Data,Status}=useSelector((state) => state.Product);


useEffect(() => {
   if(Status.payload === "Idle"){
    setArrivalData(Data.payload.products);
   };
},[Status.payload,Data.payload])

//HandleAllProducts Function Start Here
const HandleAllProducts = () => {
  Navigate("/shop");
};

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
                <button className="px-8 py-2 bg-Btn_Color text-Common_Color active:bg-green-400" onClick={HandleAllProducts}>
                  Shop All Products
                </button>
              </div>
            </div>
            <Flex>
              {Status.payload === "Loading" ? (
                <div className="flex items-center flex-wrap gap-x-2 gap-y-4 mt-4">
                  {[...new Array(12)].map((item) => (
                    <div key={item}>
                      <Loading
                        className={
                          "border flex items-center justify-center border-blue-300 shadow rounded-md p-4 max-w-sm h-[300px] w-[200px] mx-auto"
                        }
                      />
                    </div>
                  ))}
                </div>
              ) : Status.payload === "Error" ? (
                <div>
                  <h1>This is Error item</h1>
                </div>
              ) : (
                <div className="flex items-center flex-wrap xl:justify-between  overflow-hidden bg-slate-100 md:bg-transparent">
                  {ArrivalData?.slice(0, 11).map((item) => (
                    <Link to={`/product-details/${item.id}`}>
                      <div
                        className="py-4"
                        key={item.id}                     
                      >
                        <Card
                          Title={item.title.slice(0, 15)}
                          Arrivalpic={item.thumbnail}
                          Price={`${Math.floor(item.price - (item.price * item.discountPercentage) / 100)}`}
                          MainPrice={`$${item.price}`}
                          Discount={`${Math.round(item.discountPercentage)}%`}
                          Rating={""}
                        />
                      </div>
                    </Link>
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
