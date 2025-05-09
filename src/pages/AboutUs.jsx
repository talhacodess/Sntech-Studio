import React from 'react'
import '../styles/About.css'
import { Link } from 'react-router';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


function AboutUs() {
  return (
    <div className='breadcrumb-area about'>

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-content text-center">
                        <h4>About Us</h4>
                        <ul className='breadcrumb-list'>
                          <Link to={'/'} ><li className='home'>Home</li></Link>
                            <li className='list-arrow'><MdOutlineKeyboardArrowLeft size={25} /></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

      
    </div>
  )
}

export default AboutUs
