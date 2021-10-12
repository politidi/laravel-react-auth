import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
	return(
		<div>
		<div className="Footer">
		<footer>
		<div className="container">
			<div className="sec aboutus">
				<h2>About Us</h2>
				<p>TUSUR is one of the leading engineering universities in Russia, located in the intellectual heart of Russia and Siberia – the city of Tomsk.

TUSUR is a young university, ambitiously striving for leadership and global presence in education and research. 13 thousand students study at our 13 faculties. Relatively small size allows the university to be mobile and quickly adjust to changes becoming stronger and more efficient.</p>
				<ul className="sci">
					<li><a href="#"><i className="fab fa-vk"></i></a></li>
					<li><a href="#"><i className="fab fa-telegram"></i></a></li>
					<li><a href="#"><i className="fab fa-instagram"></i></a></li>
					<li><a href="#"><i className="fab fa-youtube"></i></a></li>
					<li><a href="#"><i className="fab fa-facebook"></i></a></li>
				</ul>
			</div>
			<div className="sec quickLinks">
				<h2>Quick Links</h2>
				<ul>
					<li><a href="#">About</a></li>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">Privacy Policy</a></li>
					<li><a href="#">Help</a></li>
					<li><a href="#">Terms & Consitions</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
			<div className="sec contact" id="contact">
				<h2>Contact Info</h2>
				<ul className="info">
					<li>
						<span><i className="fas fa-map-marker"></i></span>
						<span>TUSUR, Lenina 40, Tomsk, Russia</span>
					</li>
					<li>
						<span><i className="fas fa-phone"></i></span>
						<span><p><a href="tel:+77777777777">+7 960 777 77 77 <br/></a></p>
						<p><a href="tel:+77077077077">+7 923 707 70 77</a></p></span>
					</li>
					<li>
						<span><i className="fas fa-envelope"></i></span>
						<p><a href="mailto:tusur@ie.ru">tusur@ie.ru</a></p>
					</li>
				</ul> 
			</div>
		</div>
	</footer>

		<div className="copyright">
			<p>Copyright © 2021 <a href="https://void.kz">void.kz</a> All Rights Reserved.</p>
		</div>
	</div>
	</div>
	);
}

export default Footer;
