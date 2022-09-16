import React from 'react'
import '../solutions/Solutions.css'
import Card from '../../design/Card'
import Testimonial from './Testimonial'
function Clientele() {
  return (
    <div className='solnbg'>
    <h1 className='fcolor'>
    Clientele<br/>
    </h1>
    <span className='solnbody'>
    Fulfill tomorrow’s demands by Today’s Work. We believe in this practice and so do our customers. 
Here are our customers who believed in us and got more than anticipated.
    <div className='card-grid'>
          <div className='row'>
            <Card image='netapp'/>
            <Card image='chhattisgarh'/>
          </div>
          <div className='row'>
           <Card image='signify'/>
           <Card image='adactin'/>
          </div>
          <div className='row'>
            <Card image='cris'/>
            <Card image='bitmaple'/>
          </div>
          <div className='row'>
            <Card image='acengage'/>
            <Card image='jagannath'/> 
          </div>
          <div className='row'>
            <Card image='icobs'/>
            <Card image='totalsolutions'/>
          </div>
       </div>

    <div className='solninfo'> 
    <br/>
    <br/>
    <Testimonial description='NetApp has had an extremely productive engagement with Analytics Valley. 
      The young and enthusiastic bunch of IT professionals at AV hold all the aces — 
      they are not only technically sound but quite adept at providing high quality deliverables, 
      without compromising on quality and sticking to tight deadlines.'  subtext='Mr. Roopesh Narasimha, Engineering Program Manager, NetApp' image='1'/>
  
  </div>
    </span>
  </div>
  )
}

export default Clientele
