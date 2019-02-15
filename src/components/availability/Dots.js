import styled from 'styled-components'

export const OnlineDot = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: green;
  min-width: 25px;
`

export const OfflineDot = styled(OnlineDot)`
  background-color: red;
`