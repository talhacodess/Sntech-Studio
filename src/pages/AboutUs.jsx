import React from 'react'
import '../styles/About.css'
import { Link } from 'react-router';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import aboutus from '../assets/about-thumb.png' 
import shape from '../assets/about1.png'
import Project from '../component/project/Project';
import Blog from '../component/blog/Blog'; 


function AboutUs() {
  return (
    <>
    {/** breadbrumb area */}

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

     {/* About area */}
                <div className='about-area'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6'>
                                <div className='about-thumb'>
                                <img src={aboutus} alt="" />
                                <div className='about-shape'><img src={shape} alt="" /></div>
                                <h4 className='about-title'>BEST IT SOLUTION</h4>
    
                                </div>
                              
                            </div>
                            <div className='col-lg-6'>
                            <div className='hero-content'>
                                    <h5>About Us</h5>
                                    <h1 className='about-h1'>Essential IT Solutions For<br /> <span style={{color:'#de4026'}}> Modern Businesses.</span></h1>
                                    <p style={{color:'#7a7a7a'}}>Where your interests international networks intersect provid custom software solutions for any value software.</p>
                                  
                                        <div class="solutek-btn">
                                            <a href="#">EXPLORE MORE</a>
    
                                    </div>
    
    
                                </div>
                            </div>
                        </div>
    
                    </div>
    
                </div>

                  {/** Recent Project*/}
                            <div className='project-area '>
                
                                <div className='row project'>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <div className='hero-content service-title'>
                                                <h5>Our Projects</h5>
                                                <h1 className='about-h1'>Explore Our Recent<br /> <span style={{color:'#de4026'}}>Projects.</span></h1>
                                            </div>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-12'> 
                                        <div className=' border-bottom border-2 py-5'> 
                                        <div class="solutek-btn text-sm-end text-lg-end">
                                                        <a href="/contact">EXPLORE MORE</a>
                                                    </div>
                                                    </div>
                                               </div>
                
                                </div>
                                {/** Project cards */}
                
                                <div className='container-fluid '>
                                    <Project/>
                
                                </div>
                
                
                            </div>

                             {/**Blog Area */}
            <div className="blog-area ">
                <div className="container">
                    <div className="row">
                    <div className='col-lg-6'>
                    <div className='hero-content service-title'>
                                <h5>LATEST NEWS & BLOG</h5>
                                <h1 className='about-h1'>Exploring Its Potential in
                                 <span style={{color:'#de4026'}}>Various Industries.</span></h1>
                            </div>
                    </div>
                    <div className='col-lg-6'> 
                        <div className=' border-bottom border-2 py-5'> 
                        <div class="solutek-btn text-end">
                                        <a href="/contact">VIEW ALL POST</a>
                                    </div>
                                    </div>
                               </div>
                    </div>

                    <Blog/>


                </div>
            </div>
    </>
  )
}

export default AboutUs
