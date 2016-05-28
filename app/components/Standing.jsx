const { Component } = React;

export default class Standing extends Component {
    render() {
        return (
            <tr>
                <td width="10%"><h6>{this.props.rank}</h6></td>
                <td width="10%"><img width="100%" src={this.props.thumb} /></td>
                <td width="35%" style={{
                    textAlign: 'left'
                }}><h5>{this.props.teamName}</h5></td>
                <td width="10%"><h5>{this.props.points}</h5></td>
                <td width="5%"><h6>{this.props.matchTotal}</h6></td>
                <td width="5%"><h6>{this.props.matchWon}</h6></td>
                <td width="5%"><h6>{this.props.matchDraw}</h6></td>
                <td width="5%"><h6>{this.props.matchLost}</h6></td>
                <td width="5%"><h6>{this.props.goalPro}</h6></td>
                <td width="5%"><h6>{this.props.goalAgainst}</h6></td>
                <td width="5%"><h6>{this.props.goalPro - this.props.goalAgainst}</h6></td>
            </tr>
        );
    }
}
