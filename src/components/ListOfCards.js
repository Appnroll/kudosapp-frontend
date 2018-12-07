import React, { Component } from 'react';
import styled from 'styled-components'
import { kudosList } from "../constants/Mocks";
import Card from "./Card";
import { getKudoses } from '../api/KudosApi'

class ListOfCards extends Component {
    state = {
        kudoses: []
    }
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