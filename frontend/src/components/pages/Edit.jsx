import React,{useState} from 'react';
import axios from 'axios';
import '../../styles/Home.css';

const Edit = (props) => {

	const [fields, setState] = useState({
		name: props.user.name,
		email: props.user.email,
		age: props.user.age,
		city: props.user.city,
		about: props.user.about,
		message: ''
	})

	const handleFieldChange = e => {
		setState({
			...fields,
			[e.target.name]: e.target.value
		})
	}

	const UserEdit = e => {
		e.preventDefault();
		const data = {
			name: fields.name,
			email: fields.email,
			age: fields.age,
			city: fields.city,
			about: fields.about,
		}
		axios.put('/edit', data)
		.then((response) => {
			setState({
				message: response.data.message
			})
		}).catch((error)=>{
			setState({
			})
		})
	}

	let notice;
	let name;
	let email;
	let age; 
	let city; 
	let about; 

	if(fields.message) {
		notice=(
		<div className="notice">
			{fields.message}
		</div>
		);
	}

	let edit;

	if(localStorage.getItem('token')){
		edit = (
			<div className="contactForm">
			<form onSubmit={UserEdit}>
				{notice}
				<div className="inputBx">
					<input type="text" placeholder="Enter name" name="name" 
					value={fields.name}
					onChange={handleFieldChange} 
					requried/>	
					<span>Name</span>
				</div>
				<div className="inputBx">
					<input type="text" placeholder="Email" name="email" 
					value={fields.email} disabled />
					<span>Email</span>
				</div>
				<div className="inputBx">
					<input type="text" placeholder="Enter age" name="age" 
					value={fields.age}
					onChange={handleFieldChange} />
					<span>Age</span>	
				</div>
				<div className="inputBx">
					<input type="text" placeholder="Enter city" name="city" 
					value={fields.city}
					onChange={handleFieldChange} />	
					<span>City</span>
				</div>
				<div className="inputBx">
					<textarea placeholder="Enter about you" name="about" 
					value={fields.about}
					onChange={handleFieldChange}></textarea>
					<span>About me</span>	
				</div>
				<div className="inputBx">
					<input type="submit" value="Update"/>
				</div>
			</form>
			</div>
		)
	} else {
		edit = (
			<h4>You are not authorized. Please log in</h4>
			)
	}

	return(
		<div>
		<section className="edit">
		<div className="Edit">
		<h1>Edit profile</h1>
			{edit}
		</div>
		</section>
		</div>
		);
}

export default Edit;