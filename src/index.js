import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ClientPage from './client';
import ServerPage from './server';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render() {
      return (
        <Router>
          <div className="App">
            <Switch>
              <Route path='/admin' component={ServerPage} />
              <Route path='/' component={ClientPage} />
            </Switch>
          </div>
        </Router>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();