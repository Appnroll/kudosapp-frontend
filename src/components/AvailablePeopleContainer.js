import React, { Component } from 'react'
import styled from 'styled-components'
import { Person } from './availability'
import AvailablePeopleRequest from './AvailablePeopleRequest'
import CheckIn from './CheckIn'
import NetworkSpinner from './NetworkSpinner'
import withAuthorization from './withAuthorization'
import withNetworking from './withNetworking'

class AvailablePeopleContainer extends Component {
    state = {
        people: [],
    }

    render() {
        return (
            <Container>
                <AvailablePeopleRequest then={people => this.setState({ people, loading: false })}>
                    {
                        ({ loading, response }) => (
                            <>
                                <NetworkSpinner/>
                                {!loading && !!response &&
                                <>
                                    {/** we need to update API; authorization should return userId or if user active ?  */}
                                    {/** JSON.stringify(response.filter(u => u.name === this.props.authorization.userId)) */}
                                    <CheckIn available={false}/>
                                    <Header>Office 🏢</Header>
                                    <PersonList>
                                        {response.filter(p => p.available).map(e => <Person {...e}/>)}
                                    </PersonList>
                                    <Header>Remote 🏡 </Header>
                                    <PersonList>
                                        {response.filter(p => !p.available).map(e => <Person {...e}/>)}
                                    </PersonList>
                                </>}
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

const Header = styled.h3`
  margin: 25px 0;
  font-size: 2rem;
`

const PersonList = styled.div`
  display: grid;
  grid-gap: 5px 16px;
  justify-content: center;
  
  grid-template-columns: repeat(2, 150px);
  
  @media screen and (min-width: 450px) {
    grid-template-columns: repeat(3, 150px);
  }
  
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(4, 150px);
  }
  
  @media screen and (min-width: 750px) {
    grid-template-columns: repeat(5, 150px);
  }
  
  @media screen and (min-width: 1050px) {
    grid-template-columns: repeat(6, 150px);
  }
`

export default withAuthorization(withNetworking(AvailablePeopleContainer))
