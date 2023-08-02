import React from 'react';
import "./EducationBox.css";

export const EducationBox = ({classs, yop , per , ins , style,textColor}) => {
  return (
    <div style={{...style}} className='education'>
        <h2 style={{ color: textColor }}>{yop}</h2>
        <div className='edu_content'>
        <h1 style={{ color: textColor }}>{classs}-{per}</h1>
        <p style={{ color: textColor }}>
            {ins}
        </p>
        </div>
    </div>
  )
}
