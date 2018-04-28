import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Homepage from './components/homepage';
import ClubBrowse from './components/clubBrowse';
import BookView from './components/bookView';
import ClubView from './components/clubView';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App hero-styling">
            <div>
              <Navbar/>
            </div>
            <div className="section">
              <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/clubs" component={ClubBrowse}/>
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
