import React from 'react'
import '../../styles/Home.css'
import { IoPlayOutline } from "react-icons/io5";
import hero from '../../assets/hero-thumb.png'
import FeaturedCard from '../../component/FeaturedCard';
import feature1 from '../../assets/feature1.png'
import feature2 from '../../assets/feature2.png'
import feature3 from '../../assets/feature3.png'
import feature4 from '../../assets/feature4.png'
import feature5 from '../../assets/feature5.png' 
import aboutus from '../../assets/about-thumb.png' 
import shape from '../../assets/about1.png' 


function Home() {
    return (
        <>
            <div className='hero-area d-flex align-items-center'>
                <div className='container'>

                    <div className='row align-items-center '>
                        <div className='col-lg-6'>
                            <div className='hero-content'>
                                <h5>SN-Tech Studio</h5>
                                <h1>The Beauty Behind <br /> IT Services.</h1>
                                <p>Where your interests international networks intersect provid custom software solutions for any value software.</p>
                                <div className='d-flex gap-3'>
                                    <div class="solutek-btn">
                                        <a href="/contact">EXPLORE MORE</a>
                                    </div>
                                    <div className="hero-video-icon">
                                        <a href=""><IoPlayOutline /></a>
                                        <span>WATCH VIDEO</span>
                                    </div>

                                </div>


                            </div>


                        </div>
                        <div className='col-lg-6'>
                            <div className='hero-thumb'>
                                <img src={hero}  alt="" />
                               
                            </div>


                        </div>


                    </div>

                </div>
            </div>

            {/* Featured Area */}

            <div className='featured-area'>
                <div className='container'>
                    <div className='row align-items-center'>

                        <div className='featured-box'>
                            <FeaturedCard title={"Data Security"} desc={'Monotonectally solutek in fermentum quis'} img={feature1}/>
                            <FeaturedCard title={"Digital Marketing"} desc={'Monotonectally solutek in fermentum quis'} img={feature2}/>
                            <FeaturedCard title={"IT Consultation"} desc={'Monotonectally solutek in fermentum quis'} img={feature3}/>
                            <FeaturedCard title={"Cloud Services"} desc={'Monotonectally solutek in fermentum quis'} img={feature4}/>
                            <FeaturedCard title={"Technology"} desc={'Monotonectally solutek in fermentum quis'} img={feature5}/>
                        </div>

                    </div>
                </div>
            </div>

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
                                <h5>SN-Tech Studio</h5>
                                <h1 style={{color:'#000',fontSize:'42px',fontWeight:'700'}}>Essential IT Solutions For<br /> <span style={{color:'#de4026'}}> Modern Businesses.</span></h1>
                                <p style={{color:'#7a7a7a',  fontSize:'16px'}}>Where your interests international networks intersect provid custom software solutions for any value software.</p>
                              
                                    <div class="solutek-btn">
                                        <a href="#">EXPLORE MORE</a>

                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )

}

export default Home
