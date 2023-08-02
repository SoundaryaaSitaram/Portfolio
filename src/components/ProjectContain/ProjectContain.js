import React from 'react';
import { Element } from 'react-scroll';
import { Project1 } from '../Project1/Project1';
import "./ProjectContain.css";
import proj from "../../assets/proj.png";
import proj1 from "../../assets/cant.png";
export const ProjectContain = () => {

  const projects =[
    {
        img:proj,
        title:"Clean Campus - AI Based Trash Throwing Detection System",
        desc : "This system accurately identify and notify instances of improper trash disposal, promoting a cleaner and more sustainable campus environment.",
        link : "https://github.com/SoundaryaaSitaram/Clean-Campus-AI-based-trash-throwing-detection-system/blob/main/trash_throwing.ipynb",
    },
    {
      img:proj1,
      title:"Food Ordering System for College Canteen",
      desc : "Food Ordering System for College Canteen using React.js for frontend and Firebase for backend integration (ongoing) to maintain user orders and data",
      link : "https://github.com/SoundaryaaSitaram/Canteen-NEC",
    },
    // {
    //     img:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    //     title:"tree",
    //     desc : "ds jfuhc idjhnvhfuzj jviujfujncv fdvicuhxiu jrfndcjnjdknfic jfdncixkji",
    //     link : "www.google.com",
    // },
    // {
    //     img:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    //     title:"tree",
    //     desc : "ds jfuhc idjhnvhfuzj jviujfujncv fdvicuhxiu jrfndcjnjdknfic jfdncixkji",
    //     link : "www.google.com",
    // },
    // {
    //     img:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    //     title:"tree",
    //     desc : "ds jfuhc idjhnvhfuzj jviujfujncv fdvicuhxiu jrfndcjnjdknfic jfdncixkji",
    //     link : "www.google.com",
    // },
    // {
    //     img:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    //     title:"tree",
    //     desc : "ds jfuhc idjhnvhfuzj jviujfujncv fdvicuhxiu jrfndcjnjdknfic jfdncixkji",
    //     link : "www.google.com",
    // },

  ]
  return (
    <Element className="projectContainer" id="projects">
        <h1>Projects</h1>
        {/* <p>Here are some projects which I have done during my college</p> */}
        <div className="projectContainer_projects">
    {
    projects.map((project,index)=>{
        return(
            <Project1 key={index} img = {project.img} title={project.title} desc = {project.desc} link ={project.link}/>
            
        )
    })
    } 
        </div>
    </Element>
  )
}


