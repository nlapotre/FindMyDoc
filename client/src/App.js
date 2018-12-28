
import React, { Component } from 'react';
import {Header, Footer} from './components/navBar.js';
import API from './utils/API';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/home.js';
import { Login } from './components/login/login.js';
import { Signup } from './components/register/register.js';
import { PrivateRoute } from './components/privateRoute.js';
import {Rdv} from './components/rdv/rdv.js';
import './App.css';

class App extends Component {
        render() {
        return (
        <div className="App">
        <Header className="Header"/>

            <div className="App-content">
              <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path ="/register" component={Signup}/>
                    <PrivateRoute path='/home' component={Home} />
                    <PrivateRoute path='/rdv' component={Rdv} />
                </Switch>
              </BrowserRouter>
            </div>
            {API.isAuth() ? <Footer className="Footer"/> : "" }
        </div>
        );
    }
}
export default App;
