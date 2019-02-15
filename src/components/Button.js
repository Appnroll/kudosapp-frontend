import React, { Component } from 'react'
import styled from 'styled-components'

class Button extends Component {
    render () {
        return (
            <StyledButton active={this.props.active} onClick={this.props.onClick} className={this.props.className}>
                <div>{ this.props.children }</div>
            </StyledButton>
        )
    }
}

export default Button

const StyledButton = styled.button`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  color: white;
  background-color: ${props => props.active ? 'forestgreen' : '#aaa'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 0 0;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  > div {
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
  }
`
