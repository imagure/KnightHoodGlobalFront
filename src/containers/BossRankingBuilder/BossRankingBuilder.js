import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Ranking from '../../components/Ranking/Ranking';

import classes from './BossRanking.css';

import { addBossRow,
         readBossEntries } from '../../services/sheets';

class BossRankingBuilder extends Component {
  state = {
    loading: true,
    rankings: {}
  }

  async componentWillMount(){
    const response = await readBossEntries();
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
        <Ranking category={"B"}
                 rankings={this.state.rankings}
                 onSavePointsButton={addBossRow}/>
      </Aux>
    );
  }
}

export default BossRankingBuilder;
