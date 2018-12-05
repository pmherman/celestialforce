import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap'

export default class Actors extends Component {
    render() {
        return (
            <Grid className='content'>
                <Col xs={12} md={6}>
                    <h1 className='heading'>The Stars:</h1>
                </Col>
            </Grid> 
        )
    }
}

