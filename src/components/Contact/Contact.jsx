import React from 'react'
import './Contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span> BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" placeholder = "Enter your email..."/>
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
                <GoogleIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact