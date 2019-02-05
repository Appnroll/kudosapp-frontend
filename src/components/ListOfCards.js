import React, { Component } from 'react';
import styled from 'styled-components'
import KudoCard from "./KudoCard";
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

    shouldDisplayDate(kudo, index, list) {
        return index === 0 || kudo.createdAt.substring(0, 10) !== list[index - 1].createdAt.substring(0, 10)
    }

    render() {
        const {kudos, moreAvailable} = this.state
        return (
            <>
                <KudosRequest page={this.state.page} then={this.addKudos}/>
                <KudosList>
                    {
                        kudos.map((kudo, index, list) => (
                            <KudoCard
                                key={index}
                                {...kudo}
                                displayDate={this.shouldDisplayDate(kudo, index, list)}
                            />
                        ))
                    }
                </KudosList>
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

const KudosList = styled.ul`
   max-width: 500px;
   margin: 0 auto 20px;
`

const Controls = styled.nav`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`

export default ListOfCards
