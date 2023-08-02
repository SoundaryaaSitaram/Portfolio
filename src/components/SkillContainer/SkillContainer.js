import React from 'react'
import { Element } from 'react-scroll';
import HTML from "../../assets/HTML.jpeg";
import CSS from "../../assets/CSS.jpeg";
import C from "../../assets/C.jpeg";
import JS from "../../assets/JS.jpeg";
import Angular from "../../assets/Angular.jpeg";
import { LinearProgress } from '@material-ui/core';
import { useEffect } from 'react';
import './SkillContainer.css';
export const SkillContainer = () => {
  useEffect(() => {
    const slider = document.querySelector('.slides');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; // Adjust the scroll speed as needed
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);
  return (
    <Element className='skillContainer' id='skills '>
        {/* <div className='skillContainer_image'> 
          <img src={Skill} alt="Hi hello"/>
        </div> */}
        <div className='skillContainer_text'>
          <h2>SkillSet</h2>
          <div className='skillContainer_skillset'>
            <h5>C Programming</h5>
            <div className='skillContainer_slider skillContainer_slider1'>
              <LinearProgress variant="determinate" value={90}/>
            </div>
            
          </div>
          <div className='skillContainer_skillset'>
            <h5>Core Java</h5>
            <div className='skillContainer_slider skillContainer_slider2'>
              <LinearProgress variant="determinate" value={60}/>
            </div>
            
          </div>
          <div className='skillContainer_skillset'>
            <h5>Web development</h5>
            <div className='skillContainer_slider skillContainer_slider3'>
              <LinearProgress variant="determinate" value={50}/>
            </div>
          </div>
          <div className='skillContainer_skillset'>
            <h5>App development</h5>
            <div className='skillContainer_slider skillContainer_slider4'>
              <LinearProgress variant="determinate" value={50}/>
            </div>
          </div>
          <div className='skillContainer_skillset'>
            <h5>Javascript</h5>
            <div className='skillContainer_slider skillContainer_slider5'>
              <LinearProgress variant="determinate" value={50}/>
            </div>
          </div>
        </div>
        <div className='skillContainer_image'> 
          <div className='slides'>
            <img src={HTML} alt="HTML"/>
            <img src={CSS} alt="CSS"/>
            <img src={C} alt="C"/>
            <img src={JS} alt="JS"/>
            <img src={Angular} alt="Angular"/>
          </div>
        </div>
    </Element>
    
  )
}
