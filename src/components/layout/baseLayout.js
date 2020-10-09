import React from 'react'
import Header from '../pages/helper/header'
import looper_header from '../pages/looper/helpType'


const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default BaseLayout
