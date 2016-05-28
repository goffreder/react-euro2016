const { Component, PropTypes } = React;

export default class Fixture extends Component {
    static propTypes = {
        date: PropTypes.string.isRequired,
        result: PropTypes.shape({
            goalsHomeTeam: PropTypes.number,
            goalsAwayTeam: PropTypes.number,
        }).isRequired,
        homeTeamName: PropTypes.string.isRequired,
        awayTeamName: PropTypes.string.isRequired
    }

    render() {
        const scoreA = new Date(this.props.date) > new Date() ? '-' : this.props.result.goalsHomeTeam;
        const scoreB = new Date(this.props.date) > new Date() ? '-' : this.props.result.awayHomeTeam;

        const locale = navigator.language;
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
        const timeString = new Date(this.props.date).toLocaleTimeString(locale, timeOptions);

        return (
            <tr>
                <td width="10%"><img width="100%" src={this.props.homeTeamLogo} /></td>
                <td width="25%"><h4>{this.props.homeTeamName}</h4></td>
                <td width="10%"><h5>{scoreA}</h5></td>
                <td width="10%"><h6>{timeString}</h6></td>
                <td width="10%"><h5>{scoreB}</h5></td>
                <td width="25%"><h4>{this.props.awayTeamName}</h4></td>
                <td width="10%"><img width="100%" src={this.props.awayTeamLogo} /></td>
            </tr>
        );
    }
}
