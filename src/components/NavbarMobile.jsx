import React, { useState } from 'react'
import "../App.css"
import { HiOutlineMenu, HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { useGlobalContext } from '../context';

const NavbarMobile = () => {

  const { Contoller, buttondata } = useGlobalContext()

  const [show, setShow] = useState(false)
  const handleShowNavbar = () => {
    setShow(!show)
  }

  const [selected, setSelected] = useState(1)
  const selesctedItem = (id) => {
    setSelected(id)
  }



  return (
    <div>
      <div className='menu'>
        <div>
          <HiOutlineMenu className='menu-icon' size={35} onClick={() => handleShowNavbar()} />
        </div>
      </div>
      {show && <div className="navbar-main">
        {
          buttondata.map((item) => {
            return (
              <button className='menu-button' style={{ backgroundColor: selected === item.id ? "rgba(255, 255, 255, 0.596)" : "rgba(199, 171, 120, 0.596)" }} key={item.id} onClick={() => item.function(selesctedItem(item.id))}>{item.title}</button>
            )
          })
        }
        <div className='menu-button' onClick={() => Contoller()}><HiOutlineArrowNarrowLeft /></div>
      </div>}
    </div>
  )
}

export default NavbarMobile