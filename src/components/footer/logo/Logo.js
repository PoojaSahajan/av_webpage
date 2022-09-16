import React from 'react'
import './logo.css'
import avlogo from '../../../images/avLogo.jpeg';
import {FaFacebookF, FaTwitter} from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
function Logo() {
  return (
    <div style={{width:800, height:100}}><center>
        <img src={avlogo} alt='logo' width='125' height="70" style={{display:"inline"}}></img>
     <h3 className='head'>ANALYTICS VALLEY</h3>  <br></br>
     <div className='followStyle'>
     follow us on &nbsp; 
     <a href='https://www.facebook.com/AnalyticsValley'><FaFacebookF/> </a>&nbsp; 
     <a href='https://in.linkedin.com/company/analytics-valley'><FaTwitter/></a> &nbsp;
     <a href='https://twitter.com/analyticsvalley'><FiLinkedin/></a> 
     </div>
     
    
     </center>
    </div>
  )
}

export default Logo
