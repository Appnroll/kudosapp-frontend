import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import KudoCard from "./KudoCard"
import KudosRequest from './KudosRequest'
import LoadMoreButton from './LoadMoreButton'

class ListOfCards extends Component {
    request = createRef()

    shouldDisplayDate(kudo, index, list) {
        return index === 0 || kudo.createdAt.substring(0, 10) !== list[index - 1].createdAt.substring(0, 10)
    }

    render() {
        return (
            <KudosRequest ref={this.request}>
                {({loading, response: {kudos, hasNext}}) => {
                    return (
                        <>
                            <KudosList>
                                {
                                    kudos.map((kudo, index, list) => (
                                        <KudoCard
                                            key={index}
                                            {...kudo}
                                            displayDate={this.shouldDisplayDate(kudo, index, list)}
                                        />
                                    ))
                                }
                            </KudosList>
                            <Controls>
                                {
                                    hasNext &&
                                    <LoadMoreButton onClick={this.request.current.next}>Load more</LoadMoreButton>
                                }
                                {
                                    !hasNext && !loading && <p>No more Kudos available.</p>
                                }
                            </Controls>
                        </>
                    )
                }}
            </KudosRequest>
        )
    }
}

const KudosList = styled.ul`
   max-width: 500px;
   margin: 0 auto 20px;
`

const Controls = styled.nav`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  min-height: ;
`

export default ListOfCards
