import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const onIconClick = () => {
    window.open('https://www.google.com/maps/place/Kochi', '_blank');
  };

  const handleSignInClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignUpClick = role => {
    navigate(`/${role}/SignUp`);
  };

  return (
    <div className="navbar">
      <div className="left">
        <i
          className="fa-solid fa-location-crosshairs"
          onClick={onIconClick}
        ></i>
        <div className="title">
          <h1>
            <span className="span1">
              H<span className="spell">EA</span>R
              <span className="spell">T</span>
            </span>
            <span className="span2"> KOCHI </span>
          </h1>
        </div>
      </div>

      <div className="middle">
        <i className="fa-solid fa-magnifying-glass"></i>
        <Input placeholder='Choose Your Destination' className="input" type='text'/>
      </div>
      <div className="right">
        <Link className="ele" to="/">
          Home
        </Link>
        <Link className="ele" to="/Discover">
          Discover
        </Link>
        <Link className="ele" to="/Review">
          Review
        </Link>
        <Link className="ele" to="/Favorites">
          Favorites
        </Link>
        <div className="controls">
          <Button className='btn' onClick={handleSignInClick}>Sign In</Button>
          {showDropdown && (
            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={() => handleSignUpClick('user')}
              >
                User
              </button>
              <button
                className="dropdown-btn"
                onClick={() => handleSignUpClick('admin')}
              >
                Admin
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
