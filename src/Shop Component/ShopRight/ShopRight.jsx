import React, { useEffect, useState } from 'react'
import RightTop from './RightTop'
import { FeatcherProduct } from '../../Redux/ProductSlice/ProductSlice'
import { useDispatch,useSelector } from 'react-redux'
import RightDetails from '../RightDetails/RightDetails'
import Flex from '../../CommonComponent/Flex/Flex'
import { Link } from 'react-router-dom'


const ShopRight = ({className}) => {

const dispatch =  useDispatch();
const[AllData,setAllData] = useState([])


useEffect(() => {
  dispatch(FeatcherProduct("https://dummyjson.com/products"));
},[])


const{Data,Status}=useSelector((state) => state.Product);



useEffect(() => {
   if(Status.payload === "Idle"){
    setAllData(Data.payload.products);
   }
},[Status.payload,Data.payload])




  return (
    <>
      <div className={className}>
        <div className="container">
          <div>
            <RightTop />
          </div>
          <div>
            <Flex
              className={"flex-wrap items-center gap-x-4 gap-y-6 mt-10 mb-10"}
            >
              {AllData?.slice(1,12).map((item) => (
                <div key={item.id}>
                  <Link to={`/product-details/${item.id}`}>
                    <RightDetails
                      Title={item.title.slice(0, 20)}
                      Price={item.price}
                      ShopImage={item.thumbnail}
                    />
                  </Link>
                </div>
              ))}
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopRight
