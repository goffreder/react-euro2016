import axios from 'axios';

const { Component } = React;

import FixtureDay from './FixtureDay';

export default class Fixtures extends Component {
    constructor() {
        super();

        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        let fixtures = {};

        this.setState({ loading: true });
        axios.get('https://rest.wyscout.com/v1/matches?filter[season]=7576&fetch=team_a,team_b')
            .then(r => {
                r.data.elements.sort((a, b) => {
                    return new Date(a.data.date) - new Date(b.data.date);
                }).forEach(f => {
                    let matchDate = new Date(f.data.date).toLocaleDateString(
                        navigator.language,
                        { weekday: 'long', month: 'long', day: 'numeric' }
                    );

                    if (!fixtures[matchDate]) {
                        fixtures[matchDate] = [];
                    }

                    fixtures[matchDate].push({
                        date: f.data.date,
                        homeTeamName: f.team_a.name,
                        awayTeamName: f.team_b.name,
                        homeTeamLogo: f.team_a.image,
                        awayTeamLogo: f.team_b.image,
                        result: {
                            goalsHomeTeam: f.status === 'Fixture' ? null : f.score_a,
                            goalsAwayTeam: f.status === 'Fixture' ? null : f.score_b
                        }
                    })
                });

                this.props.saveFixtures(fixtures);
                this.setState({ loading: false });
            }).catch(e => console.log(e));
    }

    render() {
        const fixtures = Object.keys(this.props.fixtures)
            .sort((a, b) => new Date(a) - new Date(b))
            .map(d => <FixtureDay key={d} date={d} fixtures={this.props.fixtures[d]} />);

        return (
            <div className="fixtures">
                {this.state.loading ? <div>{'Loading...'}</div> : fixtures}
            </div>
        );
    }
}
