const { Component } = React;

import Fixture from './Fixture';

export default class FixtureDay extends Component {
    render() {
        return (
            <table className="u-full-width">
                <thead>
                    <tr>
                        <th colSpan="7">
                            <h5>{this.props.date}</h5>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.fixtures.map((f, k) => <Fixture key={k} {...f} />)}
                </tbody>
            </table>
        );
    }
}
