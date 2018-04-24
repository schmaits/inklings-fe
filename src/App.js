import React, { Component } from 'react';

import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
      </div>
    );
  }
}

export default App;
