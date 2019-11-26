import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const link = {
    width: '100px',
    padding: '10px',
    margin: '0 6px 6px',
    background: 'green',
    textDecoration: 'none',
    color: 'white',
  }

  return (
    <div className="navbar">
      <NavLink to="/" exact style={link} activeStyle={{background: 'yellow', color: 'green'}}>Home</NavLink>
      <NavLink to="/movies" exact style={link} activeStyle={{background: 'yellow', color: 'green'}}>Movies</NavLink>
      <NavLink to="/directors" exact style={link} activeStyle={{background: 'yellow', color: 'green'}}>Directors</NavLink>
      <NavLink to="/actors" exact style={link} activeStyle={{background: 'yellow', color: 'green'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
