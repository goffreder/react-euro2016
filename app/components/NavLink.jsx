const { Component } = React;

export default class NavLink extends Component {
    render() {
        return (
            <a
                href="#"
                onClick={this.props.handleClick}
                activeClassName="button-primary"
                className={'button' + (this.props.active ? ' button-primary' : '')}
            >
                {this.props.children}
            </a>
        );
    }
}
