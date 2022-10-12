import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
const Navbar=()=> {
  
   

    
    return (
      
      <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <Link className='navbar-brand  ' to="/">NewsHub</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item  hovercl ">
            <Link className="nav-link hovercl" to="/">Business<span className="sr-only"></span></Link>
          </li>
          <li className="nav-item  hovercl">
            <Link className="nav-link hovercl" to="/sports">Sports</Link>
          </li>
          <li className="nav-item  hovercl">
            <Link className="nav-link hovercl" to="/entertainment">Entertainment</Link>
          </li>
          <li className="nav-item  hovercl">
            <Link className="nav-link hovercl" to="/general">General</Link>
          </li>
          <li className="nav-item  hovercl">
            <Link className="nav-link hovercl" to="/health">Health</Link>
          </li>
          <li className="nav-item  hovercl">
            <Link className="nav-link hovercl" to="/technology">Technology</Link>
          </li>
          <li className="nav-item  hovercl">
            <Link className="nav-link hovercl" to="/science">Science</Link>
          </li>
          
          
        </ul>
        
      </div>
    </nav>
      </div>
    )
  
}

export default Navbar
