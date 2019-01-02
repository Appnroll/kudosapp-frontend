import React from 'react';
import SpinnerImage from '../assets/spinner.svg'
import styled, { keyframes } from "styled-components";

function Spinner (props) {
    return <SpinnerContainer>
        <Rotate>
            <img src={SpinnerImage} alt={'Loading...'}/>
        </Rotate>
    </SpinnerContainer>
}

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const Rotate = styled.div`
  animation: ${rotate} 1s linear infinite;
`;


const SpinnerContainer = styled.ul`
   text-align: center;
   margin-top: 10vh;
   img {
    height: 40px;
   }
`

export default Spinner;