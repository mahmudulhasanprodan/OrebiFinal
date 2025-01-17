import React from 'react'
import FooterItem from '../../FooterItem/FooterItem'
import Logo from "../../../assets/HomeComponentImage/Logo.png"
import Flex from '../../../CommonComponent/Flex/Flex'

const FooterTop = () => {
  return (
    <>
      <div className="bg-Footer_Color text-Text_Color mt-10">
        <div className="container">
          <div>
            <Flex className={"gap-x-32 py-10 flex-col md:flex-row gap-y-10"}>
              <Flex className={"gap-x-10 md:gap-x-36 px-4 md:px-0"}>
                <FooterItem
                  AllItem={["Home", "Shop", "About", "Contact", "Blog"]}
                  Title={"MENU"}
                  className={"hidden md:block"}
                />
                <FooterItem
                  AllItem={[
                    "Beauty",
                    "Fragrances",
                    "Groceries",
                    "Women Clothes",
                    "Men Clothes",
                    "Electronics Device",
                  ]}
                  Title={"SHOP"}
                />
                <FooterItem
                  AllItem={[
                    "Privacy Policy",
                    "Terms & Conditions",
                    "Special E-shop",
                    "Shipping",
                    "Secure Payments",
                  ]}
                  Title={"HELP"}
                />
              </Flex>
              <Flex className={"gap-x-20 px-4 md:px-0"}>
                <div>
                  <h2 className="font-DM_Sans text-base font-bold leading-7 text-Btn_Color">
                    (052) 611-5711
                  </h2>
                  <span className="font-DM_Sans text-base font-bold leading-7 text-Btn_Color">
                    company@domain.com
                  </span>
                  <div>
                    <address>
                      <p className="font-DM_Sans text-Text_Color text-sm font-normal">
                        575 Crescent Ave. Quakertown, PA 18951
                      </p>
                    </address>
                  </div>
                </div>
                <div className="hidden md:block">
                  <picture>
                    <img src={Logo} alt={Logo} />
                  </picture>
                </div>
              </Flex>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterTop
