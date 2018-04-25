import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Hero from './components/hero';
import Homepage from './components/homepage';
import BookView from './components/bookView';
import ClubView from './components/clubView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <div>
              <Hero/>
            </div>
            <div>
              <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/books/:bookId" component={BookView}/>
                <Route path="/clubs/:clubId" component={ClubView}/>
              </Switch>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
