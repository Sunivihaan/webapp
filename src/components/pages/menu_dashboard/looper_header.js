import React, { useState, useRef } from 'react'

import Hamburger from '../../../assets/img/hero-header/hamburger.svg'
import { Link } from 'react-router-dom'

const Header = ({ menus = [] }) => {
  const [toggle, setToggle] = useState(false)
  const navRef = useRef()

  return (
    <nav
      className={`hero-header ${toggle ? 'responsive' : ''}`}
      ref={navRef}
    >
      <>
        <li className='toggle-icon'>
          <img
            src={Hamburger}
            alt='chat'
            onClick={() => {
              if (toggle) {
                navRef.current.style.width = '100%'
              } else {
                navRef.current.style.width = '200px'
                navRef.current.style.padding = '0px'
              }

              setToggle(!toggle)
            }}
          />
        </li>
        {menus.map((menu) => {
          return (
            <li>
              {menu.img && <img src={menu.img} alt='menu' />}
              <Link to={menu.to}>{menu.text}</Link>
            </li>
          )
        })}
      </>
    </nav>
  )
}

export default Header
