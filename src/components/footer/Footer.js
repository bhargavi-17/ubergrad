import React from 'react'
import "./Footer.css"
import Logo from '../images/footerlogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Foot() {
  return (
      <div>
        <div id="id1">
      <div className='flex flex-row justify-between p-12 pl-5' style={{backgroundColor:'rgba(0, 0, 0, 0.87)',height:300}}>
      <div className='flex flex-col space-y-4'>
      <h1 className='text-white font-semibold'>About Ubergrad</h1>
      <ul className='text-white text-base font-sans'>
        <li>About us</li>
        <li>contact us</li>
        <li>Terms of use</li>
        <li>Disclaimer</li>
        <li>Privacy policy</li>
      </ul>
      </div>
      <div className='flex flex-col space-y-4'>
        <h1 className='text-white font-semibold'>Countries</h1>
        <ul className='text-white text-base font-sans'>
          <li>Study in USA</li>
          <li>Study in UK</li>
          <li>Study in Austraila</li>
          <li>Study in Cannada</li>
          <li>Study in New Zealand</li>
          <li>Study in New Ireland</li>
        </ul>
      </div>
      <div className='flex flex-col space-y-4'>
        <h1 className='text-white font-semibold'>Universities</h1>
        <ul className='text-white text-base font-sans'>
          <li>Universities in the USA</li>
          <li>Universities in the UK</li>
          <li>Universities in the Cannada</li>
          <li>Universities in Austraila</li>
          <li>Universities in New Zealand</li>
          <li>Universities in Ireland</li>
        </ul>
      </div>
      <div className='flex flex-col space-y-4'>
        <h1 className='text-white font-semibold'>Exams</h1>
        <ul className='text-white text-md font-sans'>
        <li>GRE</li>
        <li>IELTS</li>
        <li>TOFEL</li>
        <li>GMAT</li>
        <li>Dulingo</li>
        <li>PTE</li>
        </ul>
        </div>
        <div className='flex flex-col space-y-4 pr-12'>
          <h1 className='text-white font-semibold'>Contact</h1>
          <ul className='text-white text-base font-sans'>
            <li><span style={{color:'rgb(255, 193, 7)'}}>Call us</span>: +91-9303-42-42-42</li>
            <li><span style={{color:'rgb(255, 193, 7)'}}>WhatsApp us </span>: +91-9303-42-42-42</li>
            <li><span style={{color:'rgb(255, 193, 7)'}}>Mail Us </span>:hello@ubergrad.com</li>
          </ul>
          <img src={Logo} width={232} height={62} />
        </div>
      </div> 

      </div>
      <div >
        <div className='footer-main'>
           <div className='para'> <p>Copyright © 2022 Ubergrad India Pvt. Ltd. All rights reserved</p> </div>
            <ul className='icons'>
            <li><FacebookIcon /></li>
            <li><WhatsAppIcon /></li>
            <li><InstagramIcon /></li>
            <li><YouTubeIcon /></li>
            <li><LinkedInIcon /></li>
            </ul>
        </div>
    </div> 
    </div>
  
  )
}
