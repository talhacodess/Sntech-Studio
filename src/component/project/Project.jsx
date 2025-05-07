import '../../styles/Project.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'


const softwareService = [
    { img: project1, title: "Software Development", Category: 'Software' },
    { img: project2, title: "App Development", Category: 'Software' },
    { img: project3, title: "Logo Designing", Category: 'Software' },
    { img: project4, title: "UI/UX", Category: 'Software' },
    { img: project1, title: "SEO", Category: 'Software' },
    { img: project3, title: "Digital Marketing", Category: 'Software' },
]

function Project() {
    return (
        <>
            <Swiper
               slidesPerView={3}
               spaceBetween={30}
               speed={5000}
               pagination={{ clickable: true }}
               autoplay={{
                 delay: 2,
                 disableOnInteraction: false,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper"
               breakpoints={{
                 600: { slidesPerView: 1 },
                 768: { slidesPerView: 2 },
                 1024: { slidesPerView: 3 },
               }}
               touchStartPreventDefault={false} // Important for mobile touch
               simulateTouch={true}

                
            >
                {softwareService.map((service, index) => {
                    return (
                        <SwiperSlide className='row'>
                            <div className='col-lg-12 col-md-12'>
                                <div className='project-single-box'>
                                    <div className="project-thumb">
                                        <img src={service.img} alt="" />
                                    </div>
                                    <div className="project-content">
                                        <h3 className='project-title'>{service.title}</h3>
                                        <p className='project-text'>{service.Category}</p>
                                    </div>

                                </div>

                            </div>


                        </SwiperSlide>)
                })}


            </Swiper>


        </>
    )
}

export default Project
