import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Request from './Request'

export default class KudosRequest extends Component {
    static propTypes = {
        page: PropTypes.number
    }

    state = {
        page: 0,
    }

    kudos = []
    storedPageIndex = -1

    next = () =>
        this.setState(state => ({page: state.page + 1}))

    handleResponse = response => {
        if (!response) {
            return {
                kudos: this.kudos,
                hasNext: false,
            }
        }

        // FIXME: Weak equality because back-end returns the page property as a string.
        if (this.storedPageIndex != response.page) {
            const newSortedKudos = response.data.sort((a, b) => {
                if (a.createdAt < b.createdAt) return 1
                else return -1
            })
            this.kudos = [...this.kudos, ...newSortedKudos]
            this.storedPageIndex = response.page
        }

        return {
            ...response,
            kudos: this.kudos
        }
    }

    render() {
        return (
            <Request
                authorized
                from='kudos'
                query={this.state}
            >
                {
                    ({response, ...rest}) =>
                        this.props.children({...rest, response: this.handleResponse(response)})
                }
            </Request>
        )
    }
}
