import * as React from 'react'
import withAuthorization from './withAuthorization'
import { RequestMaker } from './Request'

class CheckIn extends React.Component {

    onClick = () => {
        fetch(RequestMaker.endpoint + 'availability', {
            method: this.props.available ? 'DELETE' : 'PUT',
            headers: {
                'Authorization': `Bearer ${this.props.authorization.token}`
            }
        }).then(r => {

        })
    }

    render() {
        return <button onClick={this.onClick}> {this.props.available ? 'go home!' : 'set me as at work'}</button>
    }

}

export default withAuthorization(CheckIn)