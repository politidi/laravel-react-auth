import React,{useState} from 'react';
import '../../styles/Login.css';
import img_user from '../../img/user.png';
import img_lock from '../../img/lock.png';
import img_mail from '../../img/mail.png';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {

	const [fields, setState] = useState({
		name:'',
		email: '',
		password: '',
		password_confirmation: '',
		message:''
	});

	const handleFieldChange = e => {
		setState({
			...fields,
			[e.target.name] : e.target.value
		})
	}

	const UserRegister= e => {

		e.preventDefault();
		const data = {
			name: fields.name,
			email: fields.email,
			password: fields.password,
			password_confirmation: fields.password_confirmation
		}

		axios.post('/register',data)
		.then((response)=>{
			localStorage.setItem('token',response.data.token);
			setState({
				loggedIn: true
			})
			props.setUser(response.data.user);
		}).catch((error)=>{
			console.log(error);
		});
	}

	//after register redirect to profile
	if(fields.loggedIn){
		return <Redirect to={'/profile'} />
	}

	//checking authorization
	if(localStorage.getItem('token')){
		return <Redirect to={'/profile'} /> 
	}

	return(
		<div className="Register">
		<section className="log">
		<div className="box">
			<div className="form">
				<h2>Registration</h2>
				<form onSubmit={UserRegister}>
					<div className="inputBx">
						<input type="text" placeholder="Fullname" name='name' 
						requierd onChange={handleFieldChange}/>
						<img src={img_user} alt="" />
					</div>
					<div className="inputBx">
						<input type="email" placeholder="Email" name='email' 
						requierd onChange={handleFieldChange}/>
						<img src={img_mail} alt="" />
					</div>
					<div className="inputBx">
						<input type="password" placeholder="Password" name='password' 
						requierd onChange={handleFieldChange}/>
						<img src={img_lock} alt="" />
					</div>
					<div className="inputBx">
						<input type="password" placeholder="Confirm" name='password_confirmation' 
						requierd onChange={handleFieldChange}/>
						<img src={img_lock} alt="" />
					</div>
					<div className="inputBx">
						<input type="submit" value="Register" />
					</div>
				</form>
				<p>I already have an <Link to="/login">Account</Link></p>
			</div>
		</div>
		</section>
		</div>
	);
}

export default Register;