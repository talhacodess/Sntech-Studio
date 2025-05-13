import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router';
import img from '../../assets/blog-thu2.png'
import '../../styles/Blog.css'
import { FaRegUser } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoFolderOpenOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";
import { PiPinterestLogoBold } from "react-icons/pi";
import comimg from '../../assets/test.png'
import { useParams } from 'react-router';
import { useEffect,useState } from 'react';
import axios from 'axios';










function BlogDetial() {

    const {id} = useParams();
    const [blog,setBlog] = useState(null);
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/blogs/${id}`)
        .then(res => setBlog(res.data))
        .catch(err => console.log('error fetching blog:',err));
    },[id])
    if(!blog) return <p>Loading Blog...</p>
    console.log(blog,'blog data');
    
  return (
   <>
    {/** breadbrumb area */}

    <div className='breadcrumb-area about'>

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-content text-center">
                        <h4>Blog Details</h4>
                        <ul className='breadcrumb-list'>
                          <Link to={'/'} ><li className='home'>Home</li></Link>
                            <li className='list-arrow'><MdOutlineKeyboardArrowLeft size={25} /></li>
                            <li>Blog Details</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

      
    </div>
    <div className="blog-detail">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-detail-thumb">
                                <img src={blog.img} alt="" />
                            </div>
                            <div className="blog-detail-content">
                                <div className="meta-blog">
                                    <span><FaRegUser size={40} />{blog.author}</span> 
                                    <span><SlCalender size={40} />5 jnuary,2025</span> 
                                    <span><IoFolderOpenOutline size={40} />{blog.category}</span> 

                                </div>
                                <h4 className="blog-details-title">{blog.title}</h4>
                                <p className='blog-details-desc'>Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities before user-centric Credibly implement exceptional</p>
                                <p className='blog-details-desc'>Alternative innovation to ethical network environmental whiteboard pursue compelling results for methods empowerment. Dramatically architect go forward opportunities before user-centric Credibly implement exceptional</p>
                                 <h4 className="blog-details-title">Our Begin Now To Beingonl</h4>
                                  <p className='blog-details-desc'>Dynamically optimize leading-edge value via pandemic manufactured products. Conveniently seize sticky growth strategies and ethical potentialities. Professionally create high-quality rather than intuitive portals.</p>
                                  <ul className='detail-list'>
                                    <li>Innovate wireless market</li>
                                    <li>Productivate resource sucking</li>
                                    <li>Proactively unleash oriented communities</li>
                                    <li>Credibly develop progressive archi</li>
                                  </ul>
                                  <div className="row">
                                    <div className="col-lg-6">
                                        <div className="blog-detail-thumb">
                                            <img src={img} alt="" />
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="blog-detail-thumb">
                                            <img src={img} alt="" />
                                        </div>
                                    </div>
                                  </div>
                                   <h4 className="blog-details-title">Arcu At Mauris Facilisis Fermentum</h4>
                                  <p className='blog-details-desc'>Progressively target highly efficient business for distributed interfaces. Globally evisculate pand networks rather than viral collaboration and idea-sharing. Continually utilize turnkey networks via productize intuitive information whereas</p>
                            </div>

                            <div className="blog-details-socila-box">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="blog-detail-category">
                                            <span><Link>Digital Marketing</Link></span>
                                            <span><Link className='active-class'>Development</Link></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="blog-details-social-icon">
                                            <ul>
                                                <li><FaFacebookF size={15} /></li>
                                                <li><RiTwitterXLine size={15} /></li>
                                                <li><GrLinkedinOption size={15} /></li>
                                                <li><PiPinterestLogoBold size={15} /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-comment-area">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog-details-comment-title">
                                            <h4>'2' Comments</h4>
                                        </div>
                                        <div className="blog-details-comment">
                                            <div className="blog-details-comment-reply">
                                                <Link>Reply</Link>
                                            </div>
                                            <div className="blog-details-comment-thumb">
                                                <img src={comimg} alt="" />
                                            </div>
                                            <div className="blog-details-comment-content">
                                                <h2>Maria Manda</h2>
                                                <span>22 August, 2024</span>
                                                <p>Interactively visualize top-line internal or "organic" sources rather than top-line niche mark unleash 24/7 opportunities after high standards in process improvements. Uniquely deploy methodologies with reliable information.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-details-contact">
                                    <div className="blog-details-contact-title">
                                        <h4>Leave a Comments</h4>
                                    </div>
                                    <form action="">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="contact-input-box">
                                                    <input type="text" placeholder='Full Name*' required/>
                                                </div>
                                                </div>
                                                <div className="col-lg-6">
                                                <div className="contact-input-box">
                                                    <input type="email" placeholder='Email Address*' required/>
                                                </div>
                                                </div>
                                                <div className="col-lg-12">
                                                 <div className="contact-input-box">
                                                    <input type="text" placeholder='Your Website*' required/>
                                                </div>
                                                </div>
                                              
                                                <div className="col-lg-12">
                                                <div className="contact-input-box">
                                                  <textarea name="" rows={5} id="" placeholder='Write Comments...'></textarea>
                                                </div>
                                                </div>
                                           <div className="col-lg-12">
                                                <div className="input-check-box">
                                                 <input type="checkbox" /> <span>Save your email info in the browser for next comments.</span>
                                                </div>
                                                </div>
                                           <div className="col-lg-12">
                                                <div className="blog-details-submi-button">
                                                <button type='submit'>Post Comment</button>
                                                </div>
                                                </div>
                                           
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    </div>
   </>
  )
}

export default BlogDetial
