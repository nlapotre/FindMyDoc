import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import '../../styles/button.css';
import API from '../../utils/API';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login : "",
            password: ""
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {
        if(this.state.login.length === 0){
            return;
        }
        if(this.state.password.length === 0){
            return;
        }
        API.login(this.state.login, this.state.password).then(function(data){
          if(data.status === 200){
            localStorage.setItem('token', data.data.token);
            window.location = "/home"
          }

        },function(error){
            console.log(error);

            return;
        })
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render() {
        return(
          <div className="Login">
                <FormGroup controlId="login" bsSize="large">
                <ControlLabel> Login </ControlLabel>
                <FormControl autoFocus type="login" value={this.state.login} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
                </FormGroup>
                <Button className="myBtn"
                onClick={this.send}
                block
                bsSize="large"
                type="submit"
                bsStyle="primary"
                >
                Connexion
                </Button>

            </div>
        )
    }
}
