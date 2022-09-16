import React from 'react'
import './headOffice.css'
import { GrLocation, GrPhone } from "react-icons/gr";

function HeadOffice() {
  return (
    <div>
        
        <h3>Head Office</h3>
        <div className='officeStyle'>
            <GrLocation/>
      202, Vandana, Brookefield, Kundalahalli, Bangalore – 560037<br></br>
            <GrPhone/>
            +91 998 675 4597<br></br><br></br>
            <button>Contact us</button>
        </div>
      
    </div>
  )
}

export default HeadOffice
