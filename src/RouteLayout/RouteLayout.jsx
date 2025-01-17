import React from 'react'
import Header from "../HomeComponent/Header/Header"
import Menu from "../HomeComponent/Menu/Menu"
import FooterTop from "../HomeComponent/Footer/FooterTop/FooterTop"
import FooterBottom from '../HomeComponent/Footer/FooterBottom/FooterBottom'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
      <FooterTop />
      <FooterBottom />
    </>
  )
}

export default RouteLayout
