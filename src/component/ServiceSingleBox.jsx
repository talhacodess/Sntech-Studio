import React from 'react'
import '../styles/Component.css'

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
        <div className="service-content"></div>

      
    </div>
  )
}

export default ServiceSingleBox
