import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import ErrorContainer from './ErrorContainer'
import Colors from '../constants/Colors'

const ErrorMessage = styled.p`
  margin-bottom: 1em;
`

const ErrorButton = styled.button`
  border: 1px solid ${Colors.Banana}; 
  background: white;
  color: black;
  font-size: 1rem;
  padding: 1rem;
`

class NetworkErrorBoundary extends Component {
    state = {
        error: false
    }

    static getDerivedStateFromError(error) {
        return {error}
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({error: false})
        }
    }

    render() {
        const {error} = this.state

        if (error && !error.status) {
            throw error
        }

        return (
            <>
                {
                    error &&
                    <ErrorContainer>
                        {
                            this.isAuthError() ?
                                <h1>Authentication Error <span role="img" aria-label="spy">🕵️‍♂️</span></h1> :
                                <h1>Network Error <span role="img" aria-label="thunder">⚡️</span>️</h1>
                        }
                        <ErrorMessage>[{error.status}] {error.message}</ErrorMessage>
                        <ErrorButton onClick={() => this.setState({error: false})}>
                            Retry
                        </ErrorButton>
                        {
                            this.isAuthError() &&
                            <ErrorButton onClick={() => this.setState({error: false})}>
                                Log out
                            </ErrorButton>
                        }
                    </ErrorContainer>

                }
                {!error && this.props.children}
            </>
        )
    }

    isAuthError() {
        return this.state.error && this.state.error.status === 403
    }
}

export default withRouter(NetworkErrorBoundary)
