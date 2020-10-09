import React from 'react'
import Navigation from '../navigation'

const LandingLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default LandingLayout
