import React from 'react';
import { Button, ListGroup, ListGroupItem, Panel, Grid, Row, Col, Thumbnail } from "react-bootstrap";
import API from '../../utils/API';

import '../../styles/home.css';




export class Home extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        doctorId: localStorage.getItem('doctorId')
      }

  }

    render() {
        return(
            <div className="RdvDoctor" >

            </div>
        )
    }

}
