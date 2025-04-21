import React from 'react'
import Flex from '../../CommonComponent/Flex/Flex';
import OfferImg from "../../assets/HomeComponentImage/Offer.png"

const Offer = () => {
  return (
    <>
      <div className="py-32">
        <div className="container">
          <Flex className={"items-center bg-OfferBannerColor"}>
            <div>
              <picture>
                <img src={OfferImg} alt={OfferImg} />
              </picture>
            </div>
            <div className="ml-5">
              <h2 className="font-DMsans text-4xl font-bold">
                Electronics Sale
              </h2>
              <p className="font-DMsans tex-base font-normal w-[511px] pt-4 pb-6">
                Electronics refers to the branch of technology that deals with
                the design and use of circuits, devices, and systems that
                control the flow of electrons or other charged particles
              </p>
              <button className={"py-2 px-8 bg-black text-white font-DMsans"}>
                Shop Now
              </button>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Offer
