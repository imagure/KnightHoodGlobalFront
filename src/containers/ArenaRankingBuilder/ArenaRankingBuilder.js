import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Ranking from '../../components/Ranking/Ranking';

import classes from './ArenaRanking.css';

import { addArenaRow,
         readArenaEntries } from '../../services/sheets';

class ArenaRankingBuilder extends Component {
  state = {
    loading: true,
    rankings: {}
  }

  async componentWillMount(){
    const response = await readArenaEntries();
    this.setState({rankings: response});
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
        <Ranking category={"A"}
                 rankings={this.state.rankings}
                 onSavePointsButton={addArenaRow}/>
      </Aux>
    );
  }
}

export default ArenaRankingBuilder;
