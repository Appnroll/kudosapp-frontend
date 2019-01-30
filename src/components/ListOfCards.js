import React, { Component } from 'react';
import styled from 'styled-components'
import Card from "./Card";
import Spinner from "./Spinner";
import KudosRequest from './KudosRequest'

class ListOfCards extends Component {
    state = {
        kudos: [],
        loading: true
    }

    render() {
        const {loading, kudos} = this.state
        return (
            <>
                <KudosRequest then={kudos => this.setState({kudos, loading: false})}/>
                <StyledList>
                    {
                        loading ? <Spinner/> :
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
export default ListOfCards;
