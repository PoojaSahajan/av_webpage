import React from 'react'
import './Footer.css'
import HeadOffice from './headOffice/HeadOffice'
import Faq from './faq/Faq'
import Company from './company/Company'
import Logo from './logo/Logo'
function Footer() {
  return (
    <div className='footerStyle'>
      <ul className="menu">
        <li><HeadOffice/></li>
        <li><Company/></li>
        <li><Faq/></li>
        <li><Logo/></li>
      </ul>
    </div>
  )
}

export default Footer
