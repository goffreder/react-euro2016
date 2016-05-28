const { Component } = React;

import Standing from './Standing';

export default class StandingsGroup extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.groupName}</h4>
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th></th>
                            <th colSpan="2" style={{
                                textAlign: 'left'
                            }}><h5>{'Team'}</h5></th>
                            <th><h5>{'Pts'}</h5></th>
                            <th><h5>{'M'}</h5></th>
                            <th><h5>{'W'}</h5></th>
                            <th><h5>{'D'}</h5></th>
                            <th><h5>{'L'}</h5></th>
                            <th><h5>{'GF'}</h5></th>
                            <th><h5>{'GA'}</h5></th>
                            <th><h5>{'GD'}</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.standings.map((t, k) => <Standing key={k} {...t} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}
