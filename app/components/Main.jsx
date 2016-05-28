const { Component } = React;

import NavLink from './NavLink';
import Fixtures from './Fixtures';
import Teams from './Teams';

export default class Main extends Component {
    constructor() {
        super();

        this.state = {
            activeRoute: '',
            fixtures: [],
            teams: {}
        };
    }

    _setRoute = activeRoute => this.setState({ activeRoute });

    render() {
        let content = null;

        switch (this.state.activeRoute) {
            case 'fixtures':
                content = <Fixtures />;
                break;
            case 'teams':
                content = <Teams />;
                break;
        }

        return (
            <div>
                <h1 className="header">{'React Euro2016'}</h1>
                <div className="navi">
                    <NavLink handleClick={() => this._setRoute('fixtures')} active={this.state.activeRoute === 'fixtures'}>
                        {'Fixtures'}
                    </NavLink>
                    <NavLink handleClick={() => this._setRoute('teams')} active={this.state.activeRoute === 'teams'}>
                        {'Teams'}
                    </NavLink>
                </div>
                {content}
          </div>
        );
    }
}
