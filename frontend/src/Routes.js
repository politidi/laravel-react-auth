import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ForgotPassword from './components/pages/ForgotPassword';
import ResetPassword from './components/pages/ResetPassword';
import Profile from './components/pages/Profile';
import Edit from './components/pages/Edit.jsx';


const Routes = (props) => {

	

	return (
		<Switch>
        	<Route exact path="/" render={props => (
        		<Redirect to={{ pathname: '/home' }} />
        	)} /> 

        	<Route exact path='/home' component={() => <Home user={props.user}/>} />
        	<Route exact path='/profile' component={ () => <Profile user={props.user}/>} />
        	<Route exact path='/login' 
        	component={ () => <Login user={props.user} setUser={props.setUser}/>} />
        	<Route exact path='/register' 
        	component={ () => <Register user={props.user} setUser={props.setUser}/>} />        	
        	<Route exact path='/forgotPassword' component={ForgotPassword} />        	
        	<Route exact path='/resetPassword/:id' component={ResetPassword} />        	
        	<Route exact path='/edit' component={ () => <Edit user={props.user}/>} />        	

      	</Switch>
	);
}

export default Routes;


