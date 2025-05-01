import React from 'react'
import '../styles/Component.css'

function FeaturedCard(
    {
        img,
        title,
        desc,
    }
) {
  return (
    <div className='featured-single-box'>
        <div className="featured-icon">
            <img src={img} alt="" />

        </div>
        <div className="featured-content">
            <h3 className='featured-title'>{title}</h3>
            <p className='featured-text'>{desc}</p>
        </div>


      
    </div>
  )
}

export default FeaturedCard
