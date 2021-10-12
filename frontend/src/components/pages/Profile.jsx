import React from 'react';
import {Link} from 'react-router-dom';

const Profile = (props) => {

	let id; 
	let name;
	let email;
	let age; 
	let city;
	let about;

	if (props.user) {
		id = props.user.id;
		name = props.user.name;
		email = props.user.email;
		age = props.user.age;
		city = props.user.city;
		about = props.user.about;
	}

	let profile;

	if(localStorage.getItem('token')){
		profile = (
			<ul>
				<li>Id: <span>{id}</span></li>
				<li>Name: <span>{name}</span></li>	
				<li>Email: <span>{email}</span></li>
				<li>Age: <span>{age}</span></li>
				<li>City: <span>{city}</span></li>
				<li>About me: <span>{about}</span></li>
			</ul>			
		)
	} else {
		profile = (
				<h4>You are not authorized. Please log in</h4>
			)
	}

	return(
		<div>
		<section className="profile">
		<div className="Profile">
			<h1>My Profile</h1>
			{profile}
		</div>
		</section>
		</div>
	);
}

export default Profile;