import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from '../constants/Colors'

class Card extends Component {
    render() {
        const { name, points, description, from } = this.props.kudos
        return (
            <StyledCard>
                <Row>
                    <h6>
                        <KudosTitle>KUDOS </KudosTitle>
                        for
                        <KudosMan> @{name}</KudosMan>
                    </h6>
                    <KudosPoints>+{points}</KudosPoints>
                </Row>
                <KudosContent>
                    {description}
                </KudosContent>
                <KudosAuthor>
                    by <KudosMan>@{from}</KudosMan>
                </KudosAuthor>
            </StyledCard>
        );
    }
}

const StyledCard = styled.li`
  width: 100%;
  background: ${Colors.White};
  box-sizing: border-box;
  border-radius: 15px;
  min-height: 50px;
  margin-top: 20px;
  padding: 20px;
  border: 2px solid ${Colors.Ice};
  h6 {
    margin-bottom: 15px;
  }
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
const KudosTitle = styled.strong`
  font-weight: bold;
  font-size: 14px;
  margin-right: 3px;
`
const KudosMan = styled.span`
  color: ${Colors.GlacierBlue}
`
const KudosPoints = styled.div`
  color: ${Colors.Banana}
`
const KudosContent = styled.p`
  font-size: 16px;
  font-weight: 300;
`
const KudosAuthor = styled.p`
  font-size: 12px;
  margin-top: 15px;
`
export default Card;