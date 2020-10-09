import React, { useEffect } from 'react'

export const Sidebar = ({ width, height, children, show }) => {
  const [xPosition, setX] = React.useState(-width)

  useEffect(() => {
    if (show) return setX(0)
    return setX(-width)
  }, [show, setX, width])

  //   const toggleMenu = () => {
  //     if (xPosition < 0) {
  //       setX(0)
  //     } else {
  //       setX(-width)
  //     }
  //   }

  // React.useEffect(() => {
  //   setX(0)
  // }, [])
  return (
    <React.Fragment>
      <div
        className='side-bar'
        style={{
          position: 'absolute', // custom
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
          zIndex: 99,
          background: 'transparent',
          backdropFilter: 'blur(5px)',
        }}
      >
        {/* <button
          onClick={() => toggleMenu()}
          className='toggle-menu'
          style={{
            transform: `translate(${width}px, 20vh)`,
          }}
        ></button> */}
        <div className='content'>{children}</div>
      </div>
    </React.Fragment>
  )
}
