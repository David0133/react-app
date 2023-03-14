import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const handleChange=(event)=>{
props.toggleColor(event.target.value);
  }
    return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} bg-body-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/textForm">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/about">{props.student}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <div className="colorMode">
      <button className="btn btn-outline-primary rounded-pill mx-2" value={'purple'} onClick={handleChange} style={{backgroundColor:"purple",color:"white"}}>Purple</button> 
      <button type="button" className="btn btn-outline-primary rounded-pill mx-2" value={'grey'} onClick={handleChange} style={{backgroundColor:"Grey",color:"white"}}>Grey</button>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
  <input onClick={props.toggleBar} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>    
    </div>
  </div>
  
</nav>
  )
}
Navbar.protoTypes = {title : PropTypes.string.isRequired}
Navbar.defaultProps = {
    title : 'Title goes here'
}