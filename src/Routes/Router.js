import React from 'react';
import { Switch, Route } from 'react-router';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute'
import Straddle from '../Components/Straddle';
import Dashboard from '../Pages/Dashboard';
import ForgottenPassword from '../Pages/ForgottenPassword';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Welcome from '../Pages/Welcome';
import Straddle1 from '../Pages/Straddle';
import Futures from '../Components/Futures';

const Routes = () => {
    return ( 
        <>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path='/forgotten-password' component={ForgottenPassword} />
                <Route exact path='/test' component={Straddle1} />
                <PrivateRoute exact path='/straddle' component={Straddle} />
                <PrivateRoute exact path='/futures' component={Futures} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Switch>
        </>
    );
}
 
export default Routes;