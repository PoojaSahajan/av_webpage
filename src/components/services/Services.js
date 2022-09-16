import React from 'react'
import '../solutions/Solutions.css'
import './Services.css'
import Card from '../../design/Card'
function Services() {
  return (
    <div className='solnbg'>
      <h1 className='fcolor'>
      Services<br/>
      </h1>
      <span className='solnbody'>
      Accelerate your progress with all the tools you need in one go. 
      Your one-stop-shop, Analytics Valley, offers a wide range of services to help you advance throughout time.
      <div className='card-grid'>
          <div className='row'>
            <Card title='Consulting' icon='user' button='true'/>
            <Card title='Basic Analytics' icon='FaChartPie' button='true'/>
          </div>
          <div className='row'>
            <Card title='Mobile App' icon='FaMobileAlt' button='true'/>
            <Card title='Advanced Analytics' icon='BsPieChartFill' button='true'/>
          </div>
          <div className='row'>
            <Card title='Web Application' icon='FaDesktop' button='true'/>
            <Card title='AWS' icon='FaCloudUploadAlt' button='true'/>
          </div>
          <div className='row'>
            <Card title='Data Science' icon='BsFillGrid3X3GapFill' button='true'/> 
            <Card title='IoT/Robotics' icon='chip' button='true'/> 
          </div>
       </div>

       
      

      <div className='solninfo'> 
      <br/>
      <br/>
      Build tools and
    extensive documention<br/><br/>
    <div className='servicesInfo'>
    You can combine all the Analytics Valley templates into a single one,
    you can take a component from the Application theme and use it in the Website.
    <br/><br/>
    <a href=" ">Learn More</a>
    </div>
    
    </div>
      </span>
    </div>
  )
}

export default Services
