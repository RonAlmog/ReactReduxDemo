import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './dashboard';
import { history } from '../store/history';
import { ConnectedNavigation } from './navigation';
import { ConnectedTaskDetail } from './taskDetail'

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation/>
                {/* <ConnectedDashboard></ConnectedDashboard> */}
                <Route exact path="/dashboard" render={()=>(<ConnectedDashboard/>)} />
                <Route exact path="/task/:id" render={({match})=>(<ConnectedTaskDetail match={match} />)} />
            </div>
        </Provider>
    </Router>
)
