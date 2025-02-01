import React, { useState } from 'react'
import BreadCrumb from '../../CommonComponent/BreadCrumb/BreadCrumb';
import Flex from '../../CommonComponent/Flex/Flex';
import AccountInformation from '../AccountInformation/AccountInformation';

const AccountDetails = ({Title}) => {

  const[accountDetails,setaccountDetails] = useState(false);
  const[Dashboard,setDashboard] = useState(true);


// HandleDetails Function start here
 const HandleDetails = () => {
  setaccountDetails(!accountDetails);
  setDashboard(false);
 };

 // HandleDashboard Function start here
 const HandleDashboard = () => {
  setDashboard(!Dashboard);
  setaccountDetails(false);
 };

  return (
    <>
      <div>
        <div className="container">
          <div>
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
          </div>
          <Flex className={"gap-x-10 py-10"}>
            <div className="w-1/5 bg-blue-100 h-80 pl-3">
              <p
                className="font-DM_Sans font-normal py-4 cursor-pointer text-lg text-Text_ColorTwo  border-b-[1px] border-slate-300"
                onClick={HandleDashboard}
              >
                Dashboard
              </p>
              <h3
                className="font-DM_Sans font-normal py-4 cursor-pointer text-lg text-Text_ColorTwo  border-b-[1px] border-slate-300"
                onClick={HandleDetails}
              >
                Account details
              </h3>
              <p className="font-DM_Sans font-normal py-4 cursor-pointer text-lg text-Text_ColorTwo border-b-[1px] border-slate-300">
                Log Out
              </p>
            </div>
            <div className="w-4/5 bg-slate-100 pl-4 min-h-80 flex items-center">
              <div>
                {Dashboard && (
                  <div>
                    <p className="font-DM_Sans font-normal text-base text-Btn_Color text-justify p-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Illum autem, quia laboriosam iste veniam distinctio minus
                      nihil quam voluptatem molestiae non praesentium atque
                      culpa exercitationem quibusdam reprehenderit saepe et
                      ipsum doloribus numquam vel ea. Totam voluptate inventore
                      suscipit odit iusto, eligendi libero optio et similique
                      dignissimos? In minus sit exercitationem voluptates rem
                      alias recusandae dolorum ut fugit, eius amet modi mollitia
                      id molestiae laboriosam repellendus obcaecati excepturi
                      quibusdam, hic quod, aut nesciunt vel. Aperiam, aut sunt
                      sapiente quia laborum nihil libero facere delectus, nulla
                      ipsam voluptatum corrupti esse? Reiciendis odit aperiam
                      cum fugiat velit voluptate explicabo ad doloribus esse id.
                    </p>
                  </div>
                )}
              </div>
              <div>
                {accountDetails && (
                  <div>
                    <AccountInformation />
                  </div>
                )}
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default AccountDetails
