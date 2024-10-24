import React from 'react'
import Shoe_banner from './Shoe_banner'
import Main_banner from './Main_banner'
import Product from './Product'
import Email from './offer_email'
import Nav from '../nav'
import Footer from '../footer'

const home = () => {
  return (
    <div>
      <Nav />
      <Main_banner />
      <Product />
      <Shoe_banner />
      <Product />
      <Email />
      <Footer />

    </div>
  )
}

export default home
