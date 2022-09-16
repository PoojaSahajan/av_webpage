import React from 'react'
import Button from 'react-bootstrap/Button';
import consultation from '../../../images/consultationIcon.png';
import solutions from '../../../images/solutionsIcon.png';
import services from '../../../images/servicesIcon.png';



import './Offer.css'

function offer() {
  return (
    <div>
        <h1 className='offerhead'>
        What we Offer  </h1><br/>
        <div className='offerbody'>
        From <b>consulting</b> and <b>solutioning</b> to implementation and <b>support services</b> , we provide services for the whole project lifecycle, assisting you in maximizing your technology investment and unlocking the strategic potential of <b>big data.</b><br/><br/>
        We work with our clients to identify and create sustainable growth strategies through their big data.<br/>
        
        
        <button className='buttonDesign'><img src={consultation} width="66" height="66" alt='consultation logo'></img>Consultation</button> &nbsp;
        <button className='buttonDesign'><img src={solutions} width="66" height="66" alt='solutions logo'></img>Solutions</button> &nbsp;
        <button className='buttonDesign'><img src={services} width="66" height="66" alt='services logo'></img>Services</button>
        <br/>
        <br/>
        
        </div> 
    </div>
  )
}

export default offer
