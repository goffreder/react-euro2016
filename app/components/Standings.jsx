import axios from 'axios';

const { Component } = React;

import StandingsGroup from './StandingsGroup';

export default class Standings extends Component {
    constructor() {
        super();

        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        let standings = {};

        this.setState({ loading: true });
        axios.get('https://rest.wyscout.com/v1/seasons/7576/ranking')
            .then(r => {
                r.data.elements.forEach(t => {
                    if (!standings[t.groupName]) {
                        standings[t.groupName] = [];
                    }

                    standings[t.groupName].push(t);
                });

                this.props.saveStandings(standings);
                this.setState({ loading: false });
            }).catch(e => console.log(e));
    }

    render() {
        const standings = Object.keys(this.props.standings)
            .sort((a, b) => a > b)
            .map(g => <StandingsGroup key={g} groupName={g} standings={this.props.standings[g]} />);

        return (
            <div className="standings">
                {this.state.loading ? <div>{'Loading...'}</div> : standings}
            </div>
        );
    }
}
