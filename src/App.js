import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Authorization from './components/Authorization'

class App extends Component {
  render() {
    return (
        <Authorization>
          <Wrapper/>
        </Authorization>
    );
  }
}

export default App;
