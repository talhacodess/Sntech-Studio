import React from 'react'
import '../styles/Footer.css'
import headset from '../assets/address1.png'
import phone from '../assets/address2.png'
import Logo from '../assets/sn-logo-white.png'
import { IoPaperPlaneOutline } from "react-icons/io5";


function Footer() {
  return (
    <>
    <div class="address-area">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-md-12">
				<div class="address-box">
					<div class="address-icon">
						<img src={headset} alt="address1" />
					</div>
					<div class="address-title">
						<h3>Elevating Customer Experience.</h3>
					</div>
				</div>
			</div>
			<div class="col-lg-6 col-md-12">
				<div class="address-box2">
					<div class="address-icon">
						<img src={phone} alt="address1"/>
					</div>
					<div class="solutek-btn">
						<a href=""> +987-3457-98
							<div class="solutek-hover-btn hover-bx"></div>
							<div class="solutek-hover-btn hover-bx2"></div>
							<div class="solutek-hover-btn hover-bx3"></div>
							<div class="solutek-hover-btn hover-bx4"></div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    
    <div class="footer-area">
	<div class="container">
		<div class="row footer">
			<div class="col-lg-4 col-md-6 col-sm-6">
				<div class="footer-widget">
					<div class="footer-logo">
						<a href="/"><img src={Logo} className='w-50' alt="footer-logo"/></a>
					</div>
					<p class="footer-widget-text">Globally monetize plug-and-play data it solu
					monotonectally disseminate oriented busine
					multifunctional mind design.</p>
					<div class="footer-social">
						<div class="footer-widget-social">
							<a href="#"><i class="fab fa-facebook-f"></i></a>
							<a href="#"><i class="fab fa-twitter"></i></a>
							<a href="#"><i class="fab fa-linkedin-in"></i></a>
							<a href="#"><i class="fab fa-pinterest-p"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-2 col-md-6 col-sm-6">
				<div class="footer-widget left">
					<div class="widget-title">
						<h2>Useful Links</h2>
					</div>
					<ul className='p-0'>
						<li><a href="/about-us">About Company</a></li>
						<li><a href="/team">Meet Our Team</a></li>
						<li><a href="/blog-grid">Latest Blog</a></li>
						<li><a href="/contact">Contact Us</a></li>
						<li><a href="/testimonial">Testimonials</a></li>
					</ul>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-6">
				<div class="footer-widget left">
					<div class="widget-title">
						<h2>Services.</h2>
					</div>
					<ul>
						<li><a href="/about-us">About Company</a></li>
						<li><a href="/team">Meet Our Team</a></li>
						<li><a href="/blog-grid">Latest Blog</a></li>
						<li><a href="/contact">Contact Us</a></li>
						<li><a href="/faq">FAQ</a></li>
					</ul>
				</div>
			</div>
			<div class="col-lg-3 col-md-6 col-sm-6">
				<div class="footer-widget-newsletter">
					<div class="widget-title">
						<h2>Newsletter</h2>
					</div>
					<p class="newsletter-text">Globally monetize plug-and-play data it solu
					monotonectally disseminate oriented busine
					multifunctional mind design.</p>
					<div class="Subscribe-form2">
						<form>
							<div class="form-field2">
								<input type="email" name="EMAIL" placeholder="Enter Your E-mail" required=""/>
								<button class="subscribe-button" type="submit"><IoPaperPlaneOutline /></button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="row copyright">
			<div class="col-lg-6 col-md-6 col-sm-6">
				<div class="-copyright-text">
					<p>© Copyright 2024 By Solutek</p>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-6">
				<div class="copyright-list">
					<ul>
						<li><a href="/">Privacy Policy</a></li>
						<li><a href="/index-2">Supports</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
</>
  )
  
}

export default Footer
