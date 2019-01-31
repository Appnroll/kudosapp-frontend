import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Authorization from './components/Authorization'
import Networking from './components/Networking'

class App extends Component {
    render() {
        return (
            <Authorization>
                <Networking>
                    <Wrapper/>
                </Networking>
            </Authorization>
        );
    }
}

export default App;
