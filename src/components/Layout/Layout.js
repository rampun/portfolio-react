import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SayHello from '../SayHello/SayHello'

const Layout = ({children}) => {
  return <>
    <Header/>
    <main className='py-8 lg:pt-8 dark:bg-dark'>
        {children}
    </main>
    <SayHello/>
    <Footer/>
  </>
}

export default Layout