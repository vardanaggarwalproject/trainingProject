import Header from "../UI/Header"
import Footer from "../UI/Footer"
import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Home
