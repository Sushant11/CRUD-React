import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';

import DashboardContainer from './DashboardContainer'

const Dashboard = ({match}) => (
    <Fragment>
        <Switch>
            <Route exact path = {'${match.url'} component = {DashboardContainer}></Route>
        </Switch>
    </Fragment>
);

export default Dashboard;