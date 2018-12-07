import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from '../constants/Colors'

const withSign = (number) => {
    const sg = Math.sign(number)
    let sgTxt = ''
    if (sg === 1) {
        sgTxt = '+'
    } else if (sg === -1) {
        sgTxt = '-'
    }
    return `${sgTxt}${number}`
}

class Card extends Component {
    isSlackUser (username) {
        return username[0] === '@'
    }
    render() {
        const { name, points, description, from } = this.props.kudos
        return (
            <StyledCard>
                <Row>
                    <h6>
                        <KudosTitle>KUDOS </KudosTitle>
                        for
                        <KudosMan slackUser={this.isSlackUser(name)}> {name}</KudosMan>
                    </h6>
                    <KudosPoints>
                        {withSign(points)}
                    </KudosPoints>
                </Row>
                <KudosContent>
                    {description}
                </KudosContent>
                <KudosAuthor>
                    by <KudosMan slackUser={this.isSlackUser(from)}>{from}</KudosMan>
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
    margin-bottom: 10px;
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
  color: ${props => props.slackUser ? Colors.GlacierBlue : Colors.WarmGray}
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
  margin-top: 20px;
`
export default Card;