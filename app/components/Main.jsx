const { Component } = React;

import NavLink from './NavLink';
import Fixtures from './Fixtures';
import Standings from './Standings';

export default class Main extends Component {
    constructor() {
        super();

        this.state = {
            activeRoute: '',
            fixtures: {},
            standings: {}
        };
    }

    _saveFixtures = fixtures => this.setState({ fixtures });

    _saveStandings = standings => this.setState({ standings });

    _setRoute = activeRoute => this.setState({ activeRoute });

    render() {
        let content = null;

        switch (this.state.activeRoute) {
            case 'fixtures':
                content = <Fixtures saveFixtures={this._saveFixtures} fixtures={this.state.fixtures}/>;
                break;
            case 'standings':
                content = <Standings saveStandings={this._saveStandings} standings={this.state.standings}/>;
                break;
        }

        return (
            <div>
                <h1 className="header">{'React Euro2016'}</h1>
                <div className="navi">
                    <NavLink handleClick={() => this._setRoute('fixtures')} active={this.state.activeRoute === 'fixtures'}>
                        {'Fixtures'}
                    </NavLink>
                    <NavLink handleClick={() => this._setRoute('standings')} active={this.state.activeRoute === 'standings'}>
                        {'Standings'}
                    </NavLink>
                </div>
                {content}
          </div>
        );
    }
}
