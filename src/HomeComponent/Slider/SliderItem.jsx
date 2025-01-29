import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SliderOne from "../../assets/HomeComponentImage/SliderOne.jpg"
import SliderTwo from "../../assets/HomeComponentImage/SliderTwo.jpg"
import SliderThree from "../../assets/HomeComponentImage/SliderThree.jpg"
import SliderFour from "../../assets/HomeComponentImage/SliderFour.jpg"
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from 'react-icons/fa6';
import SliderRight from '../SliderRight/SliderRight';


const SliderItem = () => {


// Custom Arrows Functions

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        display: "block",
        background: "#d1d5db",
        width: "25px",
        height: "30px",
        cursor: "pointer",
        borderRadius: "0px 20px 20px 0px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-full">
        <p className="text-Common_Color active:text-green-500">
          <FaAngleLeft />
        </p>
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        display: "block",
        background: "#d1d5db",
        width: "25px",
        height: "30px",
        cursor: "pointer",
        borderRadius: "20px 0px 0px 20px",
        zIndex: "1",
        right: "0%",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <div className="flex h-full items-center justify-center">
        <p className="text-Common_Color active:text-green-500">
          <FaAngleRight />
        </p>
      </div>
    </div>
  );
}

// React Slider Functionality is Here
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  return (
    <>
      <div className="">
        <div className="container">
          <div className="flex gap-x-8">
            <div className="h-auto w-full xl:w-[950px]">
              <Slider {...settings}>
                <div>
                  <picture>
                    <img src={SliderOne} alt={SliderOne}/>
                  </picture>
                </div>
                <div>
                  <picture>
                    <img src={SliderTwo} alt={SliderTwo}/>
                  </picture>
                </div>
                <div>
                  <picture>
                    <img src={SliderThree} alt={SliderThree}/>
                  </picture>
                </div>
                <div>
                  <picture>
                    <img src={SliderFour} alt={SliderFour}/>
                  </picture>
                </div>
              </Slider>
            </div>
            {/* App Detail Section Is Here */}
            {/* <div className="h-[330px] w-[200px] bg-red-200">
              <SliderRight />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderItem
