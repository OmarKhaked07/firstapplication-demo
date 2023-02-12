import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useGlobalContext } from '../context'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'


const Element = () => {
  const { data } = useGlobalContext()

  const Item = props => {
    const { command, info, windows, mac } = props

    return (
      <Col className="mt-4"  md={4} xs={6}>
        <div className='element-card'>
          <strong><p>{command}</p></strong>
          <p>{info}</p>
          {windows && <p><i>Windows:</i> {windows}</p>}
          {mac && <p><i>Mac:</i> {mac}</p>}
        </div>
      </Col>
    )
  }

  return (
    <div>
      <Navbar />
      <div className='menu'>
          <NavbarMobile />
        </div>
      <div className='section-right'>
        <Row className='p-4 pt-0'>
          {
            data && data.map((item) => {
              return <Item key={item.id} command={item?.command} info={item?.info} windows={item?.windows} mac={item?.mac}></Item>
            })
          }
        </Row>
      </div>
    </div>
  )
}

export default Element