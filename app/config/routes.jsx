import { Router, Route, hashHistory } from 'react-router';

import Main from '../components/Main';
import Fixtures from '../components/Fixtures';
import Teams from '../components/Teams';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/fixtures" component={Fixtures} />
            <Route path="/teams" component={Teams} />
        </Route>
    </Router>
);
