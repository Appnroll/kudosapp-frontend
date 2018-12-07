import React, { Component } from 'react';
import styled from 'styled-components'
import { kudosList } from "../constants/Mocks";
import Card from "./Card";

class ListOfCards extends Component {
    render() {
        return (
            <StyledList>
                {kudosList.map((kudos, index) => <Card kudos={kudos} key={index}/>)}
            </StyledList>
        );
    }
}

const StyledList = styled.ul`
   max-width: 500px;
   margin: auto;
`
export default ListOfCards;