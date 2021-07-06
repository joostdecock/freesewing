import React, { useEffect } from 'react'
import useScrolledDown from '../../hooks/useScrolledDown'
import {themeChange} from "theme-change"
import Navbar from '../sections/navbar'
import Footer from '../sections/footer'
import Head from 'next/head'
import Layout from '../layouts/default'

/* This component should wrap all page content */
const AppWrapper= props => {
  useEffect(() => {
    themeChange(false)
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      {!props.noNavbar && <Navbar />}
      {props.noLayout
        ? props.children
        : <div className="flex-auto mt-24"><Layout {...props}>{props.children}</Layout></div>
      }
      {!props.noFooter && <Footer />}
    </div>
  )
}

export default AppWrapper

