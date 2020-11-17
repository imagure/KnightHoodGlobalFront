import React, {Component} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomeBuilder from './containers/HomeBuilder/HomeBuilder';
import ArenaRankingBuilder from './containers/ArenaRankingBuilder/ArenaRankingBuilder';
import BossRankingBuilder from './containers/BossRankingBuilder/BossRankingBuilder';
import HallOfFameBuilder from './containers/HallOfFameBuilder/HallOfFameBuilder';

class Routes extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={HomeBuilder} />
            <Route exact path="/arena_ranking" component={ArenaRankingBuilder} />
            <Route exact path="/boss_ranking" component={BossRankingBuilder} />
            <Route exact path="/hall_of_fame" component={HallOfFameBuilder} />
          </Layout>
          <Route path="*" component={() => <h1>Não tem nada aqui!</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
