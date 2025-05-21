import React from 'react'
import { useState } from 'react';
import "./banner.css"
import { Carousel } from 'react-bootstrap'
import bannerImage from "../../assets/banner.jpg"

function Banner() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item className='bann_main'>
        <img src={bannerImage} className='w-100' alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item className='bann_main'>
        <img src={bannerImage} className='w-100' alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>

      </Carousel.Item >
      <Carousel.Item className='bann_main'>
        <img src={bannerImage} className='w-100' alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default Banner