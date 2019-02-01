import React, { Component } from 'react';
import styled from 'styled-components'
import Card from "./Card";
import KudosRequest from './KudosRequest'
import NetworkSpinner from './NetworkSpinner'
import LoadMoreButton from './LoadMoreButton'

class ListOfCards extends Component {
    state = {
        kudos: [],
        page: 0
    }

    addKudos = newKudos =>
        this.setState(state => ({
            kudos: [...state.kudos, ...newKudos]
        }))

    setNextPage = () =>
        this.setState(state => ({page: state.page + 1}))

    render() {
        const {kudos} = this.state
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
                    <LoadMoreButton onClick={this.setNextPage}>Load more</LoadMoreButton>
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
