import React from 'react';
import { Button, ListGroup, ListGroupItem, Panel } from "react-bootstrap";
import API from '../../utils/API';


export class Home extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        items: []
      };

  }
  getDoctors(){
    API.getDoctors().then(function(data){
      console.log(data.data);
    },function(error){
        console.log(error);
        return;
    })
    }



    render() {
        return(
            <div className="Home">
                <h1>Home</h1>
                <Panel className="homePanel" bsStyle="primary">
                    <Panel.Heading >
                      <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                      <ListGroup>
                      <ListGroupItem onClick=""> <h1>Title</h1><p>not title</p> </ListGroupItem>
                        {this.getDoctors()}
                      </ListGroup>
                    </Panel.Body>
                </Panel>

            </div>
        )
    }

}
