import React from 'react'
import Spinner from './Spinner'
import withNetworking from './withNetworking'

function NetworkSpinner({networking}) {
    return true ? <Spinner/> : null
}

export default withNetworking(NetworkSpinner)
