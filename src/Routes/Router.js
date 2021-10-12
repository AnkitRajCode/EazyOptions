import React from 'react';
import { Switch, Route } from 'react-router';
import Welcome from '../Pages/Welcome';

const Routes = () => {
    return ( 
        <>
            <Switch>
                <Route exact path="/" component={Welcome} />
            </Switch>
        </>
    );
}
 
export default Routes;