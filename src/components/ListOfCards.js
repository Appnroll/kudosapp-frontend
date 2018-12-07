import React, { Component } from 'react';
import styled from 'styled-components'
import Card from "./Card";
import { getKudoses } from '../api/KudosApi'

class ListOfCards extends Component {
    state = {
        kudoses: []
    }
    // such actions are better in didMount, as the action getKudoses may finish before component is actually mounted
    componentWillMount () {
        getKudoses()
            .then(kudoses => {
                this.setState({
                    kudoses
                })
            })
    }
    render() {
        return (
            <StyledList>
                {
                    this.state.kudoses.map((kudos, index) => <Card kudos={kudos} key={index}/>)
                }
            </StyledList>
        );
    }
}

const StyledList = styled.ul`
   max-width: 500px;
   margin: 0 auto 20px;
`
export default ListOfCards;