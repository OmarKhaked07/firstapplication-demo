import React from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useGlobalContext } from '../context';


const MainPage = () => {
  const { MainButtons, Contoller } = useGlobalContext()

  return (
    <Container>
      <Row className="text-center">
        <Col className='mt-2'>
          <h1>Shortcut Website</h1>
          <h4>Pick your application:</h4>
        </Col>
      </Row>
      <Row className=" text-center">
        {
          MainButtons.map((item) => {
            return (
              <Col className="p-5 pt-0 mt-3" md={4} key={item.id}>
                <div className='modals' onClick={() => item.function(Contoller())}>
                  <img className='img' src={item.url} />
                </div>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}

export default MainPage

