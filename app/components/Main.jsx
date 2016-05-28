const { Component } = React;

import NavLink from './NavLink';
import Fixtures from './Fixtures';
import Teams from './Teams';

const testFixtures = [JSON.parse('{"_links":{"self":{"href":"http://api.football-data.org/v1/fixtures/149855"},"soccerseason":{"href":"http://api.football-data.org/v1/soccerseasons/424"},"homeTeam":{"href":"http://api.football-data.org/v1/teams/773"},"awayTeam":{"href":"http://api.football-data.org/v1/teams/811"}},"date":"2016-06-10T19:00:00Z","status":"TIMED","matchday":1,"homeTeamName":"France","awayTeamName":"Romania","result":{"goalsHomeTeam":null,"goalsAwayTeam":null}}')];

export default class Main extends Component {
    constructor() {
        super();

        this.state = {
            activeRoute: '',
            fixtures: testFixtures,
            teams: {}
        };
    }

    _setRoute = activeRoute => this.setState({ activeRoute });

    render() {
        let content = null;

        switch (this.state.activeRoute) {
            case 'fixtures':
                content = <Fixtures fixtures={this.state.fixtures}/>;
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
