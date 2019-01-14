import React from 'react';
import { Button, ListGroup, ListGroupItem, Panel, Grid, Row, Col, Thumbnail } from "react-bootstrap";
import API from '../../utils/API';
import '../../styles/home.css';




export class ListRdv extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'appointments': [],
      'doctors': []
    }
    var patientId =localStorage.getItem("patientId");
    this.getAppointments(patientId);
    this.getDoctors()
  }


  getAppointments(patientId){
      API.getAppointments(patientId)
      .then(res => res.json())
      .then(res => this.setState({'appointments': res}));
  }
  renderAppointments(){
    return this.state.appointments.map((appointment, index) => {
      return( <ListGroupItem key={index}><p>Rendez-vous le : <strong>{appointment.appDate}</strong> à <strong>{appointment.appTime}h</strong> avec le docteur <strong>{this.getDoctorName(appointment.doctorId)}</strong></p> </ListGroupItem>);
    });
  }
  getDoctors(){
    API.getDoctors()
    .then(res => res.json())
    .then(res => this.setState({'doctors': res}));
  }
  getDoctorName(doctorId){
    var doctorName;
    this.state.doctors.forEach((doctor, index) => {
      if(doctor.id === doctorId){
        doctorName = doctor.lastName;
      }
    });
    return doctorName;
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
