import React from 'react'
import CatagoryData from '../CatagoryData/CatagoryData';
import BrandCatagories from '../BrandData/BrandCatagories';
import { ProductData,BrandData,PriceData } from '../../../JsonData/JsonData';

const ShopLeft = ({className}) => {
  return (
    <>
      <div className={className}>
        <div className="container">
          <div className="px-4 hidden md:block">
            <CatagoryData
              Title={"Shop by Category"}
              AllData={ProductData ? ProductData : []}
            />
            <BrandCatagories
              Title={"Shop By Brand"}
              AllData={BrandData ? BrandData : []}
              DropDown={true}
              Expand={false}
            />
            <BrandCatagories
              Title={"Shop By Price"}
              AllData={PriceData ? PriceData : []}
              DropDown={false}
              Expand={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopLeft
