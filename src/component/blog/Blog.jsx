import React from 'react'
import '../../styles/Blog.css'
import img1 from '../../assets/blog-thu.png' 
import img2 from '../../assets/blog-thu2.png' 
import img3 from '../../assets/blog-thu3.png' 
import { Link } from 'react-router'
import { FaRegUser } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";


export const blogData = [

    {
        id: '1',
        category:'Web Developer',
        img:img1,
        author:'Talha Bashir',
        title:'Regional Manager limited time management.',
        btnUrl:'/blog-detail'
    },
    {
        id: '2',
        category:'SEO Specialist',
        img:img2,
        author:'Sabir Clark',
        title:'The Complete Guide to Tekone App Development',
        btnUrl:'#'
    },
    {
        id: '3',
        category:'Graphic Designer',
        img:img3,
        author:'Mudasir Chamkila',
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
                        <Link to={`/blog-detail/${blog.id}`}>{blog.category}</Link>
                    </div>
                </div>
                <div className="blog-box-content">
                    <div className="meta-blog">
                        <Link to={`/blog-detail/${blog.id}`}><span><FaRegUser size={35} />{blog.adminName}</span></Link>
                        <p><span><FaRegCommentDots size={35}  /></span>COMMENTS</p>
                    </div>
                    <h3><Link to={`/blog-detail/${blog.id}`}>{blog.title}</Link></h3>
                    <div className="blog-btn">
                        <Link to={`/blog-detail/${blog.id}`}>Read Post</Link>
                    </div>
                </div>

            </div>
        </div>
        })}
       
      
    </div>
  )
}

export default Blog
