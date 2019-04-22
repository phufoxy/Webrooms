import React from 'react';
import { HomePage } from '../components/pages/home';
import { HomePage as HomeAdminPage} from '../components/pages/admin';
import {ProfilePage as ProfilePage} from '../components/pages/admin';
import {TablePage as TablePage} from '../components/pages/admin';
import { Route, Switch } from 'react-router-dom';
const Routes = () => (
    <Switch>
        <Route path="/" exact={true} component={HomePage}></Route>
        <Route path="/admin/" exact={true} component={HomeAdminPage}></Route>
        <Route path="/admin/profile/" exact={true} component={ProfilePage}></Route>
        <Route path="/admin/table/" exact={true} component={TablePage}></Route>
    </Switch>
);
export default Routes;