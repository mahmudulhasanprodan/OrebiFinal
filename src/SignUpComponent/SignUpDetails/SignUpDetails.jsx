import React, { useState } from 'react'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb';
import SignForm from './SignForm';
import Flex from '../../CommonComponent/Flex/Flex';

const SignUpDetails = ({Title}) => {

  const[ShowInput,setShowInput]=useState({
    FistName: "",
    LastName: "",
    EmailId: "",
    Number: "",
    AddressOne: "",
    AddressTwo: "",
    Password: "",
    RepeatPassword: "",
    Checkbox: false,
  });

  const[ShowInputError,setShowInputError]=useState({
    FirstNameError: "",
    LastNameError: "",
    EmailIdError: "",
    NumberError: "",
    AddressOneError: "",
    PasswordError: "",
    RepeatPasswordError: "",
    PasswordNotMatch: "",
    CheckboxError: false,
  });

// HandleChange Function Start Here
const HandleChange = (e) =>{
  if(e.target.checked){
    setShowInput({
      ...ShowInput,
      [e.target.id]: true,
  })
  }else{
    setShowInput({
      ...ShowInput,
      [e.target.id]: e.target.value,
    });
  }

};


// HandleSignUp Function Start Here
const HandleSignUp = () => {
    const {
      FistName,
      LastName,
      EmailId,
      Number,
      AddressOne,
      Password,
      RepeatPassword,
      Checkbox,
    } = ShowInput;
   if(!FistName){
    setShowInputError({
      ...ShowInputError,
      FirstNameError: "First Name Missing",
    })   
   }else if(!LastName){
    setShowInputError({
      ...ShowInputError,
      LastNameError: "Last Name Missing",
    }) 
   }else if(!EmailId){
    setShowInputError({
      ...ShowInputError,
      EmailIdError: "Email Id Missing",
    });
   }else if(!Number){
    setShowInputError({
      ...ShowInputError,
      NumberError: "Number Missing",
    })
   }else if(!AddressOne){
    setShowInputError({
      ...ShowInputError,
      AddressOneError: "Address One Missing",
    })
   }else if(!Password){
    setShowInputError({
      ...ShowInputError,
      PasswordError: "Password Missing",
    })
   }else if(!RepeatPassword){
    setShowInputError({
      ...ShowInputError,
      RepeatPasswordError: "Repeat Password Missing",
    })
   }else if(Password !== RepeatPassword){
    setShowInputError({
      ...ShowInputError,
      PasswordNotMatch: "Password Not Match",
    })
   }else if(Checkbox == false){
    setShowInputError({
      ...ShowInputError,
      CheckboxError: true,
    })
   }else{
    console.log("Everything is Ok");  
   }
  
};

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
            <Flex className={"items-center gap-x-8 gap-y-8 flex-wrap mt-10"}>
              <div className="basis-1/3">
                <SignForm
                  LabelTitle={"First Name"}
                  InputType={"text"}
                  InputId={"FistName"}
                  InputName={"FistName"}
                  InputPlaceHolder={"Enter Your First Name"}
                  className={`${ShowInputError.FirstNameError ? "border-b-[1px] border-b-red-400 py-1" : "border-b-[1px] border-gray-300 py-1"}`}
                  OnchangeItem={HandleChange}
                />

                {ShowInputError.FirstNameError && (
                  <p className="text-red-500 font-DM_Sans">
                    {ShowInputError.FirstNameError}
                  </p>
                )}
              </div>
              <div className="basis-1/3">
                <SignForm
                  LabelTitle={"Last Name"}
                  InputType={"text"}
                  InputId={"LastName"}
                  InputName={"LastName"}
                  InputPlaceHolder={"Enter Your Last Name"}
                  className={`${ShowInputError.LastNameError ? "border-b-[1px] border-b-red-400 py-1" : "border-b-[1px] border-gray-300 py-1"}`}
                  OnchangeItem={HandleChange}
                />
                {ShowInputError.LastNameError && (
                  <p className="text-red-500 font-DM_Sans">
                    {ShowInputError.LastNameError}
                  </p>
                )}
              </div>
              <div className="basis-1/3">
                <SignForm
                  LabelTitle={"Email"}
                  InputType={"email"}
                  InputId={"EmailId"}
                  InputName={"EmailId"}
                  InputPlaceHolder={"Enter Your Email Here"}
                  className={`${ShowInputError.EmailIdError ? "border-b-[1px] border-b-red-400 py-1" : "border-b-[1px] border-gray-300 py-1"}`}
                  OnchangeItem={HandleChange}
                />
                {ShowInputError.EmailIdError && (
                  <p className="text-red-500 font-DM_Sans">
                    {ShowInputError.EmailIdError}
                  </p>
                )}
              </div>
              <div className="basis-1/3">
                <SignForm
                  LabelTitle={"Phone Number"}
                  InputType={"number"}
                  InputId={"Number"}
                  InputName={"Number"}
                  InputPlaceHolder={"Enter Your Number Here"}
                  className={`${ShowInputError.NumberError ? "border-b-[1px] border-b-red-400 py-1" : "border-b-[1px] border-gray-300 py-1"}`}
                  OnchangeItem={HandleChange}
                />
                {ShowInputError.NumberError && (
                  <p className="text-red-500 font-DM_Sans">
                    {ShowInputError.NumberError}
                  </p>
                )}
              </div>
              <div className="basis-1/3">
                <SignForm
                  LabelTitle={"AddressOne"}
                  InputType={"text"}
                  InputId={"AddressOne"}
                  InputName={"AddressOne"}
                  InputPlaceHolder={"Enter Your Address Here"}
                  className={`${ShowInputError.AddressOneError ? "border-b-[1px] border-b-red-400 py-1" : "border-b-[1px] border-gray-300 py-1"}`}
                  OnchangeItem={HandleChange}
                />
                {ShowInputError.AddressOneError && (
                  <p className="text-red-500 font-DM_Sans">
                    {ShowInputError.AddressOneError}
                  </p>
                )}
              </div>
              <div className="basis-1/3">
                <SignForm
                  LabelTitle={"AddressTwo"}
                  InputType={"password"}
                  InputId={"AddressTwo"}
                  InputName={"AddressTwo"}
                  InputPlaceHolder={"Enter Your Address Two Here"}
                  className={"border-b-[1px] border-gray-300 py-1"}
                  OnchangeItem={HandleChange}
                />
              </div>
              <div className="basis-1/3">
                <SignForm
                  LabelTitle={"Password"}
                  InputType={"password"}
                  InputId={"Password"}
                  InputName={"Password"}
                  InputPlaceHolder={"Enter Your Password Here"}
                  className={`${ShowInputError.PasswordError ? "border-b-[1px] border-b-red-400 py-1" : "border-b-[1px] border-gray-300 py-1"}`}
                  OnchangeItem={HandleChange}
                />
                {ShowInputError.PasswordError && (
                  <p className="text-red-500 font-DM_Sans">
                    {ShowInputError.PasswordError}
                  </p>
                )}
              </div>
              <div className="basis-1/3">
                <SignForm
                  LabelTitle={"Repeat Password"}
                  InputType={"password"}
                  InputId={"RepeatPassword"}
                  InputName={"RepeatPassword"}
                  InputPlaceHolder={"Enter Your Repeat Password Here"}
                  className={`${ShowInputError.RepeatPasswordError ? "border-b-[1px] border-b-red-400 py-1" : "border-b-[1px] border-gray-300 py-1"}`}
                  OnchangeItem={HandleChange}
                />
                {ShowInputError.RepeatPasswordError && (
                  <p className="text-red-500 font-DM_Sans">
                    {ShowInputError.RepeatPasswordError}
                  </p>
                )}
              </div>
            </Flex>
            <div className="flex items-center gap-x-3 mt-10">
              <input
                type="checkbox"
                id="Checkbox"
                name="Checkbox"
                className="cursor-pointer"
                onClick={HandleChange}
              />

              <p
                className={`${ShowInputError.CheckboxError ? "font-DM_Sans text-base text-red-400" : "font-DM_Sans text-base text-Text_Color"}`}
              >
                {ShowInputError.CheckboxError
                  ? "Please Check the mark"
                  : "I have read and agree to the privacy policy"}
              </p>
            </div>
            <div>
              <button
                className="w-48 py-2 bg-Btn_Color mt-10 text-white font-bold rounded-md"
                onClick={HandleSignUp}
              >
                Submit
              </button>
              {/* <button
                type="button"
                className="bg-indigo-500 w-48 py-2 flex items-center rounded-md justify-center text-Common_Color font-DM_Sans font-bold"
              >
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-4 border-gray-50 border-b-4 border-b-green-500  rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
                Processing...
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpDetails