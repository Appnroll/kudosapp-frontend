import React, { Component } from 'react'
import styled from 'styled-components'
import Button from "./Button";


class Switch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.buttons.map(prop => prop.name)
        }
    }
    setCurrentState = (prop) => {
        this.setState({ [prop]: !this.state[prop]})
        if (this.props.oneValue) {
            for (let objProp in this.state) {
                if (this.state[objProp]) {
                    this.setState({ [objProp]: false})
                }
            }
        }
    }
    render () {
        return (
            <Row>
                {this.props.buttons.map(prop => (
                    <Button
                        active={this.state[prop.name]}
                        key={prop.name}
                        onClick={this.setCurrentState.bind(this, prop.name)}>
                        { prop.title }
                    </Button>
                ))}
            </Row>
        )
    }
}

export default Switch

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`