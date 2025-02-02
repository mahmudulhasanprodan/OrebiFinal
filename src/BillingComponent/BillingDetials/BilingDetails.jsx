import React from 'react'
import SignForm from '../../SignUpComponent/SignUpDetails/SignForm'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb';
import Flex from '../../CommonComponent/Flex/Flex';

const BilingDetails = ({Title}) => {
  return (
    <>
      <div>
        <div className="container">
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
            <h2>Billing Details</h2>
          </div>
          <Flex className={"flex-col gap-y-4 items-center justify-center"}>
            <div>
              <SignForm
                LabelTitle={"First Name"}
                InputType={"text"}
                InputId={"FirstName"}
                InputName={"FirstName"}
                InputPlaceHolder={"Enter Your First Name Here"}
                className={"w-[500px] border-[1px] border-slate-300 py-1 pl-3"}
              />
            </div>
            <div>
              <SignForm
                LabelTitle={"Last Name"}
                InputType={"text"}
                InputId={"LastName"}
                InputName={"LastName"}
                InputPlaceHolder={"Enter Your Last Name Here"}
                className={"w-[500px] pl-3 border-[1px] border-slate-300 py-1"}
              />
            </div>
            <div>
              <SignForm
                LabelTitle={"Email"}
                InputType={"email"}
                InputId={"EmailId"}
                InputName={"EmailId"}
                InputPlaceHolder={"Enter Your Email Here"}
                className={"w-[500px] pl-3 border-[1px] border-slate-300 py-1"}
              />
            </div>
            <div>
              <SignForm
                LabelTitle={"Company Name(Optional)"}
                InputType={"text"}
                InputId={"CompanyName"}
                InputName={"CompanyName"}
                InputPlaceHolder={"Enter Your Company Name Here"}
                className={"w-[500px] pl-3 border-[1px] border-slate-300 py-1"}
              />
            </div>
            <div>
              <select name="Country" id="Country"  className={"w-[500px] pl-3 border-[1px] border-slate-300 py-1 cursor-pointer"}>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="pakistan">Pakistan</option>
                <option value="nepal">Nepal</option>
                <option value="united states">United State</option>
                <option value="united kingdom">United Kingdom</option>
              </select>
            </div>
            <div>
              <SignForm
                LabelTitle={"Street Address"}
                InputType={"text"}
                InputId={"StreetAddress"}
                InputName={"StreetAddress"}
                InputPlaceHolder={"Enter Your Address Here"}
                className={"w-[500px] pl-3 border-[1px] border-slate-300 py-1"}
              />
            </div>
            <div>
              <SignForm
                LabelTitle={"Town/City"}
                InputType={"text"}
                InputId={"CityName"}
                InputName={"CityName"}
                InputPlaceHolder={"Enter Your City Name Here"}
                className={"w-[500px] pl-3 border-[1px] border-slate-300 py-1"}
              />
            </div>
            <div>
              <SignForm
                LabelTitle={"Post Code"}
                InputType={"number"}
                InputId={"PostID"}
                InputName={"PostID"}
                InputPlaceHolder={"Enter Your post code Name Here"}
                className={"w-[500px] pl-3 border-[1px] border-slate-300 py-1"}
              />
            </div>
            <div>
              <SignForm
                LabelTitle={"Number"}
                InputType={"number"}
                InputId={"NumberId"}
                InputName={"NumberId"}
                InputPlaceHolder={"Enter Your Number Here"}
                className={"w-[500px] border-[1px] pl-3 border-slate-300 py-1"}
              />
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default BilingDetails
