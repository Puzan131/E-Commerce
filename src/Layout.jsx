import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { SearchContextProvider } from './context/searchContext'

const Layout = () => {
    const [searchInput, setSearchInput] = useState("");
  return (
    <SearchContextProvider value={{searchInput, setSearchInput}}>
    <Header />
    <div className='min-h-[81.5vh]'>
    <Outlet />
    </div>
    <Footer />
    </SearchContextProvider>
  )
}

export default Layout
