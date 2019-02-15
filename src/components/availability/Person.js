import React from 'react'
import styled from 'styled-components'
import { Avatar } from '../KudoCard'
import { OfflineDot, OnlineDot } from './Dots'

const Entry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Text = styled.span`
  display: inline-block;
  margin: 0 10px;
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
`
export const Person = ({ name, available, avatar }) => (
    <Entry>
        {available ? <OnlineDot/> : <OfflineDot/>}<Avatar image={avatar.image_24}/> <Text>{name}</Text>
    </Entry>
)

