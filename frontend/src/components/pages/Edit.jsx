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

	if (props.user) {
		name = props.user.name;
		email = props.user.email;
		age = props.user.age;
		city = props.user.city;
		about = props.user.about;
	}

	let edit;

	if(localStorage.getItem('token')){
		edit = (
			<form onSubmit={UserEdit}>
				{notice}
				<div className="inputBx">
					<input type="text" placeholder={name} name="name" 
					onChange={handleFieldChange} 
					 requried/>	
				</div>
				<div className="inputBx">
					<input type="text" placeholder="Email" name="email" 
					value={email} disabled
					/>	
				</div>
				<div className="inputBx">
					<input type="text" placeholder={age} name="age" 
					onChange={handleFieldChange} />	
				</div>
				<div className="inputBx">
					<input type="text" placeholder={city} name="city" 
					onChange={handleFieldChange} />	
				</div>
				<div className="inputBx">
					<textarea placeholder={about} name="about" 
					onChange={handleFieldChange}></textarea>	
				</div>
				<div className="inputBx">
					<input type="submit" value="Update"/>
				</div>
			</form>
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