// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/dashboard/dashboard.js';
import { Login } from './components/login/login.js';
import { Signup } from './components/register/register.js';
import { PrivateRoute } from './components/privateRoute.js';
import './App.css';

class App extends Component {
        render() {
        return (
        <div className="App">
            <div className="App-content">
              <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path ="/register" component={Signup}/>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                </Switch>
              </BrowserRouter>
            </div>
        </div>
        );
    }
}
export default App;
