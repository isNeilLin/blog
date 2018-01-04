import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './layout/Header.js'
import Home from './layout/Home.js';
import Archive from './layout/Archive.js';
import Labels from './layout/Labels.js';
import About from './layout/About.js';
import ArticleContent from './layout/ArticleContent.js'
import NoMatch from './layout/404.js';

class Client extends Component {
  render() {
    return (
      <Router>
          <div >
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/archive' component={Archive}/>
                <Route path='/labels' component={Labels}/>
                <Route path='/about' component={About}/>
                <Route path="/article/:title" component={ArticleContent}/>
                <Route component={NoMatch}/>
            </Switch>
          </div>
      </Router>
    );
  }
}

export default Client;
