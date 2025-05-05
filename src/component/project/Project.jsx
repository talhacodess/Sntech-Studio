import React from 'react'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import '../../styles/Project.css'

const softwareService = [
    {img:project1,title:"Software Development",Category:'Software'},
    {img:project2,title:"App Development",Category:'Software'},
    {img:project3,title:"Logo Designing",Category:'Software'},
    {img:project4,title:"UI/UX",Category:'Software'},
    {img:project1,title:"SEO",Category:'Software'},
    {img:project3,title:"Digital Marketing",Category:'Software'},
]

function Project() {
  return (
    <>
    
    <div className='project-single-box'>
        <div className="project-thumb">
            <img src="" alt="" />
        </div>
        <div className="project-content">
            <h3 className='project-title'></h3>
            <p className='project-text'></p>
        </div>
      
    </div>
    </>
  )
}

export default Project
