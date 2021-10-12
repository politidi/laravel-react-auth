import React from 'react';
import '../../styles/Home.css';

const Home = (props) => {

	let notice;
	let name;

	if (props.user) {
		name = props.user.name;
	}

	if(localStorage.getItem('token')){
		notice = (
		<h1>Welcome {name}</h1>
		)
	} else {
		notice = (
			<div>
			<h1>WELCOME</h1>
			<h4>Log in to start</h4>
			</div>
			)
	}

	return(
		<div>		
		<section className='home'>
		<div className='Home'>
			{notice}
		</div>
		</section>
		</div>
		);
}

export default Home;