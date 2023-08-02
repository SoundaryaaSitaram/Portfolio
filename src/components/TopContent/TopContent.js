import React, { useEffect } from 'react';
import './TopContent.css';
import myImg from "../../assets/myimage.png"; // Replace with the actual path to your image

export const TopContent = () => {
  useEffect(() => {
    const listItems = document.querySelectorAll('.characteristics ul li');
    listItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, 100 * (index + 1));
    });
  }, []);

  return (
    <div className='topcontent'>
      <div className='topcontent_container'>
        <div className='topcontent_left'>
        <h1>Ms. Soundaryaa Sitaram</h1>
          <p>Web development and machine learning enthusiast</p>
          <div className='cta'>
            <a href='https://drive.google.com/file/d/17kPY381evUA1TgYKmtQlLBUlwzNpQARL/view?usp=sharing'>
              <button className='topcontent_downloadbutton'>Download Resume</button>
            </a>
            <button className='topcontent_workbutton'>My Work</button>
          </div>
          <div className='activities'>
          <div className='activities'>
  {/* <h2>My Activities</h2> */}
  <div className='activity_row'>
    <div className='activity'>
      Member of National Service Scheme(NSS)
    </div>
    <div className='activity'>
      Hackerrank - 4star
    </div>
  </div>
  <div className='activity_row'>
    <div className='activity'>
      Leetcode - C,470pts
    </div>
    <div className='activity'>
      Skillrack - 1859medals
    </div>
  </div>
</div>

</div>
        </div>
        <div className='topcontent_right'>
        <div className='profile_image'>
            <img src={myImg} alt='My Profile' className='my_image' />
          </div>
          <div className='characteristics'>
            <h2>Unveiling My Diverse Passions and Drive</h2>
            <ul>
              <li>Courteous, Timely, and Driven</li>
              <li>Passionate about solving problems</li>
              <li>Multifaceted Pursuits: Books, Dance, and Chess</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};
