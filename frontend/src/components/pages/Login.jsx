import React,{useState} from 'react';
import '../../styles/Login.css';
import img_user from '../../img/user.png';
import img_lock from '../../img/lock.png';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {

	const [fields, setState] = useState({
		email: '',
		password: '',
		message: ''
	});

	const handleFieldChange = e => {
		setState({
			...fields,
			[e.target.name] : e.target.value
		})
	}

	const UserLogin = (e) => {
		e.preventDefault();
		const data={
			email:fields.email,
			password:fields.password
		}

		axios.post('/login',data)
		.then((response)=>{
			localStorage.setItem('token',response.data.token);
			setState({
				loggedIn: true
			})
			props.setUser(response.data.user);
		}).catch((error)=>{
			if(error.response.data.message.password){
				setState({
					message:error.response.data.message.email+error.response.data.message.password
				})
			}else if(error.response.data.message.email) {
				setState({
					message:error.response.data.message.email
				})
			} else {
				setState({
					message:error.response.data.message
				})
			}
		});
	}
	
	//after login redirect to profile
	if(fields.loggedIn){
		return <Redirect to={'/profile'} />
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

		<div className="Login">
		<section className="log">
		<div className="box">
			<div className="form">
				<h2>Login</h2>
				<form onSubmit={UserLogin}>
					{error}
					<div className="inputBx">
						<input tabindex="1" type="email" placeholder="Username or email" name='email' required 
						onChange={handleFieldChange}/>
						<img src={img_user} alt="" />
					</div>
					<div className="inputBx">
						<input tabindex="2" type="password" placeholder="Password" name='password' required 
						onChange={handleFieldChange}/>
						<img src={img_lock} alt="" />
					</div>
					<label  tabindex="3" className="remember"><input type="checkbox" />Remember Me</label>
					<div className="inputBx">
						<input tabindex="4" type="submit" value="Login" />
					</div>
				</form>
				<p>Forgot <Link to="/forgotPassword">password</Link></p>
				<p>Create new<Link to="/register">Account</Link></p>
			</div>
		</div>
		</section>
		</div>
	);
}

export default Login;