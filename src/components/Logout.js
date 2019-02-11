import React, { Component } from 'react';
import withAuthorization from './withAuthorization'
import LogoutRequest from './LogoutRequest'

class Logout extends Component {
    render() {
        return (
            <LogoutRequest then={() => this.props.authorization.endSession()}>
                {
                    () => <p>Logging you out.</p>
                }
            </LogoutRequest>
        )
    }
}

export default withAuthorization(Logout)
