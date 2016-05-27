import { Link } from 'react-router';

const { Component } = React;

import NavLink from './NavLink';

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1 className="header">{'React Euro2016'}</h1>
                <div className="navi">
                    <NavLink to="/fixtures">{'Fixtures'}</NavLink>
                    <NavLink to="/teams">{'Teams'}</NavLink>
                </div>
                {this.props.children}
          </div>
        );
    }
}
