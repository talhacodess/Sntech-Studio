import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import '../../styles/Review.css'
import reviewi from '../../assets/reviewi.png'
import reviewt from '../../assets/reviewt.png'
import reviews from '../../assets/reviews.png'
import reviewz from '../../assets/reviewz.png'
const reviewData = [
    { text: 'paradigms. Monotonectally extend open-sourcemvia competitive methods of empowerment drirevolutionize stand- business', rating: 4, name: 'Talha Bashir', title: 'Developer', img: reviewt },
    { text: 'paradigms. Monotonectally extend open-sourcemvia competitive methods of empowerment drirevolutionize stand- business', rating: 5, name: 'Sabir', title: 'SEO Specialist', img: reviews },
    { text: 'paradigms. Monotonectally extend open-sourcemvia competitive methods of empowerment drirevolutionize stand- business', rating: 4, name: 'Zeeshan Smith', title: 'Google Ad Expert', img: reviewz },
]

function Reviews() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
               
                className="mySwiper"
            >
                {reviewData.map((review, index) => {
                    return (
                        <SwiperSlide className='row'>
                            <div className='col-lg-12 col-md-12'>
                                <div className='review-box'>
                                    <div className="review-single-box">
                                        <div className="review-icon">
                                            <img src={reviewi} alt="Review icon" />

                                        </div>
                                        <div className="review-content">
                                            <p className="review-text">{review.text}</p>
                                            <p className='review-rating'>⭐⭐⭐⭐⭐{review.rating}</p>
                                            <h3 className='review-title'>
                                                {review.name}
                                                <span>{review.title}</span>
                                            </h3>
                                        </div>

                                      

                                    </div>
                                    <div className="review-author">
                                            <img src={review.img} alt="" />

                                        </div>

                                </div>

                            </div>


                        </SwiperSlide>)
                })}


            </Swiper>


        </>
    )
}

export default Reviews
