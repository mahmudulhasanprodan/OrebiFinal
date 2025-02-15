import React, { useEffect } from 'react'
import Flex from "../../CommonComponent/Flex/Flex"
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Img from "../../assets/HomeComponentImage/Image.png"
import { useSelector,useDispatch } from 'react-redux';
import { removeItem } from '../../Redux/CartSlice/CartSlice';

const CartDetails = ({Title}) => {
    const dispatch = useDispatch();


const{ CartItem,TotalItem,TotalAmount }= useSelector((state) => state.Cart);


// HandleRemove function is start here
const HandleRemove = (item) => {
  dispatch(removeItem(item));
};




  return (
    <>
      <div>
        <div className="container">
          <div className="pb-28 py-14">
            <div>
              <h2 className="font-DM_Sans text-4xl font-bold text-Btn_Color">
                {Title ? Title : "Title Missing"}
              </h2>
            </div>
            <div>
              <BreadCrumb />
            </div>
          </div>
          <div className="w-full">
            <Flex
              className={
                "flex items-center justify-between bg-gray-300 py-2 px-2"
              }
            >
              <div className="grow basis-2/5 pl-5">
                <h2 className="font-Josefin font-bold text-base text-FtextColor">
                  Product
                </h2>
              </div>
              <div className="grow basis-1/5 text-center">
                <h2 className="font-Josefin font-bold text-base text-FtextColor">
                  Price
                </h2>
              </div>
              <div className="grow basis-1/5 text-center">
                <h2 className="font-Josefin font-bold text-base text-FtextColor">
                  Quantity
                </h2>
              </div>
              <div className="grow basis-1/5 text-center">
                <h2 className="font-Josefin font-bold text-base text-FtextColor">
                  Total
                </h2>
              </div>
            </Flex>
            {CartItem?.map((item) => (
              <Flex
                className={"w-full items-center justify-between py-4"}
                key={item.id}
              >
                <div className="flex items-center gap-x-3 cursor-pointer grow basis-2/5 pl-5">
                  <picture className="relative">
                    <span className="absolute -right-1 -top-3 font-bold px-2 active:bg-green-500 bg-green-300 rounded-full" onClick={() => HandleRemove(item)}>
                      X
                    </span>
                    <img
                      src={item.thumbnail}
                      alt={item.thumbnail}
                      className="w-24 h-20 shadow-md"
                    />
                  </picture>
                  <h2 className="font-Josefin text-sm text-FtextColor">
                    {item.title ? item.title : "No Title"}
                  </h2>
                </div>
                <div className="grow basis-1/5 text-center">
                  <p className="font-Josefin text-sm text-FtextColor">
                    {item.price ? `$${Math.round(item.price)}` : "$40"}
                  </p>
                </div>
                <div className="flex items-center cursor-pointer grow basis-1/5 text-center">
                  <div className="flex items-center justify-center gap-x-4 border-2 w-20 m-auto">
                    <span className="font-bold text-sm py-1">
                      <FaMinus />
                    </span>
                    <p className="font-Josefin font-semibold text-FtextColor text-sm">
                      {item.CartQuantity ? item.CartQuantity : 1}
                    </p>
                    <span className="text-sm py-1">
                      <FaPlus />
                    </span>
                  </div>
                </div>
                <div className="grow basis-1/5 text-center">
                  <p className="font-Josefin text-sm text-FtextColor">
                    {item.price
                      ? `$${Math.round(item.price * item.CartQuantity)}`
                      : item.price}
                  </p>
                </div>
              </Flex>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDetails
