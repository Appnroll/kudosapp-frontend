import React from 'react';
import styled from 'styled-components'
import withNetworking from './withNetworking'
import Colors from '../constants/Colors'

const LoadButton = styled.button`
  border: 1px solid ${Colors.Banana}; 
  background: white;
  color: black;
  font-size: 2rem;
  padding: 1rem 3rem;
`

function LoadMoreButton({networking, onClick, children}) {
    return networking.fetching ? null : <LoadButton onClick={onClick}>{children}</LoadButton>
}

export default withNetworking(LoadMoreButton)
