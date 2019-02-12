import React from 'react'
import styled from 'styled-components'
import withNetworking from './withNetworking'
import Colors from '../constants/Colors'
import NetworkSpinner from './NetworkSpinner'

const LoadButton = styled.button`
  border: 1px solid ${Colors.Banana}; 
  background: white;
  color: black;
  font-size: 2rem;
  padding: 1rem 3rem;
`

const Container = styled.div`
  min-height: 72px;
  display: flex;
  align-items: center;
`

const LoadMoreButton = ({networking, onClick, children}) => (
    <Container>
        {networking.fetching ? <NetworkSpinner/> : <LoadButton onClick={onClick}>{children}</LoadButton>}
    </Container>
)

export default withNetworking(LoadMoreButton)
