import { IconButton } from '@material-ui/core'
import { Instagram, LinkedIn } from '@mui/icons-material'
import React from 'react'
import { Element } from 'react-scroll'
import "./Contact.css";

export const Contact = () => {
  return (
    <Element className="contact" id="contact">
        <h1>Contact</h1>
        <div className='contact_container'>
            <p>
                Email:<span>soundaryaa.sitaram@gmail.com</span>

            </p>
            <p>
                Github username : <span>SoundaryaaSitaram</span>
            </p>
            <div className='contact_icons'>
                <a href='https://www.linkedin.com/in/soundaryaa-sitaram-a4741120b'>
                    <IconButton >
                        <LinkedIn />
                    </IconButton>
                </a>
                <a href='https://www.instagram.com/deepak_soundaryaa/'>
                    <IconButton>
                        <Instagram/>
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}
