import React from 'react';
import styled, { keyframes } from "styled-components";

function Spinner (props) {
    return <SpinnerContainer>
        <Rotate>
            <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="white">
                    <circle cx="57.5" cy="102.5" r="7.5"/>
                    <circle cx="37" cy="101" r="6"/>
                    <circle cx="96" cy="43" r="12"/>
                    <circle cx="95" cy="73" r="11"/>
                    <circle cx="79" cy="94" r="9"/>
                </g>
            </svg>
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
   svg {
    height: 40px;
   }
`

export default Spinner;