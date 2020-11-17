import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'

const toolbar = props => {
  return(
    <header className={classes.Toolbar}>

    <div className={classes.Logo}>
      <Logo />
    </div>

    <div className={classes.Links}>
      <Link to="/hall_of_fame">Hall of Fame</Link>
    </div>

    <div className={classes.Links}>
      <Link to="/arena_ranking">Ranking Arena</Link>
    </div>

    <div className={classes.Links}>
      <Link to="/boss_ranking">Ranking Boss</Link>
    </div>
  </header>)
}

export default toolbar;
