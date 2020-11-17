import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.css';
import logo_image from '../../assets/images/logo.png';

const logo = props => {
  return(
    <div className={classes.Logo}>
      <Link to="/">
        <img src={logo_image}/>
      </Link>
    </div>
  )
}

export default logo;
