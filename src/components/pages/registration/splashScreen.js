import React, { useState, useEffect } from 'react'
import LoginExpGif from '../../../assets/img/login-exp.gif'
import CloseIcon from '../../../assets/img/close.svg'

const SplashScreen = () => {
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
          id='splash-screen'
          src={LoginExpGif}
          alt='login-exp'
          className='centered'
        />
      </div>
    )
  )
}

export default SplashScreen
