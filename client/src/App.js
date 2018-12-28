
import React, { Component } from 'react';
import {Header, Footer} from './components/navBar.js';
import API from './utils/API';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/home.js';
import { Login } from './components/login/login.js';
import { Signup } from './components/register/register.js';
import { PrivateRoute } from './components/privateRoute.js';
import {Rdv} from './components/rdv/rdv.js';
import {Doctor} from './components/rdv/doctor.js';
import  {ListRdv} from './components/listRdv/listRdv';
import './App.css';

class App extends Component {
        render() {
        return (
        <div className="App">
        <Header className="Header"/>

            <div className="App-content">
              <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path ="/register" component={Signup}/>
                    <PrivateRoute path='/rdv/doctor' component={Doctor}/>
                    <PrivateRoute path='/rdv' component={Rdv} />
                    <PrivateRoute path='/listRdv' component={ListRdv}/>
                    <PrivateRoute path='/' component={Home} />

                </Switch>
              </BrowserRouter>
            </div>
            {API.isAuth() ? <Footer className="Footer"/> : "" }
        </div>
        );
    }
}
export default App;
