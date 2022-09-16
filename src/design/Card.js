import React from 'react'
import './Card.css'
import {FaUserAlt,FaDesktop,FaCloudUploadAlt,FaChartPie,FaMobileAlt, FaThumbsUp,FaWallet,FaClipboard,FaInfoCircle,FaBookOpen,FaVideo,FaMicrochip,FaHome,FaHospitalAlt,FaImage} from 'react-icons/fa';
import { BsSunFill,BsFillGrid3X3GapFill,BsPieChartFill } from "react-icons/bs";
import netapp from '../images/netAppLogo.png';
import signify from '../images/signifyLogo.png';
import cris from '../images/crisLogo.png';
import acengage from '../images/aceNgageLogo.png';
import icobs from '../images/icobsLogo.png';
import chhattisgarh from '../images/chhattisgarhLogo.png';
import adactin from '../images/adactinLogo.png';
import bitmaple from '../images/bitMapleLogo.png';
import jagannath from '../images/jagannathLogo.png';
import totalsolutions from '../images/totalSolutionsLogo.png';



function Card(props) {
  return (
   <div className="card">
      <div className="card__body">
        {/* <img src={props.img} class="card__image" /> */}
        {props.icon==="user" &&<FaUserAlt color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="thumbUp" &&<FaThumbsUp color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="wallet" &&<FaWallet color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="board" &&<FaClipboard color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="info" &&<FaInfoCircle color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="book" &&<FaBookOpen color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="video" &&<FaVideo color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="chip" &&<FaMicrochip color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="home" &&<FaHome color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="sun" &&<BsSunFill color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="hospital" &&<FaHospitalAlt color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="image" &&<FaImage color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="FaMobileAlt" &&<FaMobileAlt color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="FaDesktop" &&<FaDesktop color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="BsFillGrid3X3GapFill" &&<BsFillGrid3X3GapFill color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="FaChartPie" &&<FaChartPie color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="BsPieChartFill" &&<BsPieChartFill color="#6BABDA" size="1.3em" className="icon"/>}
        {props.icon==="FaCloudUploadAlt" &&<FaCloudUploadAlt color="#6BABDA" size="1.3em" className="icon"/>}

        {props.image==="netapp" && <img src={netapp} width="157" height="68" alt='netapp logo'></img>}
        {props.image==="signify" && <img src={signify} width="157" height="68" alt='signify logo'></img>}
        {props.image==="cris" && <img src={cris} width="157" height="68" alt='cris logo'></img>}
        {props.image==="acengage" && <img src={acengage} width="157" height="68" alt='acengage logo'></img>}
        {props.image==="icobs" && <img src={icobs} width="157" height="68" alt='icobs logo'></img>}
        {props.image==="chhattisgarh" && <img src={chhattisgarh} width="157" height="68" alt='chhattisgarh logo'></img>}
        {props.image==="adactin" && <img src={adactin} width="157" height="68" alt='adactin logo'></img>}
        {props.image==="bitmaple" && <img src={bitmaple} width="157" height="68" alt='bitmaple logo'></img>}
        {props.image==="jagannath" && <img src={jagannath} width="137" height="68" alt='jagannath logo'></img>}
        {props.image==="totalsolutions" && <img src={totalsolutions} width="157" height="68" alt='totalsolutions logo'></img>}
        

        {props.circle && <div className='cardCircleInfo'>{props.circle}</div>}
        <span className="card__title">{props.title}</span>
        <p className="card__description">{props.description}</p>
      </div>
      {props.button==="true" && <div><button className="card__btn">View Recipe</button></div> }
    </div>
  )
}

export default Card
