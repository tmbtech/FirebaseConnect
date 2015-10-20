import React from "react";

class FirebaseConnect extends React.Component {
    constructor(props, state) {
        super(props, state);
        const key = props.firebaseKey || "firebaseData";
        this.state = {
            [key]: {}
        };
    }

    static propTypes = {
        children: React.PropTypes.any.isRequired,
        url: React.PropTypes.string.isRequired,
        firebaseKey: React.PropTypes.string
    }

    render() {
        const state = this.state;
        const {children, ...props} = this.props;
        return (
            <span>
            {React.cloneElement(children, {
                ...state,
                ...props
            })}
            </span>
        );
    }
}

export default FirebaseConnect;
