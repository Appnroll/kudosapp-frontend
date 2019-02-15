import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from '../constants/Colors'

import placeholder from '../assets/user-placeholder.png'
import KudosDateHeading from './KudosDateHeading'

class KudoCard extends Component {
    render() {
        const {givenTo, description, from, displayDate, createdAt} = this.props
        return (
            <Container spaced={displayDate}>
                {
                    displayDate && <KudosDateHeading date={createdAt}/>
                }
                <StyledCard>
                    <Row>
                        <KudosCreator>
                            <KudosTitle>KUDOS</KudosTitle>
                            {' '}for
                            {givenTo.map((el, index) => {
                                return (<KudosMan key={index}> {el.name} </KudosMan>)
                            })}
                        </KudosCreator>
                        {givenTo.map((el, index) => {
                            return (<Avatar image={el.avatar ? el.avatar.image_24 : placeholder} key={index}></Avatar>)
                        })}

                    </Row>
                    <KudosContent>
                        {description}
                    </KudosContent>
                    <Row>
                        <KudosAuthor>
                            by <KudosMan>{from.name}</KudosMan>
                        </KudosAuthor>
                        <MiniAvatar image={from.avatar.image_24 ? from.avatar.image_24 : placeholder}></MiniAvatar>
                    </Row>
                </StyledCard>
            </Container>
        );
    }
}

const Container = styled.div`
  position: relative;
  margin-top: ${props => props.spaced ? '3rem' : 0};
`

const KudosCreator = styled.h6`
  flex-grow: 2
`

const StyledCard = styled.li`
  width: 100%;
  background: ${Colors.White};
  box-sizing: border-box;
  border-radius: 10px;
  min-height: 50px;
  margin-top: 20px;
  padding: 20px;
`
const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const KudosTitle = styled.strong`
  font-weight: bold;
  font-size: 14px;
  margin-right: 3px;
`
const KudosMan = styled.span`
  color: ${Colors.GlacierBlue}
`
const KudosContent = styled.p`
  font-size: 16px;
  line-height: 1.4em;
  font-weight: 300;
  margin: 5px 0 12px;
`
const KudosAuthor = styled.p`
  font-size: 12px;
`
export const Avatar = styled.div`
  min-width: 25px;
  height: 25px;
  width: 25px;
  margin: 0;
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
`
const MiniAvatar = styled(Avatar)`
  height: 20px;
  width: 20px;
  margin: 0 2.5px;
  border-radius: 50%;
`

export default KudoCard;
