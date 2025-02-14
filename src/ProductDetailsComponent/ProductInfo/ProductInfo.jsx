import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6';

const ProductInfo = () => {
  return (
    <>
      <div className="pt-4">
        <hr />
        <div className="flex flex-col gap-y-5 pt-4">
          <div className="flex items-center gap-x-20">
            <h2 className="font-DMsans text-base font-bold text-MainfontColor">
              SIZE:
            </h2>
            <div className="flex items-center gap-x-3">
              <select
                name="ProductSize"
                className="cursor-pointer border-2 border-gray-200 px-8 py-1"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
          {/* {quntity part item}  */}
          <div className="flex items-center gap-x-[34px]">
            <h2 className="font-DMsans text-base font-bold text-MainfontColor">
              QUANTITY:
            </h2>
            <div className="flex w-[8%] cursor-pointer items-center justify-around border-2 border-gray-300 py-1">
              <span>
                <FaMinus />
              </span>
              <p>1</p>
              <span>
                <FaPlus />
              </span>
            </div>
          </div>
          {/* {quntity part item}  */}
          {/* {Status part item}  */}
          <div className="flex items-center gap-x-[34px]">
            <h2 className="font-DMsans text-base font-bold text-MainfontColor">
              STATUS:
            </h2>
            <div>
              <p className="font-DMsans font-bold"> In Stock</p>
            </div>
          </div>
          {/* {Status part item}  */}
          {/* {Wishlist and add to cart part }  */}
          <div className="flex items-center gap-x-6 pt-4">
            <button className="rounded border-2 border-BtnColor px-12 py-2 font-DMsans text-sm font-bold">
              Add to Wish List
            </button>
            <button />
            <button className="rounded bg-BtnColor px-10 py-2 font-DMsans text-base font-bold text-Common_Color bg-black active:bg-green-400">
              Add to Cart
            </button>
          </div>
          {/* {Wishlist and add to cart par}  */}
        </div>
      </div>
    </>
  );
}

export default ProductInfo
