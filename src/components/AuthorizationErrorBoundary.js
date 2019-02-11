import React, { Component } from 'react'
import ErrorContainer from './ErrorContainer'

export default class AuthorizationErrorBoundary extends Component {
    state = {
        error: false
    }

    static getDerivedStateFromError(error) {
        return {error}
    }

    render() {
        const {error} = this.state
        if (error) {
            if (error.status === 403) {
                return (
                    <ErrorContainer>
                        <h1>Authentication Error <span role="img" aria-label="spy">🕵️‍♂️</span></h1>
                        <p>[{error.status}] {error.message}</p>
                    </ErrorContainer>
                )
            } else {
                throw error
            }
        } else {
            return this.props.children
        }
    }
}
