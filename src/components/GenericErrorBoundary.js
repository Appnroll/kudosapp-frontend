import React, { Component } from 'react'
import ErrorContainer from './ErrorContainer'

export default class GenericErrorBoundary extends Component {
    state = {
        error: false
    }

    static getDerivedStateFromError(error) {
        return {error}
    }

    render() {
        const {error} = this.state
        if (error) {
            return (
                <ErrorContainer>
                    <h1>The application failed critically! <span role="img" aria-label="ugh!">😣</span></h1>
                </ErrorContainer>
            )
        } else {
            return this.props.children
        }
    }
}
