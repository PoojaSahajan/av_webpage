import React from 'react'
import './Solutions.css'
import Card from '../../design/Card'
import {BsArrowRight} from "react-icons/bs";
function Solutions() {
  return (
    <div className='solnbg'>
      <h1 className='fcolor'>
      Solutions<br/>
      </h1>
      <span className='solnbody'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
      <div className='card-grid'>
        <div className='row'>
            <Card title='Sswayam CRM' icon='user'/> 
            <Card title='Online Survey/Feedback' icon='thumbUp'/>
            <Card title='Verify Me' icon='info'/>
            <Card title='Robotic Live Streaming' icon='video'/>
            <Card title='Home UV Sanitization' icon='home'/>
            <Card title='Hospital Management' icon='hospital'/>   
        </div>

        <div className='row'>
            <Card title='Tax & Account Manage' icon='wallet'/> 
            <Card title='Online Exam Module' icon='board'/>
            <Card title='School Management' icon='book'/>
            <Card title='Robotic UV Sanitization' icon='chip'/>
            <Card title='Government Tourism' icon='sun'/>
            <Card title='Image Processing' icon='image'/> 
        </div>
      </div>
      <br/>
      <div className='solninfo'> 
      <br/>
      <br/>
      Go through every detail of <font color="#6BABDA">Analytics Valley</font> Business in one go.<br/>
      You are in good hands with us &these stats prove the facts about<br/><br/>

      <ul className='factsList'>
        <li><BsArrowRight color="#6BABDA"/> Brilliant-Minded and Dedicated Technical Team</li>
        <li><BsArrowRight color="#6BABDA"/> Our Talented & Experienced Marketing Agency</li>
        <li><BsArrowRight color="#6BABDA"/> A Plethora of Solutions framed by experience</li>
      </ul>

      <div className='card-grid factsGrid'> 
        <div className='row'>
            <Card title='Happy Clients' circle='97%'/>
        </div>
          <div className='row'>
            <Card title='Projects Complete' circle='50+'/>
          </div>

          <div className='row'>
            <Card title='Years Experience' circle='5'/>
          </div>
        
          <div className='row'>
            <Card title='Expert Engineers' circle='20+'/>
          </div>
      </div>

      
      </div>
      </span>
       </div> 
    
  )}
    

export default Solutions
