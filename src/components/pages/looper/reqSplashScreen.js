import React, { useState, useEffect } from 'react'
import image from '../../../assets/img/request.gif'
import CloseIcon from '../../../assets/img/close.svg'

const RequestSplashScreen = () => {
  const [showGif, setShowGif] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false)
    }, 13500)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const closeSplashScreen = () => {
    setShowGif(false)
  }

  return (
    showGif && (
      <div className='overlay'>
        <img
          src={CloseIcon}
          alt='close'
          className='overlay-close-btn'
          onClick={closeSplashScreen}
        />
        <img
          src={image}
          alt='login-exp'
          className='centered'
        />
	   <h2 style={{color:"#F7AF69"}}>Calling up all local Heros..........</h2>
	  <h3 style={{color:"#F7AF69"}}>We will notify you,as soon as we find someone!..</h3>
	  
      </div>
    )
  )
}

export default RequestSplashScreen
