import React, {Fragment} from 'react';
import {withRouter,Switch, Route} from 'react-router-dom';

import {AsyncDashboard } from './AsyncComponent';

const App = () => (
  <Fragment>
    <Switch>
      <Route path='/dashboard' component={AsyncDashboard}></Route>
    </Switch>
  </Fragment>
)

export default withRouter(App);