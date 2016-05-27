import { Link } from 'react-router';

const { Component } = React;

export default class NavLink extends Component {
    render() {
        return (
            <Link
                {...this.props}
                activeClassName="button-primary"
                className="button"
            />
        );
    }
}
