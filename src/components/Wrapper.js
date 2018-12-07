import React, { Component } from 'react';
import styled from 'styled-components'
import Header, { headerHeight } from './Header'
import Colors from '../constants/Colors'
import { Switch, Route } from 'react-router-dom'
import ListOfCards from "./ListOfCards";
import Stats from "./Stats";

class Wrapper extends Component {
    render() {
        return (
            <LayoutWrapper>
                <Header/>
                <Container>
                    <Switch>
                        <Route exact path='/wall' component={ListOfCards}/>
                        {/*<Route path='/stats' component={Stats}/>*/}
                    </Switch>
                </Container>
            </LayoutWrapper>
        );
    }
}

const LayoutWrapper = styled.div`
   background: ${Colors.Overcast};
   width: 100vw;
   height: 100vh;
`

const Container = styled.main`
  width: 100%;
  height: calc(100vh - ${headerHeight}px);

`
export default Wrapper;