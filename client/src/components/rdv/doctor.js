import React from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import API from '../../utils/API';
import '../../styles/button.css';


export class Doctor extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        doctorId: localStorage.getItem('doctorId'),
        doctor: [],
        appDate: "",
        appTime: "",
        comment: ""
      }
      this.getDoctorInfos(this.state.doctorId);
      this.handleChange.bind(this);
      this.send.bind(this);
  }

getDoctorInfos(id){
  API.getDoctorInfos(id)
  .then(res => res.json())
  .then(res => this.setState({'doctor': res}));
}

send = event => {
  var _send = {
      doctorId: this.state.doctorId,
      patientId:localStorage.getItem('patientId'),
      appDate:this.state.appDate,
      appTime:this.state.appTime,
      comment:this.state.comment
  }
  var _sendToo = {
    doctorId: this.state.doctorId,
    patientId:localStorage.getItem('patientId')
  }
    API.createRelation(_sendToo);
    API.createAppointment(_send).then(function(data){
      if(data.status === 201){
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
            <div className="Login" >
              <h1>{this.state.doctor.lastName} {this.state.doctor.firstName}</h1>
              <h2>{this.state.doctor.specialty}</h2>

                    <FormGroup controlId="appDate" bsSize="large">
                      <ControlLabel> Date </ControlLabel>
                      <FormControl autoFocus type="text" value={this.state.appDate} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="appTime" bsSize="large">
                      <ControlLabel>Heure</ControlLabel>
                      <FormControl value={this.state.appTime} onChange={this.handleChange} type="text"/>
                    </FormGroup>
                    <FormGroup controlId="comment" bsSize="large">
                      <ControlLabel>Motif</ControlLabel>
                      <FormControl value={this.state.comment} onChange={this.handleChange} type="text"/>
                    </FormGroup>
                    <Button className="myBtn"
                    onClick={this.send}
                    block
                    bsSize="large"
                    type="submit"
                    bsStyle="primary"
                    >
                    Confirmer rendez-vous
                    </Button>

            </div>
        )
    }

}
