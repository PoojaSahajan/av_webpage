import React from 'react'
import './Mission.css'
function Mission() {
  return (
    <div className='missionBg'>
     
      <button className='missionButton'>Visual</button> <span className='buttonText'>Look no further if you  want a decisive edge 
      against your competitors in today's data driven economy.</span>
        <br/><br/><br/><br/>
      <button className='missionButton'>Volume</button> <span className='buttonText'>We at Analytics Valley provide specialized 
      data techniques and technologies to meet your industry's requirements, serving as your one-stop shop for all your big data 
      analytics solutions and services.</span>
      <br/><br/>
      <button className='missionButton'>Value</button> <span className='buttonText'> We collaborate with you to catch and utilize 
      data for better market insights, helping you competently serve your customers.</span>
     
     <div className='visionText'>
     Vision : Monetization through data insight
     </div>
     <div className='missionText'>
     Mission :<br/>
     <ul>
        <li>To provide <b> Business Insight</b> by addressing customer needs.</li>
        <li>To deliver <b> Analytical Solutions</b> for business challenges or enhancement.</li>
        <li>To provide <b> New Opportunities</b> for customers by using analytics.</li>
     </ul>
     </div>
     Meet the team and Read More About us <a href='' style={{color:" #A6D7F3"}}>Here</a> <br/>
     <br/><br/><br/>
    </div>
  )
}

export default Mission
