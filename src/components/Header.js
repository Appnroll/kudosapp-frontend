import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from "../constants/Colors";

export const headerHeight = 70

class Header extends Component {
    render() {
        return (
            <StyledHeader>

            </StyledHeader>
        );
    }
}

const StyledHeader = styled.header`
  width: 100%;
  height: ${headerHeight}px;
  background: ${Colors.White};
  border-bottom: 2px solid ${Colors.Ice}
`
export default Header;