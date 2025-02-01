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
            <div>
              <p className="font-DM_Sans text-base font-normal text-Text_ColorTwo w-full px-4 lg:px-0 md:w-[500px] text-justify">
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
            <Flex className={"flex-col gap-y-8"}>
              <div className="flex gap-x-8 basis-1/2">
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
              <div className="flex gap-x-8 basis-1/2">
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
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpDetails