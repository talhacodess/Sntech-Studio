import React from 'react'
import logo from '../assets/sn-logo.png'
import { FaArrowRightLong } from "react-icons/fa6";
import '../styles/Header.css'
import { Link } from 'react-router';


function Header() {
  return (
    <div className='my-navbar'>

        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} height={42} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <Link to={"/"} class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
         <Link to={'/about-us'} class="nav-link">About Us</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
           <Link to={'/services'} class="nav-link">Services</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
       
       
      </ul>
      <form class="d-flex">
        <button class="btn-header" type="submit">Get A Quote Now  <FaArrowRightLong /></button>
        
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Header

