import React from 'react'
import { Element } from 'react-scroll'
import { EducationBox } from '../EducationBox/EducationBox'
import "./EducationContainer.css";
export const EducationContainer = () => {
  return (
    <Element className='educationContainer' id="edu">
        <h1>
            Education
        </h1>
        <div className='educationContainer_info'>
            <EducationBox classs="SSLC" yop="2018" per="96.1%" ins = "Lakshmi Srinivasa Vidhyalaya Matriculation"/>
            <EducationBox classs="HSC" yop="2020" per="87.17%" ins = "The Lakshmi Mills Higher Secondary school"/>
            <EducationBox classs="B.E" yop="2024" per="9.21%" ins = "National Engineering College" style={{backgroundColor:"white"}} textColor="blue" />
        </div>
    </Element>
  )
}
