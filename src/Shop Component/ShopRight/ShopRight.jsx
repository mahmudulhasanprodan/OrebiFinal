import React, { useEffect, useState } from 'react'
import RightTop from './RightTop'
import { FeatcherProduct } from '../../Redux/ProductSlice/ProductSlice'
import { useDispatch,useSelector } from 'react-redux'
import RightDetails from '../RightDetails/RightDetails'
import Flex from '../../CommonComponent/Flex/Flex'


const ShopRight = ({className}) => {

const dispatch =  useDispatch();
const[AllData,setAllData] = useState([])

useEffect(() => {
  dispatch(FeatcherProduct());
},[])


const {Data,Status}=useSelector((state) => state.Product);

console.log(Status.payload);

useEffect(() => {
   if(Status.payload === "Idle"){
    setAllData(Data.payload);
   };
},[Status.payload,Data.payload])


  return (
    <>
      <div className={className}>
        <div className="container">
          <div>
            <RightTop />
          </div>
          <Flex
            className={"flex-wrap items-center gap-x-4 gap-y-6 mt-10 mb-10"}
          >
            {AllData?.slice(9).map((item) => (
              <div key={item.id}>
                <RightDetails
                  Title={item.title.slice(0,20)}
                  Price={item.price}
                  ShopImage={item.thumbnail}
                />
              </div>
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
}

export default ShopRight
