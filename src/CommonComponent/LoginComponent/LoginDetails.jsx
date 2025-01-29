import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import Flex from "../../CommonComponent/Flex/Flex"


const LoginDetails = ({Title}) => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="pb-28 px-4 lg:px-0">
            <div>
              <h2 className="font-DM_Sans text-4xl font-bold text-Btn_Color">
                {Title ? Title : "Title Missing"}
              </h2>
            </div>
            <div>
              <BreadCrumb />
            </div>
          </div>
          <div>
            <p className="font-DM_Sans text-base font-normal text-Text_ColorTwo w-full px-4 lg:px-0 md:w-[500px] text-justify">
              "Welcome back! Please log in to access your account and continue
              where you left off. Don’t have an account? Sign up now to get
              started!"
            </p>
          </div>
          <div className="py-24 px-4 lg:px-0">
            <div>
              <h2 className="font-DM_Sans text-3xl text-Btn_Color font-bold">
                Returning Customer
              </h2>
            </div>
            <Flex
              className={
                "items-center flex-col md:flex-row w-full gap-y-6 md:gap-y-0 gap-x-6 mt-8 md:basis-1/2"
              }
            >
              <div className="flex flex-col w-full md:basis-1/3">
                <label
                  htmlFor="EmailAddress"
                  className="font-DM_Sans text-lg font-bold text-Btn_Color"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="EmailId"
                  name="EmailId"
                  placeholder="Enter Your Email Address"
                  className="border-b-[1px] border-b-slate-300 py-2"
                />
              </div>
              <div className="flex flex-col w-full md:basis-1/3">
                <label
                  htmlFor="Password"
                  className="font-DM_Sans text-lg font-bold text-Btn_Color"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="Password"
                  placeholder="Enter Your Password"
                  className="border-b-[1px] border-b-slate-300 py-2"
                />
              </div>
            </Flex>
            <div className="mt-10">
              <button className="px-16 py-2 border-2 border-slate-300 font-Lato font-bold text-base hover:bg-Btn_Color hover:text-Common_Color">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginDetails