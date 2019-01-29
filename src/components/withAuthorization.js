import Authorization from './Authorization'
import React from 'react'

export default function withAuthorization(Component) {
    return (
        () => (
            <Authorization.Consumer>
                {
                    (authorization) => <Component authorization={authorization}/>
                }
            </Authorization.Consumer>
        )
    )
}
