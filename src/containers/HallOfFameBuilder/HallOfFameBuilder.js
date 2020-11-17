import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import HallOfFame from '../../components/HallOfFame/HallOfFame';

import classes from './HallOfFameBuilder.css';

import { readHallOfFame } from '../../services/sheets';

class HallOfFameBuilder extends Component {
  state = {
    loading: true,
    hall_of_fame: {}
  }

  async componentWillMount(){
    const response = await readHallOfFame();
    const hall_of_fame = {};
    for (let entry of Object.entries(response)) {
      for (let rank of entry[1]) {
        if(!hall_of_fame[rank[0]]) {
          hall_of_fame[rank[0]] = [];
        }
        hall_of_fame[rank[0]].push(rank);
      }
    }
    this.setState({hall_of_fame: hall_of_fame});
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
        <HallOfFame category={"H"}
                    hall_of_fame={this.state.hall_of_fame}/>
      </Aux>
    );
  }
}

export default HallOfFameBuilder;
