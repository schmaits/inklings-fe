import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Homepage from './components/homepage';
import ClubBrowse from './components/clubBrowse';
import BookBrowse from './components/bookBrowse';
import BookView from './components/bookView';
import ClubView from './components/clubView';
import NotFound from './components/notFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App hero-styling">
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route exact path="/clubs" component={ClubBrowse}/>
              <Route exact path="/books" component={BookBrowse}/>
              <Route path="/books/:bookId" component={BookView}/>
              <Route path="/clubs/:clubId" component={ClubView}/>
              <Route component={NotFound}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
