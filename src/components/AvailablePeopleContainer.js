import React, { Component } from 'react'
import styled from "styled-components"
import NetworkSpinner from './NetworkSpinner'
import withNetworking from './withNetworking'
import AvailablePeopleRequest from './AvailablePeopleRequest'
import CheckIn from './CheckIn'
import withAuthorization from './withAuthorization'

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
                                    <>
                                        <CheckIn available={response.filter(u => u.name === this.props.authorization.userName)}/>
                                        {
                                            response.map(e => <Entry>
                                                {e.name} {e.available ? <OnlineDot/> : <OfflineDot/>}
                                            </Entry>)
                                        }
                                    </>
                                </div>}
                            </>
                        )
                    }
                </AvailablePeopleRequest>

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

const Entry = styled.div`
display: flex;flex-direction: row;
`

const OnlineDot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: green;
`

const OfflineDot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: red;
`

export default withAuthorization(withNetworking(AvailablePeopleContainer))
