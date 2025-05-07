import React from 'react'
import '../../styles/Blog.css'
import img1 from '../../assets/blog-thu.png' 
import img2 from '../../assets/blog-thu2.png' 
import img3 from '../../assets/blog-thu3.png' 
import { Link } from 'react-router'
import { FaRegUser } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";


const blogData = [
    {
        category:'Web Developer',
        img:img1,
        adminName:'Talha Bashir',
        title:'Regional Manager limited time management.',
        btnUrl:'#'
    },
    {
        category:'SEO Specialist',
        img:img2,
        adminName:'Sabir Clark',
        title:'The Complete Guide to Tekone App Development',
        btnUrl:'#'
    },
    {
        category:'Graphic Designer',
        img:img3,
        adminName:'Mudasir Chamkila',
        title:'Easy and Most Powerful Server and Platform.',
        btnUrl:'#'
    },
]

function Blog() {
  return (
    <div className='row'>
        {blogData.map((blog,index)=>{
            return <div className="col-lg-4">
            <div className="single-blog-box">
                <div className="single-blog-thumb">
                    <img src={blog.img} alt="" />
                    <div className='blog-meta-top'>
                        <Link to={blog.btnUrl}>{blog.category}</Link>
                    </div>
                </div>
                <div className="blog-box-content">
                    <div className="meta-blog">
                        <Link to={blog.btnUrl}><span><FaRegUser size={35} />{blog.adminName}</span></Link>
                        <p><span><FaRegCommentDots size={35}  /></span>COMMENTS</p>
                    </div>
                    <h3><Link to={blog.btnUrl}>{blog.title}</Link></h3>
                    <div className="blog-btn">
                        <Link to={blog.btnUrl}>Read Post</Link>
                    </div>
                </div>

            </div>
        </div>
        })}
       
      
    </div>
  )
}

export default Blog
