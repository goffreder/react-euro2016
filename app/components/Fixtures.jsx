const { Component } = React;

import Fixture from './Fixture';

export default class Fixtures extends Component {
    constructor() {
        super();

        this.state = {
            loading: false
        };
    }

    render() {
        return (
            <div classNames="fixtures">
                {this.props.fixtures.map((f, k) => <Fixture key={k} {...f} />)}
            </div>
        );
    }
}
