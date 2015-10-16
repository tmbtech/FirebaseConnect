import React from "react";

class FirebaseConnect extends React.Component {
    state = {
        firebase: {}
    }

    static propTypes = {
        children: React.PropTypes.any.isRequired
    }

    render() {
        const state = this.state;
        const {children, ...props} = this.props;
        return (
            <span>
            {React.cloneElement(this.props.children, {
                ...state,
                ...props
            })}
            </span>
        );
    }
}

export default FirebaseConnect;
