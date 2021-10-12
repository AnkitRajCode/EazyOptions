import React from 'react';
import { Switch, Route } from 'react-router';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute'
import Dashboard from '../Pages/Dashboard';
import ForgottenPassword from '../Pages/ForgottenPassword';
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
                <Route exact path='/forgotten-password' component={ForgottenPassword} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Switch>
        </>
    );
}
 
export default Routes;