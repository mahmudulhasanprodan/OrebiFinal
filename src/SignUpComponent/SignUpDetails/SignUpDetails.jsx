import React from 'react'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb';
import SignForm from './SignForm';
import Flex from '../../CommonComponent/Flex/Flex';

const SignUpDetails = ({Title}) => {
  return (
    <>
      <div>
        <div className="container">
          <div className="px-4 2xl:px-0">
            <div className="pb-28 py-10">
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
              <p className="font-DM_Sans text-base font-normal text-Text_ColorTwo w-full md:w-[500px] text-justify">
                "Sure! Here's a short description for a sign-up form: "Join us
                today to access exclusive Offers, updates, and personalized
                features. Create your account in just a few simple steps!"
              </p>
            </div>
            <div className="py-10 mb-3">
              <h2 className="font-DM_Sans font-bold text-2xl text-Btn_Color">
                Your Personals Destails
              </h2>
            </div>
            <Flex className={"flex-col gap-y-8 px-4 xl:px-0"}>
              <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 gap-x-8 basis-1/2">
                <div className="basis-1/3">
                  <SignForm
                    LabelTitle={"First Name*"}
                    InputType={"text"}
                    InputId={"FirstName"}
                    InputName={"FirstName"}
                    InputPlaceHolder={"Enter Your First Name Here"}
                    className={"border-b-[1px] border-b-slate-300 py-1"}
                  />
                </div>
                <div className="basis-1/3">
                  <SignForm
                    LabelTitle={"Last Name*"}
                    InputType={"text"}
                    InputId={"LastName"}
                    InputName={"LastName"}
                    InputPlaceHolder={"Enter Your Last Name Here"}
                    className={"border-b-[1px] border-b-slate-300 py-1"}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 gap-x-8 basis-1/2">
                <div className="basis-1/3">
                  <SignForm
                    LabelTitle={"Email*"}
                    InputType={"email"}
                    InputId={"EmailId"}
                    InputName={"EmailId"}
                    InputPlaceHolder={"Enter Your Email Here"}
                    className={"border-b-[1px] border-b-slate-300 py-1"}
                  />
                </div>
                <div className="basis-1/3">
                  <SignForm
                    LabelTitle={"Phone Number"}
                    InputType={"number"}
                    InputId={"Number"}
                    InputName={"Number"}
                    InputPlaceHolder={"Enter Your Number Here"}
                    className={"border-b-[1px] border-b-slate-300 py-1"}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 gap-x-8 basis-1/2">
                <div className="basis-1/3">
                  <SignForm
                    LabelTitle={"Address1*"}
                    InputType={"text"}
                    InputId={"AddressOne"}
                    InputName={"AddressOne"}
                    InputPlaceHolder={"Enter Your Address1 Here"}
                    className={"border-b-[1px] border-b-slate-300 py-1"}
                  />
                </div>
                <div className="basis-1/3">
                  <SignForm
                    LabelTitle={"Address2"}
                    InputType={"text"}
                    InputId={"AddressTwo"}
                    InputName={"AddressTwo"}
                    InputPlaceHolder={"Enter Your Address2 Here"}
                    className={"border-b-[1px] border-b-slate-300 py-1"}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 gap-x-8 basis-1/2">
                <div className="basis-1/3">
                  <SignForm
                    LabelTitle={"Password*"}
                    InputType={"password"}
                    InputId={"Password"}
                    InputName={"Password"}
                    InputPlaceHolder={"Enter Your Password Here"}
                    className={"border-b-[1px] border-b-slate-300 py-1"}
                  />
                </div>
                <div className="basis-1/3">
                  <SignForm
                    LabelTitle={"Repeat Password*"}
                    InputType={"password"}
                    InputId={"RepeatPassword"}
                    InputName={"RepeatPassword"}
                    InputPlaceHolder={"Enter Your Repeat Password Here"}
                    className={"border-b-[1px] border-b-slate-300 py-1"}
                  />
                </div>
              </div>
              <div className="flex items-center gap-x-3 mt-6">
                <input
                  type="checkbox"
                  id="Checkbox"
                  name="Checkbox"
                  className="cursor-pointer"
                />
                <p className="font-DM_Sans text-sm md:text-base text-Btn_Color">
                  I have read and agree to the Privacy and Policy
                </p>
              </div>
              <div>
                <button className="w-[200px] py-2 bg-blue-500 font-DM_Sans font-bold text-base text-Common_Color rounded-md">
                  Sign Up
                </button>
                {/* <button type="button" class="bg-indigo-500 w-[200px] px-10 py-2 flex items-center justify-center rounded-md" >
                  <svg
                    class="animate-spin h-5 w-5 mr-3 border-4 rounded-full border-t-4 border-green-500 border-b-white"
                    viewBox="0 0 24 24"
                  ></svg>
                  Processing...
                </button> */}
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpDetails