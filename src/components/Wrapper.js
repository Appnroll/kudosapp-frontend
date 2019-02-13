import React, { Component } from 'react';
import styled from 'styled-components'
import Header, { headerHeight } from './Header'
import Colors from '../constants/Colors'
import { Route, Switch } from 'react-router-dom'
import ListOfCards from "./ListOfCards";
import Stats from "./Stats";
import Givers from "./Givers";
import LoginScreen from "./LoginScreen";
import withAuthorizationRequired from './withAuthorizationRequired'
import NetworkErrorBoundary from './NetworkErrorBoundary'
import GenericErrorBoundary from './GenericErrorBoundary'
import Providers from './Providers'
import Logout from './Logout'

class Wrapper extends Component {
    render() {
        return (
            <GenericErrorBoundary>
                <Providers>
                    <LayoutWrapper>
                        <Header/>
                        <Container>
                            <NetworkErrorBoundary>
                                <Switch>
                                    <Route exact path="/" component={LoginScreen}/>
                                    <Route exact path="/logout" component={Logout}/>
                                    <Route exact path="/wall"
                                           component={withAuthorizationRequired(ListOfCards)}/>
                                    <Route exact path="/stats"
                                           component={withAuthorizationRequired(Stats)}/>
                                    <Route path="/stats/givers/:year?/:month?"
                                           component={withAuthorizationRequired(Givers)}/>
                                </Switch>
                            </NetworkErrorBoundary>
                        </Container>
                    </LayoutWrapper>
                </Providers>
            </GenericErrorBoundary>
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
