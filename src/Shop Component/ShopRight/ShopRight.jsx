import React, { useEffect, useState } from 'react'
import RightTop from './RightTop'
import { FeatcherProduct } from '../../Redux/ProductSlice/ProductSlice'
import { useDispatch,useSelector } from 'react-redux'
import RightDetails from '../RightDetails/RightDetails'
import Flex from '../../CommonComponent/Flex/Flex'
import { Link } from 'react-router-dom'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Loading from "../../CommonComponent/Loading/Loading"


const ShopRight = ({className}) => {

const dispatch =  useDispatch();
const[AllData,setAllData] = useState([])
const[page,setpage]= useState(1);
const[ShowValue,setShowValue]= useState(9);
const[Catagory,setCatagory] = useState();



useEffect(() => {
  dispatch(FeatcherProduct("https://dummyjson.com/products"));
},[])


const{Data,Status}=useSelector((state) => state.Product);


useEffect(() => {
   if(Status.payload === "Idle"){
    setAllData(Data.payload.products);
   }
},[Status.payload,Data.payload])

// HandlePage Function Start Here
const HandlePage = (pageNumer) => {
  if(pageNumer > 0 && pageNumer <= Math.floor(AllData.length/ShowValue) + 1){
    setpage(pageNumer);
  }
};

// HandleShow Function Start Here
const HandleShow = (e) => {
  setShowValue(e.target.value);
};

// HandleCatagory Function Start Here
const HandleCatagory = (e) => {
  setCatagory(e.target.value);     
};




  return (
    <>
      <div className={className}>
        <div className="container">
          <div>
            <RightTop OnShowItem={HandleShow} OnShowCatagory={HandleCatagory}/>
          </div>
          <div>
            {Status.payload === "Loading" ? (
              <Loading className={"h-[100vh] flex items-center justify-center"}/>
            ) : Status.payload === "Error" ? (
              <p>This is a Error Page</p>
            ) : (
              <Flex className={"items-center justify-center md:items-start flex-wrap gap-y-6 mt-10 mb-10"}>
                {AllData?.slice(
                  page * ShowValue - ShowValue,
                  page * ShowValue,
                ).map((item) => (
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
            )}
          </div>
          <div className="py-6 px-4 md:px-0">
            <div className="flex items-center justify-center xl:items-start gap-x-3">
              <div>
                <p
                  className="cursor-pointer"
                  onClick={() => HandlePage(page - 1)}
                >
                  <FaAngleDoubleLeft />
                </p>
              </div>
              <div className="flex items-center gap-x-3 min-h-[300px]">
                {[
                  ...new Array(
                    Math.floor(
                      Math.floor(AllData.length / ShowValue) <=
                        AllData.length / ShowValue
                        ? Math.floor(AllData.length / ShowValue) + 1
                        : AllData.length / ShowValue,
                    ),
                  ),
                ].map((item, index) => (
                  <div key={index}>
                    <p
                      className={`w-8 h-8 sm:w-10 sm:h-10 bg-black flex items-center justify-center font-bold text-Common_Color cursor-pointer rounded-sm ${page === index + 1 && "bg-blue-500"}`}
                      onClick={() => HandlePage(index + 1)}
                    >
                      {index + 1}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => HandlePage(page + 1)}
                >
                  <FaAngleDoubleRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopRight
