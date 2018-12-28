import React from 'react';
import { Button, ListGroup, ListGroupItem, Panel, Grid, Row, Col, Thumbnail } from "react-bootstrap";
import rdv from '../../rdv.jpg';
import listRdv from '../../listRdv.jpg';
import '../../styles/home.css';




export class Home extends React.Component {

    render() {
        return(
            <div className="Home" >
                <h1>Home</h1>
        <Grid className="myGrid">
                    <Row>
                      <Col xs={6}>
                        <Thumbnail href="#" alt="171x180" src={listRdv}>
                        <h3>Voir mes rendez-vous</h3>
                        </Thumbnail>
                      </Col>
                      <Col xs={6}>
                        <Thumbnail href="/rdv" alt="171x180" src={rdv} >
                        <h3>Prendre un rendez-vous</h3>
                        </Thumbnail>
                      </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

}
