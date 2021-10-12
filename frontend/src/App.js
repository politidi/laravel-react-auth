import React,{useState,useEffect} from 'react';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import Footer from './components/layouts/Footer';
import Login from './components/pages/Login';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import axios from 'axios';


function App() {

  const [state, setState] = useState({
    user: ''
  });

  useEffect(() => {
    //login user credentials
    axios.get('/user')
    .then((response)=>{
      setUser(response.data)
    }).catch((error)=>{
      console.log(error);
    });
  }, []);

  const setUser = (user) => {
    setState({user:user})
  }

  return(
    <Router>
      <div className='App'>
      <Header setUser={setUser}/>
      <Sidebar setUser={setUser}/>
      <Routes user={state.user} setUser={setUser}/>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
