import React from 'react'
import { Link } from 'react-router';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ServiceSingleBox from '../component/ServiceSingleBox';
import services1 from '../assets/service1.png'
import Team from '../component/team/Team';
import Blog from '../component/blog/Blog';

function Services() {
  return (
    <>
     {/** breadbrumb area */}

    <div className='breadcrumb-area about'>

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-content text-center">
                        <h4>Services</h4>
                        <ul className='breadcrumb-list'>
                          <Link to={'/'} ><li className='home'>Home</li></Link>
                            <li className='list-arrow'><MdOutlineKeyboardArrowLeft size={25} /></li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

      
    </div>

     {/* It services */}

            <div className="service-area ">
                <div className="container">
                    <div className="row align-items-center">

                    <div className="col-lg-12">
                    <div className='hero-content text-center service-title'>
                                <h5>SN-Tech Studio</h5>
                                <h1 className='about-h1'>How Professional IT Services <br /> <span style={{color:'#de4026'}}> Can Drive Success.</span></h1>
                               


                            </div>

                    </div>

                  <div className="col-xl-3">
                    <ServiceSingleBox  title={"Web Development"} des={"Marketing repurpose success in professions whereas in services sapien maximus design."} img={services1} />
                  </div>
                  <div className="col-xl-3">
                  <ServiceSingleBox  title={"Web Development"} des={"Marketing repurpose success in professions whereas in services sapien maximus design."} img={services1} />
                  </div>
                  <div className="col-xl-3">
                  <ServiceSingleBox  title={"Web Development"} des={"Marketing repurpose success in professions whereas in services sapien maximus design."} img={services1} />
                  </div>
                  <div className="col-xl-3">
                  <ServiceSingleBox  title={"Web Development"} des={"Marketing repurpose success in professions whereas in services sapien maximus design."} img={services1} />
                  </div>

                    </div>
                   
                </div>
            </div>


             {/**Team Area */}

               <div className='team-area'>
                <div className="container">
                    <h2 className='team-title text-center'>The Team</h2>
                </div>
                <div className="container-fluid">
                    <Team/>
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

export default Services
