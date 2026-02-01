import React from 'react'
import LogoImg from "../assets/logo.png"
import Container from './Container'

const Navbar = () => {
    return (
        <div className='pt-2.5'>
            <Container>
                <div className="flex items-center">
                    <div className="w-1/3">
                        <img src={LogoImg} alt="" />
                    </div>
                    <div className="w-2/3">
                        <div className="flex justify-between items-center">
                            <ul className='flex gap-10'>
                                <li className='font-INT font-bold text-[18px] text-[#1f1e1e] cursor-pointer'>Home</li>
                                <li className='font-INT font-bold text-[18px] text-[#1f1e1e] cursor-pointer'>About us</li>
                                <li className='font-INT font-bold text-[18px] text-[#1f1e1e] cursor-pointer'>Success story</li>
                                <li className='font-INT font-bold text-[18px] text-[#1f1e1e] cursor-pointer'>Diploma</li>
                                <li className='font-INT font-bold text-[18px] text-[#1f1e1e] cursor-pointer'>Contact</li>
                            </ul>
                            <div className="font-INT font-bold text-2xl">
                                <h2 className='py-3 px-6 rounded-2xl bg-[rgb(255,30,30)] text-white'>
                                    Browse Course
                                </h2>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar