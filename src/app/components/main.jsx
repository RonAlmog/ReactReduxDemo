import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './dashboard';
import { ConnectedLogin } from './login';
import { history } from '../store/history';
import { ConnectedNavigation } from './navigation';
import { ConnectedTaskDetail } from './taskDetail'
import { Redirect } from 'react-router';

const RouteGuard = Component=>({match})=>{
    console.info('route guatd:', match);
    if(!store.getState().session.authenticated){
        return <Redirect to="/"/>
    } else {
        return<Component match={match}/>
    }
    

}

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation/>
                <Route exact path="/" component={ConnectedLogin} />

                <Route exact path="/dashboard" 
                    render={RouteGuard(ConnectedDashboard)} />
                <Route exact path="/task/:id" 
                    render={RouteGuard(ConnectedTaskDetail)} />
            </div>
        </Provider>
    </Router>
)
