import React, {useState} from 'react';
import '../../styles/Sidebar.css';
import {Link} from 'react-router-dom';

const Sidebar = (props) => {

  // const [isActive, setActive] = useState('active')

  function toggleMenu() {
      let navigation = document.querySelector('.navigation');
      let toggle = document.querySelector('.toggle');
      navigation.classList.toggle('active');
      toggle.classList.toggle('active');
  }

  const logout = () => {
    localStorage.clear();
    props.setUser(null);
  }

  return (
    <div className="Sidebar">
    <div className="navigation">
    <ul>
      <li>
        <Link to="/home">
          <span className="icon"><i className="fa fa-home"></i></span>
          <span className="title">Home</span>
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <span class="icon"><i class="fa fa-user"></i></span>
          <span class="title">Profile</span>
        </Link>
      </li>
      <li>
        <Link to="/edit">
          <span class="icon"><i class="fa fa-edit"></i></span>
          <span class="title">Edit</span>
        </Link>
      </li>
      <li>
        <Link to="#">
          <span className="icon dis"><i className="fa fa-comment"></i></span>
          <span className="title dis">Message</span>
        </Link>
      </li>
      <li>
        <Link to="#">
          <span class="icon dis"><i class="fa fa-question-circle"></i></span>
          <span class="title dis">Help</span>
        </Link>
      </li>
      <li>
        <Link to="#">
          <span className="icon dis"><i className="fa fa-cog"></i></span>
          <span className="title dis">Setting</span>
        </Link>
      </li>
      <li>
        <Link to="#">
          <span class="icon dis"><i class="fa fa-lock"></i></span>
          <span class="title dis">Password</span>
        </Link>
      </li>
      <li>
        <Link to="/" onClick={logout}>
          <span className="icon"><i className="fa fa-sign-out"></i></span>
          <span className="title">Log Out</span>
        </Link>
      </li>
    </ul>
  </div>
  <div className="toggle" onClick={toggleMenu}></div>
  </div>
  );
}

export default Sidebar;