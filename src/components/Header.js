import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from "../constants/Colors";
import { Route, Link, withRouter } from "react-router-dom";
import Logo from './Logo'

export const headerHeight = 70

class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <Logo/>
                <Menu>
                    <li>
                        <Link to="/wall">Wall</Link>
                    </li>
                    <li>
                        <Link to="/stats">Statistics</Link>
                    </li>
                </Menu>
            </StyledHeader>
        );
    }
}

const StyledHeader = styled.header`
  width: 100%;
  height: ${headerHeight}px;
  background: ${Colors.White};
  border-bottom: 2px solid ${Colors.Ice}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`
const Menu = styled.ul`
  display: flex;
  li {
    margin-left: 15px;
    color: ${Colors.GlacierBlue}
  }
`
export default withRouter(Header);