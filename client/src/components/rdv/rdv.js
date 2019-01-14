import React from 'react';
import { Button, ListGroup, ListGroupItem, Panel, Grid, Row, Col, Thumbnail } from "react-bootstrap";
import API from '../../utils/API';
import '../../styles/home.css';




export class Rdv extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'doctors': []
    }
    this.getDoctors();
  }


  getDoctors(){
      API.getDoctors()
      .then(res => res.json())
      .then(res => this.setState({'doctors': res}));
  }
  renderDoctors(){
    return this.state.doctors.map((doctor, index) => {
      return( <ListGroupItem onClick={this.doctorRdv.bind(this, doctor.id)} key={index}>{doctor.lastName}</ListGroupItem>);
    });
  }


  doctorRdv(id){
    localStorage.setItem('doctorId', id);
      window.location = "/rdv/doctor";

  }

    render() {
        return(
            <div className="Login" >
                <h1>Choisissez un médecin</h1>



                <Panel className="homePanel" bsStyle="primary">
                    <Panel.Heading >
                      <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                      <ListGroup>
                      { this.renderDoctors()}
                      </ListGroup>
                    </Panel.Body>
                </Panel>



            </div>
        )
    }

}
