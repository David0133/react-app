// import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const handleChange=(event)=>{
props.toggleColor(event.target.value);
  }
    return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} bg-body-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/TextForm">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"  href="/about">{props.student}</a>
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