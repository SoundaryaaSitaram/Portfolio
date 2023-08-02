import React from 'react';
import { Link } from 'react-scroll';
import './Header.css'; 
//rafc - install es6/7 extension 
export const Header = () => {
    // BEM — Block Element Modifier is a methodology, that helps you to achieve reusable components and code sharing in the front-end.Using BEM conventions.Used when using lot of classnames(to make it proper).To avoid clashing in classnames and their styles
  return (
    <div className = "header">
        <div className ="header_left">
            <h1><span>Code</span>Journeyer</h1>
        </div>
        <div className = "header_right">
        <Link to ="about" smooth={true} duration={500}>
        <h4>
            About me
        </h4>
        </Link>
        <Link to ="skillContainer" smooth={true} duration={500}>
        <h4>
            Skills
        </h4>
        </Link>
        <Link to ="projectContainer" smooth={true} duration={500}>
        <h4>
            Projects
        </h4>
        </Link>
        <Link to ="edu" smooth={true} duration={500}>
        <h4>
            Education
        </h4>
        </Link>
        <Link to ="contact" smooth={true} duration={500}>
        <h4 className='header_rightButton'>
            Contact
        </h4>
        </Link>
        {/* <h4 className='header_rightButton'>J</h4> */}
        </div>
    </div>
  )
}
