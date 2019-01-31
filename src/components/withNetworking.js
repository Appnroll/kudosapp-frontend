import Networking from './Networking'
import React from 'react'

export default function withNetworking(Component) {
    return props => (
        <Networking.Consumer>
            {
                networking => <Component {...props} networking={networking}/>
            }
        </Networking.Consumer>
    )
}
