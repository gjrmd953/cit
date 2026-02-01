import React from 'react'
import Container from './Container'
import BanImg from "../assets/banner.png"
import ThekmarkImg from "../assets/thekmark.png"
import BookImg from "../assets/book.png"

const Banner = () => {
  return (
    <div className='py-7'>
      <Container>
        <div className="flex justify-between">
          <div className="w-2/5">
            <div className="">
              <div className="flex gap-3">
                <img src={ThekmarkImg} alt="" />
                <h2 className='font-INT font-black text-[18px] text-[#1f1e1e]'>
                  Unleash Your Potential
                </h2>
              </div>
              <h2 className='font-INT font-bold text-5xl py-3.5 leading-tight'>
                Become an IT Pro & <br /> Rule the <span className='text-[rgb(255,30,30)]'>Digital World</span>
              </h2>
              <p className='font-INT text-[#212529]'>
                With a vision to turn manpower into assets, Creative IT <br /> Institute is ready to enhance your learning experience with <br /> skilled mentors and an updated curriculum. Pick your desired <br /> course from more than 45 trendy options.
              </p>

              <div className="py-5 flex gap-12">
                <div className="">
                  <button className='py-3 px-6 rounded-2xl bg-[rgb(255,30,30)] text-white flex gap-2 font-INT text-[18px] cursor-pointer hover:bg-white hover:text-[rgb(255,30,30)]'>
                    <img src={BookImg} alt="" />
                    Browse Course
                  </button>
                </div>
                <div className="">
                  <button className='py-3 px-6 rounded-2xl bg-[rgb(255,30,30)] text-white flex gap-3 font-INT text-[18px] cursor-pointer hover:bg-white hover:text-[rgb(255,30,30)]'>
                    <img src={BookImg} alt="" />
                    Join free seminar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/5">
            <img src={BanImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner