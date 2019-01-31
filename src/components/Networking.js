import React, { Component, createContext } from 'react';

const NetworkingContext = createContext(null)

export default class Networking extends Component {
    static Consumer = NetworkingContext.Consumer

    increaseFetchingCount = () =>
        this.setState(({context}) => ({
            context: {
                ...context,
                fetching: true,
                count: context.count + 1
            }
        }))

    decreaseFetchingCount = () =>
        this.setState(({context}) => {
            const count = Math.max(context.count - 1, 0)
            return ({
                context: {
                    ...context,
                    fetching: Boolean(count),
                    count,
                }
            })
        })

    state = {
        context: {
            fetching: false,
            count: 0,
            initiate: this.increaseFetchingCount,
            end: this.decreaseFetchingCount
        }
    }

    render() {
        return (
            <NetworkingContext.Provider value={this.state.context}>
                {this.props.children}
            </NetworkingContext.Provider>
        )
    }
}
