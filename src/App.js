import React, { Component } from 'react';

import Hero from './components/hero';
import Homepage from './components/homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Hero/>
        </header>
          <Homepage/>
      </div>
    );
  }
}

export default App;
