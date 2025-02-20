import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Header'
import Footer from './Components/Footer'

const Layout = () => {
  return (
    <div>
    <Header />
    <div className='min-h-[81.5vh]'>
    <Outlet />
    </div>
    <Footer />
    </div>
  )
}

export default Layout
