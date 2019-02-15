import * as React from 'react'
import withAuthorization from './withAuthorization'
import { RequestMaker } from './Request'
import styled from 'styled-components'

class CheckIn extends React.Component {
    onClick = () => {
        fetch(RequestMaker.endpoint + 'availability', {
            method: this.props.available ? 'DELETE' : 'PUT',
            headers: {
                'Authorization': `Bearer ${this.props.authorization.token}`
            }
        }).then(r => {
            // TODO trigger refreshing online/offline - or just switch current user locally
        })
    }

    render() {
        return <Button onClick={this.onClick}> {this.props.available ? 'go home!' : 'set me as at work'}</Button>
    }
}

const Button = styled.button`
  padding: 20px;
  margin: 20px;
`

export default withAuthorization(CheckIn)