import React from 'react'
import "./about.css"
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import AboutImges from "../../assets/aboutimg-1.jpg"
import AboutImges2 from "../../assets/aboutimg-2.jpg"
import AboutImges3 from "../../assets/aboutimg-3.jpg"
import Aboutresuable from '../resuable/Aboutresuable'
 
function About() {
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Aboutresuable img={AboutImges}/>
                    <Aboutresuable img={AboutImges2}/>
                    <Aboutresuable img={AboutImges3}/>
                </Row>
            </Container>
        </div>
    )
}

export default About