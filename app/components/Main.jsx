import { Link } from 'react-router';

const { Component } = React;

import NavLink from './NavLink';

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>{'React Euro2016'}</h1>
                <ul role="nav">
                    <li>
                        <NavLink to="/fixtures">{'Fixtures'}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/teams">{'Teams'}</NavLink>
                    </li>
                </ul>

                {this.props.children}
          </div>
        );
    }
}
