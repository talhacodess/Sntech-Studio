import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router';

function ContactUs() {
    return (
        <>

            {/** breadbrumb area */}

            <div className='breadcrumb-area about'>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content text-center">
                                <h4>Contact</h4>
                                <ul className='breadcrumb-list'>
                                    <Link to={'/'} ><li className='home'>Home</li></Link>
                                    <li className='list-arrow'><MdOutlineKeyboardArrowLeft size={25} /></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            {/** Contact Area */}
            <div className="contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className='hero-content text-start service-title'>
                                <h5>Contact Us</h5>
                                <h1 className='about-h1'>Make an Online Appoinemnt Booking For <span style={{ color: '#de4026' }}> Business Planing</span></h1>



                            </div>
                            <div className='contact-form-box'>
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className='input-box'>
                                                <input type="text" placeholder='Your Name *' />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className='input-box'>
                                                <input type="email" placeholder='Your Email *' />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className='input-box'>
                                                <input type="text" placeholder='Subject *' />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className='input-box'>
                                                <input type="text" placeholder='Phone *' />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className='input-box'>
                                                <textarea name="" id="" rows={7}></textarea>
                                            </div>
                                            <div className="quote_button">
                                                <button className='btn' type='submit'>Send Now<MdArrowOutward /></button></div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5"></div>
                    </div>
                </div>



            </div>

            <div className="container-fluid p-0">

           
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.521941824463!2d-118.40357272390203!3d34.03048011887841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbbf80eec803%3A0x8425555061bf7fe8!2sUmbrella%20Custom%20Packaging%20USA!5e0!3m2!1sen!2s!4v1742941460574!5m2!1sen!2s" width="100%" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
            </div>

        </>
    )
}

export default ContactUs
