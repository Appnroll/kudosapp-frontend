import React from 'react'
import Authorization from './Authorization'
import Networking from './Networking'

export default function Providers({children}) {
    return (
        <Authorization>
            <Networking>
                {children}
            </Networking>
        </Authorization>
    )
}
