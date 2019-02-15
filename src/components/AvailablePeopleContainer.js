import React, { Component } from 'react'
import styled from "styled-components"
import NetworkSpinner from './NetworkSpinner'
import withNetworking from './withNetworking'
import AvailablePeopleRequest from './AvailablePeopleRequest'
import CheckIn from './CheckIn'

class AvailablePeopleContainer extends Component {
    state = {
        people: [],
    }

    render() {
        return (
            <Container>
                <AvailablePeopleRequest then={people => this.setState({people, loading: false})}>
                    {
                        ({loading, response}) => (
                            <>
                                <NetworkSpinner/>
                                {!loading && !!response && <div>
                                    {
                                        response.map(e => <div>
                                            {e.name} {e.available ? "I AM THERE" : 'out'}
                                        </div>)
                                    }
                                </div>}
                            </>
                        )
                    }
                </AvailablePeopleRequest>

                <CheckIn/>
            </Container>
        )
    }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1150px;
  margin: 0 auto;
`

export default withNetworking(AvailablePeopleContainer)
