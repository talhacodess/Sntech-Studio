import React from 'react'
import { Link } from 'react-router'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Blog from '../component/blog/Blog';


function BlogPage() {
  return (
    <>
      {/** breadbrumb area */}

    <div className='breadcrumb-area about'>

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb-content text-center">
                        <h4>Blog</h4>
                        <ul className='breadcrumb-list'>
                          <Link to={'/'} ><li className='home'>Home</li></Link>
                            <li className='list-arrow'><MdOutlineKeyboardArrowLeft size={25} /></li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

      
    </div>

    {/**Blog Area */}
            <div className="blog-area ">
                <div className="container">

                    <Blog/>


                </div>
            </div>
    </>
  
  )
}

export default BlogPage
