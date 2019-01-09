import React, { Component } from 'react';
import styled from 'styled-components'
import Header, { headerHeight } from './Header'
import Colors from '../constants/Colors'
import { Switch, Route } from 'react-router-dom'
import ListOfCards from "./ListOfCards";
import Stats from "./Stats";
import Instructions from "./Instructions"
import Givers from "./Givers";
import LoginScreen from "./LoginScreen";

class Wrapper extends Component {
    render() {
        return (
            <LayoutWrapper>
                <Header/>
                <Container>
                    <Switch>
                        <Route exact path={'/'} component={LoginScreen}/>
                        <Route exact path={'/wall'} component={ListOfCards}/>
                        <Route exact path={'/stats'} component={Stats}/>
                        <Route exact path={'/stats/givers/:year/:month'} component={Givers}/>
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
   overflow: hidden;
`

const Container = styled.main`
  width: 100%;
  height: calc(100vh - ${headerHeight}px);
  overflow: scroll;
  padding: 0 20px;
  box-sizing: border-box;
`
export default Wrapper;
