import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class KudosDateHeading extends Component {
    static propTypes = {
        date: PropTypes.string.isRequired
    }

    displayDate() {
        const date = new Date(this.props.date)
        return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDay()}`
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
  position: absolute;
  right: calc(100% + 10px);
  top: -1rem;
  border-bottom: 1px solid black;
  width: 100px;
`
