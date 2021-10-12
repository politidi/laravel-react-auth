import React,{useState} from 'react';
import '../../styles/Login.css';
import img_lock from '../../img/lock.png';
import img_user from '../../img/user.png';
import img_pin from '../../img/pin.png';
import {Link} from 'react-router-dom';
import axios from 'axios';


const ResetPassword = () => {

	const [fields, setState] = useState({
		token: '',
		email: '',
		password: '',
		password_confirmation: '',
		message: ''
	})

	const handleFieldChange = (e) => {
		setState({
			...fields,
			[e.target.name]: e.target.value
		})
	}

	const UserReset = (e) => {
		e.preventDefault();
		const data = {
			token: fields.token,
			email: fields.email,
			password: fields.password,
			password_confirmation: fields.password_confirmation
		}
		axios.post('/resetPassword', data)
		.then((response) => {
			setState({
				message:response.data.message
			})
			document.getElementById('formSubmit').reset();
		}).catch((error)=>{
			setState({
				message:error.response.data.message
			})
		}); 
	}

	let error='';
	if(fields.message){
		error=(
		<div className="error">
			{fields.message}
		</div>
			);
	}

	return(
		<div className="ResetPassword">
		<section className="log">
		<div className="box">
			<div className="form">
				<h2>Reset Password</h2>
				<form onSubmit={UserReset} id='formSubmit'>
					{error}
					<div className="inputBx">
						<input type="text" placeholder="PIN Code" 
						name='token' onChange={handleFieldChange} required/>
						<img src={img_pin} alt="" />
					</div>
					<div className="inputBx">
						<input type="email" placeholder="Username or email" 
						name='email' onChange={handleFieldChange} required/>
						<img src={img_user} alt="" />
					</div>
					<div className="inputBx">
						<input type="password" placeholder="New Password" 
						name='password' onChange={handleFieldChange} required/>
						<img src={img_lock} alt="" />
					</div>
					<div className="inputBx">
						<input type="password" placeholder="Confirm" required 
						name='password_confirmation' onChange={handleFieldChange}/>
						<img src={img_lock} alt="" />
					</div>
					<div className="inputBx">
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		</div>
		</section>
		</div>
	);
}

export default ResetPassword;