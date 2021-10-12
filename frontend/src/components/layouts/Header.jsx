import React,{useState} from 'react';
import '../../styles/Header.css';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';

const Header = (props) => {

	const [state, setState] = useState({
		loggedout: ''
	})

	const logout = () => {
		localStorage.clear();
		props.setUser(null);
	}

	let buttons;
	let profile;

	if(localStorage.getItem('token')){
		buttons = (
			<Link to='/' onClick={logout}><span>Logout</span></Link> 
		)
		profile = (
			<Link to='/profile'><span>Profile</span></Link> 
			)
	} else {
		buttons = (
			<div>
			<Link to='/login'><span>Login</span></Link> 
			<Link to='/register'><span>Register</span></Link>
			</div>
		)
	}
	
	return(
		<div className="Header">
			<header>
			<a href="#"><img src={logo} className="logo" alt="logo" /></a>
			<ul>
				<li><Link to="#">Products</Link></li>
				<li><Link to="#">What's News</Link></li>
				<li><Link to="#">Newsletter</Link></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			<div className="logreg">
				{buttons}
			</div>
			</header>
		</div>
		);
}

export default Header;