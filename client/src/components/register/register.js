import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import '../../styles/button.css';
import API from '../../utils/API';

export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            login: "",
            postalCode: "",
            mail : "",
            tel: "",
            password: "",
            cpassword: "",
            error: ""
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {

        if(!this.state.mail.length === 0 || this.state.password.length === 0 || this.state.password !== this.state.cpassword ){
            console.log("Erreur de saisies");
            return;
        }else{
          var _send = {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              login: this.state.login,
              password: this.state.password,
              postalCode: this.state.postalCode,
              mail: this.state.mail,
              tel: this.state.tel
          }


          API.register(_send).then(function(data){
              window.location = "/"
          },function(error){
              console.log(error);
              return;
          })
        }

    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render() {
        return(
            <div className="Login">
                <FormGroup controlId="firstName" bsSize="large">
                <ControlLabel>First Name</ControlLabel>
                <FormControl autoFocus type="text" value={this.state.firstName} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="lastName" bsSize="large">
                <ControlLabel>Last Name</ControlLabel>
                <FormControl autoFocus type="text" value={this.state.lastName} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="postalCode" bsSize="large">
                <ControlLabel>Postal Code</ControlLabel>
                <FormControl autoFocus type="text" value={this.state.postalCode} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="mail" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl autoFocus type="mail" value={this.state.mail} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="tel" bsSize="large">
                <ControlLabel>Telephone</ControlLabel>
                <FormControl autoFocus type="tel" value={this.state.tel} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="login" bsSize="large">
                <ControlLabel>Login</ControlLabel>
                <FormControl autoFocus type="text" value={this.state.login} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
                </FormGroup>
                <FormGroup controlId="cpassword" bsSize="large">
                <ControlLabel>Confirm Password</ControlLabel>
                <FormControl value={this.state.cpassword} onChange={this.handleChange} type="password"/>
                </FormGroup>
                <Button className="myBtn" onClick={this.send} block bsSize="large" bsStyle="primary" type="submit">
                Inscription
                </Button>
            </div>
        )
    }
}
