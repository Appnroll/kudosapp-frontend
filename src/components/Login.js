import React, { Component } from 'react'
import styled from 'styled-components'
import LoginWithSlackButton from "./LoginWithSlackButton";

class Login extends Component {
    render () {
        return (
            <Container>
                <h4>Kto tam?</h4>
                <LoginWithSlackButton/>
            </Container>
        )
    }
}

export default Login

const Container = styled.div`
    margin-top: 20px;
    h4 {
      margin-bottom: 20px;
    }
`
