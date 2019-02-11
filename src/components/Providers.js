import React from 'react'
import Authorization from './Authorization'
import Networking from './Networking'

export default function Providers({children}) {
    return (
        <Networking>
            <Authorization>
                {children}
            </Authorization>
        </Networking>
    )
}
