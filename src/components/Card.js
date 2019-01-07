import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from '../constants/Colors'

class Card extends Component {
    isSlackUser (username) {
        return username[0] === '@'
    }
    render() {
        const { name, points, description, from } = this.props.kudos
        console.log(this.props.kudos)
        return (
            <StyledCard>
                <Row margin={'0 0 8px'}>
                    <h6>
                        <KudosTitle>KUDOS </KudosTitle>
                        for
                        <KudosMan slackUser={this.isSlackUser(name)}> {name[0] === '@' ? name.substring(1, name.length) : name}</KudosMan>
                    </h6>
                    <Avatar image={"https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png"}></Avatar>
                </Row>
                <KudosContent>
                    {description}
                </KudosContent>
                <Row margin={'15px 0 0'}>
                    <KudosAuthor>
                        by <KudosMan slackUser={this.isSlackUser(from)}>{from}</KudosMan>
                    </KudosAuthor>
                    {/*<Avatar mini image={"https://www.chaarat.com/wp-content/uploads/2017/08/placeholder-user.png"}></Avatar>*/}
                </Row>
            </StyledCard>
        );
    }
}

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
  justify-content: space-between;
  align-items: center;
  margin: ${props => props.margin};
`
const Column = styled.div`
  width: ${props => props.width};
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin};
  height: 100%;
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
`
const Avatar = styled.div`
  height: ${props => props.mini ? '20px' : '25px'};
  width: ${props => props.mini ? '20px' : '25px'};
  margin: ${props => props.mini ? '0 2.5px' : '0'}
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
`

export default Card;