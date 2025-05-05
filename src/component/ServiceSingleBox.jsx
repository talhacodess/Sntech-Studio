import React from 'react'
import '../styles/Component.css'
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router';



function ServiceSingleBox(
    {
        img,
        title,
        des,
        url,
    }
) {
  return (
    <div className='service-single-box'>
        <div className="service-icon">
            <img src={img} alt="" />
        </div>
        <div className="service-content">
          <h3 className='service-title'>{title}</h3>
          <p className='service-text'>{des}</p>
          <div className="service-btn">
            <Link to={url}><FaPlus />Read More</Link>
          </div>
        </div>

      
    </div>
  )
}

export default ServiceSingleBox
