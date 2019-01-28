import React, { Component } from 'react';
import LoginWithSlackButton from "./LoginWithSlackButton";
import styled from 'styled-components'
import Colors from "../constants/Colors";
import Instructions from "../components/Instructions";

class LoginScreen extends Component {
    render () {
        return (
            <Container>
                <WelcomeText>Kudos for coming!</WelcomeText>
                <IntroText>
                  This app helps to show our thankfulness.
                </IntroText>
                <LoginWithSlackButton/>
                <Description>We&#39;re happy you're here! <span role="img" aria-label="Hug emoji">🤗</span></Description>
                <Instructions/>
            </Container>
        )
    }
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.4;
`

const WelcomeText = styled.h1`
  font-size: 3rem;
  margin: 1rem;
  color: ${Colors.GlacierBlue};
`

const IntroText = styled.h2`
  max-width: 600px;
  font-size: 1rem;
  margin-bottom: 2rem
`

const Description = styled.p`
  margin-top: 2em;
  color: ${Colors.WarmGray}
`

export default LoginScreen
