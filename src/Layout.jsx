// import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Layout() {
  return (
    <>
    <h1 className='bg-black'>hello</h1>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout