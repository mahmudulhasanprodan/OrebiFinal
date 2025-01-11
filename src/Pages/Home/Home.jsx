import React from 'react'
import Header from '../../HomeComponent/Header/Header'
import Menu from '../../HomeComponent/Menu/Menu'
import SliderItem from '../../HomeComponent/Slider/SliderItem'
import NewArraival from '../../HomeComponent/NewArrival/NewArraival'
import FooterTop from '../../HomeComponent/Footer/FooterTop/FooterTop'
const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <SliderItem />
      <NewArraival />
      <FooterTop />
    </>
  );
}

export default Home
