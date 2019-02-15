import React, { Component } from 'react'
import styled from 'styled-components'
import { workingPlace, parking, superPowers } from "./../constants/buttons"
import Switch from "./Switch";

class Form extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inOffice: false,
            garageTaken: false,
            haveKey: false
        }
    }

    render () {
        const { inOffice } = this.state
        return (
            <>
                <Property>
                    <h6>Gdzie jesteś?</h6>
                    <Switch oneValue buttons={workingPlace}/>
                </Property>
                { inOffice && <Property disabled>
                    <h6>Gdzie parkujesz?</h6>
                    <Switch oneValue buttons={parking}/>
                </Property> }
                <Property disabled>
                    <h6>Super moce</h6>
                    <Switch buttons={superPowers}/>
                </Property>
            </>
        )
    }
}

export default Form

const Property = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 30px 0;
  filter: grayscale(${props => props.disabled ? 100 : 0}%);
  opacity: ${props => props.disabled ? 0.2 : 1};
  h6 {
    margin-bottom: 25px;
  }
`
