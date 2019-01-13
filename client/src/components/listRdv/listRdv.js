import React from 'react';
import { Button, ListGroup, ListGroupItem, Panel, Grid, Row, Col, Thumbnail } from "react-bootstrap";
import API from '../../utils/API';
import '../../styles/home.css';




export class ListRdv extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'appointements': []
    }
    this.getAppointments();
  }


  getAppointments(){
      API.getAppointments(localStorage.getItem("patientId"))
      .then(res => res.json())
      .then(res => this.setState({'appointements': res}));
  }
  renderAppointments(){
    return this.state.appointements.map((appointment, index) => {
      return( <ListGroupItem key={index}>{appointment.appDate}</ListGroupItem>);
    });
  }


    render() {
        return(
            <div className="Login" >
                <h1>Historique des rendez-vous</h1>



                <Panel className="homePanel" bsStyle="primary">
                    <Panel.Heading >
                      <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                      <ListGroup>
                      { this.renderAppointments()}
                      </ListGroup>
                    </Panel.Body>
                </Panel>



            </div>
        )
    }

}
