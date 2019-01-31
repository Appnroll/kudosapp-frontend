import React, { Component } from 'react';
import styled from 'styled-components'
import Card from "./Card";
import KudosRequest from './KudosRequest'
import NetworkSpinner from './NetworkSpinner'

class ListOfCards extends Component {
    state = {
        kudos: [],
    }

    render() {
        const {kudos} = this.state
        return (
            <>
                <KudosRequest then={kudos => this.setState({kudos})}/>
                <NetworkSpinner/>
                <StyledList>
                    {
                        kudos.map((kudos, index) => <Card kudos={kudos} key={index}/>)
                    }
                </StyledList>
            </>
        );
    }
}

const StyledList = styled.ul`
   max-width: 500px;
   margin: 0 auto 20px;
`
export default ListOfCards
