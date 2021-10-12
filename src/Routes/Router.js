import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Welcome from '../Pages/Welcome';

const Routes = () => {
    return ( 
        <>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        </>
    );
}
 
export default Routes;