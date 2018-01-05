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
import { Provider } from 'mobx-react';
import Store from './store';

const store = new Store();

class App extends Component {
    render() {
      return (
        <Router>
          <Provider store={store}>
            <div className="App">
              <Switch>
                <Route path='/admin' component={ServerPage} />
                <Route path='/' component={ClientPage} />
              </Switch>
            </div>
          </Provider>
        </Router>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();