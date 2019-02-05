import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Colors from '../constants/Colors'

export default class KudosDateHeading extends Component {
    static propTypes = {
        date: PropTypes.string.isRequired
    }

    displayDate() {
        const date = new Date(this.props.date)
        return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
    }

    render() {
        return (
            <Container>
                {this.displayDate()}
            </Container>
        )
    }
}

const Container = styled.div`
  color: ${Colors.WarmGray}
  border-bottom: 1px solid;
  
  @media (min-width: 750px) {
      position: absolute;
      right: calc(100% + 10px);
      top: -1rem;
      width: 100px;
  }
`
