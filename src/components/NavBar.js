import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class NavBar extends Component {
  render() {
    return (
       <nav className="nav">
         <div className="nav__logo">
      
         </div>
         <ul className="nav__menu">
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="Lists"></Link></li> */}
         </ul>
       </nav>
    );
  }
}