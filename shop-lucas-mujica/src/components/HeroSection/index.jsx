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
    <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
      <div className='c-section cc-hero'>
        <Container className='c-container cc-10-cols'>
          <Row className='justify-content-center py-2'>
            <Col>
              {props.title && (
                <h1 className='font font-weight-bolder'>{props.title}</h1>
              )}
              {props.subTitle && (
                <h2 className='subTitleFont'>{props.subTitle}</h2>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </Jumbotron>
  )
}

export default Hero
