import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Home from '../../components/Home/Home';
import classes from './Home.css';

import { readGuildRow } from '../../services/sheets';

class HomeBuilder extends Component {
  state = {
    loading: true,
    guilds: {}
  }

  async componentWillMount(){
    const response = await readGuildRow();
    const guilds = response.map(guild => {
      const image_src = "https://drive.google.com/uc?export=view&id="+ guild[1];
      return {
        guild: guild[0],
        image: <div><img height={34} src={image_src}/></div>,
        guild_tag: guild[2] || "Ø"
      }
    });
    this.setState({guilds: guilds});
  }

  async componentDidUpdate(){
    if(this.state.loading) {
      this.setState({loading: false});
    }
  }

  render(){
    if (this.state.loading) {
      return(
        <Aux>
          <div className={classes.disableLogin}>
            <div className={classes.loader}></div>
          </div>
        </Aux>
      );
    }
    return(
      <Aux>
        <Home guilds={this.state.guilds}/>
      </Aux>
    );
  }
}

export default HomeBuilder;
