import React from 'react'
import Container from './Container'
import BanImg from "../assets/banner.png"

const Banner = () => {
  return (
    <div className='py-7'>
        <Container>
            <div className="flex justify-between">
                <div className="w-1/3">
                   <h2>hello</h2>
                </div>
                <div className="w-2/3">
                  <img src={BanImg} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner