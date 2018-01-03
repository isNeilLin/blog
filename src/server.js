import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from './layout/Login';
import HomePage from './layout/HomePage';

const auth = {
    isAuthenticated: false
}

class Server extends Component {
    render(){
        return (<Router basename="/admin">
            <Route path="/" component={ServerHome}></Route>
        </Router>)
    }
}

const ServerHome = ()=>{
    return auth.isAuthenticated ? (<HomePage/>) : (<Login login={login}/>);
}
const login = ()=>{
    auth.isAuthenticated = true;
}

export default Server;