const { Component } = React;

export default class Fixture extends Component {
    render() {
        const result = new Date(this.props.date) > new Date()
            ? '- : -'
            : `${this.props.result.goalsHomeTeam} : ${this.props.result.goalsHomeTeam}`;

        const locale = navigator.language;
        const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
        const dateString = new Date(this.props.date).toLocaleDateString(locale, dateOptions);
        const timeString = new Date(this.props.date).toLocaleTimeString(locale, timeOptions);

        return (
            <div className="fixture">
                <div><h4>{this.props.homeTeamName}</h4></div>
                <div>
                    <div><h6>{`${dateString} - ${timeString}`}</h6></div>
                    <div><h5>{result}</h5></div>
                </div>
                <div><h4>{this.props.awayTeamName}</h4></div>
            </div>
        );
    }
}
