import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const LayoutLanding = (props) => {
  return (
    <>
        <Navigation />
        {props.children}
        <Footer />
    </>
  )
}

export default LayoutLanding