import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { FeatcherProduct } from '../../Redux/ProductSlice/ProductSlice';
import { useNavigate, useParams } from 'react-router-dom';
import DetailsImage from '../DetailsImage/DetailsImage';
import ProductInfo from '../ProductInfo/ProductInfo';
import BreadCrumb from "../../CommonComponent/BreadCrumb/BreadCrumb"
import { AddtoCart } from '../../Redux/CartSlice/CartSlice';


const ProductDetailsData = () => {

const dispatch = useDispatch();
const Navigate = useNavigate();
const [DetailsData,setDetailsData]= useState({});
const {ProductId} = useParams();


//Data Featching is here
useEffect(() => {
    dispatch(FeatcherProduct(`https://dummyjson.com/products/${ProductId}`));
  },[])
  
  
  const {Data,Status}=useSelector((state) => state.Product);
  

  
  useEffect(() => {
     if(Status.payload === "Idle"){
      setDetailsData(Data.payload);
     }
  },[Status.payload,Data.payload])
  

//HandleCart Function start Here
const HandleCart = () => {
   dispatch(AddtoCart(DetailsData));
};
 
  



  return (
    <>
      <div>
        <div className="container">
          <div>
            <DetailsImage FeatureDataImage={DetailsData} />
          </div>
          <div>
            <h2 className="font-DMsans text-2xl font-bold text-BtnColor">
              {DetailsData.title ? DetailsData.title : "Products"}
            </h2>
          </div>
          <div>
            <ProductInfo AddToCartData={HandleCart}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailsData
