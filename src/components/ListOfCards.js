import React, { Component } from 'react';
import styled from 'styled-components'
import Card from "./Card";
import KudosRequest from './KudosRequest'
import NetworkSpinner from './NetworkSpinner'
import LoadMoreButton from './LoadMoreButton'

const MORE_AVAILABLE = 'more_available'
const MORE_UNAVAILABLE = 'more_unavailable'
const MORE_UNKNOWN = 'unknown'

class ListOfCards extends Component {
    state = {
        kudos: [],
        page: 0,
        moreAvailable: MORE_UNKNOWN
    }

    addKudos = ({kudos: newKudos, hasNext}) =>
        this.setState(state => ({
            kudos: [...state.kudos, ...newKudos],
            moreAvailable: hasNext ? MORE_AVAILABLE : MORE_UNAVAILABLE
        }))

    setNextPage = () =>
        this.setState(state => ({page: state.page + 1}))

    render() {
        const {kudos, moreAvailable} = this.state
        return (
            <>
                <KudosRequest page={this.state.page} then={this.addKudos}/>
                <StyledList>
                    {
                        kudos.map((kudos, index) => <Card kudos={kudos} key={index}/>)
                    }
                </StyledList>
                <Controls>
                    <NetworkSpinner/>
                    {
                        moreAvailable !== MORE_UNAVAILABLE &&
                        <LoadMoreButton onClick={this.setNextPage}>Load more</LoadMoreButton>
                    }
                    {
                        moreAvailable === MORE_UNAVAILABLE && <p>No more Kudos available.</p>
                    }
                </Controls>
            </>
        );
    }
}

const StyledList = styled.ul`
   max-width: 500px;
   margin: 0 auto 20px;
`

const Controls = styled.nav`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`

export default ListOfCards
