import React, { useState } from 'react'
import "../App.css"
import { useGlobalContext } from '../context';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"

const Navbar = () => {
  const { Contoller, buttondata } = useGlobalContext()
  const [selected, setSelected] = useState(1)
  const selesctedItem = (id) => {
    setSelected(id)
  }

  return (
    <div>
      <div className='section-left'>
        <div className='navbar-container'>
          {
            buttondata.map((item) => {
              return (
                <button className="button" style={{ backgroundColor: selected === item.id ? "white" : "wheat" }} key={item.id} onClick={() => item.function(selesctedItem(item.id))}>{item.title}</button>
              )
            })
          }
        </div>
        <button className='button-back' onClick={() => Contoller()}><HiOutlineArrowNarrowLeft preserveAspectRatio='none' size={25} /></button>
      </div>
    </div>
  )
}

export default Navbar