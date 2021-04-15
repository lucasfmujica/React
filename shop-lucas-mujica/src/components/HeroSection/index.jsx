/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './herosection.css'

function Hero(props) {
  return (
    <Jumbotron className='bg-transparent jumbotron-fluid p-0 font mt-5'>
      <Container>
        <Row className='justify-content-center py-5'>
          <Col md={10} sm={12}>
            {props.title && (
              <h1 className='display-3 font-weight-bolder'>{props.title}</h1>
            )}
            {props.subTitle && (
              <h2 className='display-4 font-weight-light'>{props.subTitle}</h2>
            )}
            {props.text && (
              <h3 className='lead font-weight-light'>{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Hero
