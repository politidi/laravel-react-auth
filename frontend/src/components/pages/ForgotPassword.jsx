import React,{useState} from 'react';
import '../../styles/Login.css';
import img_user from '../../img/user.png';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';


const ForgotPassword = () => {

	const [fields, setState] = useState({
		email: '',
		message: ''
	})

	const handleFieldChange = e => {
		setState({
			...fields,
			[e.target.name]: e.target.value
		})
	}

	const UserForgot = (e) => {
		e.preventDefault();
		const data = {
			email: fields.email
		}
		axios.post('/forgotPassword', data)
		.then((response) => {
			setState({
				message:response.data.message
			})
			document.getElementById('forgotForm').reset();
		}).catch((error)=>{
			setState({
				message:error.response.data.message
			})
		}); 

	}

	//checking authorization
	if(localStorage.getItem('token')){
		return <Redirect to={'/profile'} /> 
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
		<div className="ForgotPassword">
		<section className="log">
		<div className="box">
			<div className="form">
				<h2>Forgot Password</h2>
				<form onSubmit={UserForgot} id="forgotForm">
					{error}
					<div className="inputBx">
						<input type="email" placeholder="Username or email" 
						name='email' onChange={handleFieldChange}/>
						<img src={img_user} alt="" />
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

export default ForgotPassword;