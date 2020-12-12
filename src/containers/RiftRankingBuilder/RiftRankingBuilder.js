import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Ranking from '../../components/Ranking/Ranking';

import { addRiftRow,
         readRiftEntries } from '../../services/sheets';

class RiftRankingBuilder extends Component {
  state = {
    loading: true,
    rankings: {}
  }

  async componentWillMount(){
    const response = await readRiftEntries();
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
        <Ranking category={"R"}
                 rankings={this.state.rankings}
                 onSavePointsButton={addRiftRow}/>
      </Aux>
    );
  }
}

export default RiftRankingBuilder;
