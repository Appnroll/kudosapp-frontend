import Authorization from './Authorization'
import React from 'react'

export default function withAuthorization(Component) {
    return props => (
        <Authorization.Consumer>
            {
                authorization => <Component {...props} authorization={authorization}/>
            }
        </Authorization.Consumer>
    )

}
