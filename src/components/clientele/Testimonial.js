import React from 'react'
import './Testimonial.css'
import customer1 from '../../images/clienteleCustomer1.png';
function testimonial(props) {
  return (
    <div>
<div style={{background:"#91CEFA"}} className='background'>
        <div className='textClass'>
            <p>{props.description}</p> <br/><br/><br/>
            <p className='subtext'>{props.subtext}</p>
        </div>
     
    {props.image==="1" && <img src={customer1} alt='customer one'></img>}
    </div>
    <div className='subtext2'> <br/>
    See what people say about us? <a style={{color:"#7FCFF1"}} href=''>Read the Testimonials</a>
    </div>
    
    </div>
    
  )
}

export default testimonial
