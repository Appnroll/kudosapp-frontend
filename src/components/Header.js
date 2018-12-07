import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from "../constants/Colors";
import { NavLink, withRouter } from "react-router-dom";
import Logo from './Logo'

export const headerHeight = 70

class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <Title>
                    <Logo/>
                    KUDOS<span>ME</span>
                </Title>
                <Menu>
                    <li>
                        <NavLink to="/wall" activeStyle={{ color: Colors.Banana }}>
                            Wall
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" activeStyle={{ color: Colors.Banana }}>
                            Statistics
                        </NavLink>
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
    font-size: 12px;
    margin-left: 25px;
    color: ${Colors.WarmGray}
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 25px;
  span {
    color: ${Colors.Banana}
  }
`
export default withRouter(Header);