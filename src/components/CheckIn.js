import * as React from 'react'
import withAuthorization from './withAuthorization'

class CheckIn extends React.Component {

    onClick = () => {

    }

    render() {
        return <button onClick={this.onClick}>I AM THERE</button>
    }

}

export default withAuthorization(CheckIn)