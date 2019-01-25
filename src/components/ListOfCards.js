import React, { Component } from 'react';
import styled from 'styled-components'
import Card from "./Card";
import { getKudoses } from '../api/KudosApi'
import Spinner from "./Spinner";

class ListOfCards extends Component {
    state = {
        kudoses: [],
        loading: true
    }
    componentDidMount () {
        getKudoses()
            .then(kudoses => {
                const sortedKudoses = kudoses.reverse()
                this.setState({
                    kudoses: sortedKudoses,
                    loading: false
                })
            })
    }
    render() {
        const { loading, kudoses } = this.state
        return (
            <StyledList>
                {
                    loading ? <Spinner/> :
                    kudoses.map((kudos, index) => <Card kudos={kudos} key={index}/>)
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
