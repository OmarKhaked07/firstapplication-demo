import React from 'react'
import { useGlobalContext } from '../context'
import GridSystem from './GridSystem'
import Navbar from './Navbar'


const Element = () => {
  const { data } = useGlobalContext()

  const Item = props => {
    const { command, info, windows, mac } = props

    return (
      <div className='element-card'>
        <strong><p>{command}</p></strong>
        <p>{info}</p>
        {windows && <p><i>Windows:</i> {windows}</p>}
        {mac && <p><i>Mac:</i> {mac}</p>}
      </div>
    )
  }
  
  return (
    <div>
      <Navbar />
      <div className='section-right'>
        <GridSystem colCount={3}>
          {
            data &&  data.map((item) => {
              return <Item key={item.id} command={item?.command} info={item?.info} windows={item?.windows} mac={item?.mac}></Item>
            })
          }
        </GridSystem>
      </div>
    </div>
  )
}

export default Element