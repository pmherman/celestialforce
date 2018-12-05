import React, { Component } from 'react';
import { Grid, Col, Row, Image, ListGroup, Thumbnail } from 'react-bootstrap';
import './Actors.css';
import pictures from '../../images';

export default class Actors extends Component {
    render() {
        return (
            <Grid className='content'>
                <Row>
                    <Col xs={12} md={12}>
                        <h1 className='heading'>The Stars:</h1>
                    </Col>
                </Row>
                <Row>
                    <ListGroup>
                    <Col xs={12} lg={4}>
                    <Thumbnail className='hero' src='https://i.ytimg.com/vi/gQz-RaBStNQ/hqdefault.jpg' alt='Red Hero'>
                        <h3>Red Guardian</h3>
                    </Thumbnail>
                    <Thumbnail className='hero'  src='http://news.tokunation.com/wp-content/uploads/sites/5/2017/05/Shishiranger.jpg' alt='Green Hero'>
                        <h3>Green Guardian</h3>
                    </Thumbnail>
                    </Col>
                    <Col xs={12} lg={4}>
                        <Thumbnail className='hero'  src='https://vignette.wikia.nocookie.net/powerrangers/images/a/a2/TenmaRanger.jpg/revision/latest?cb=20110122000203' alt='Blue Hero'>
                            <h3>Blue Guardian</h3>
                        </Thumbnail>
                    </Col>
                    <Col xs={12} lg={4}>
                        <Thumbnail className='hero'  src='https://vignette.wikia.nocookie.net/powerrangers/images/1/1f/DairaYellow.jpg/revision/latest?cb=20110503193534' alt='Yellow Hero'>
                            <h3>Yellow Guardian</h3>
                        </Thumbnail>      
                    </Col>
                    <Col xs={12} lg={4}>
                        <Thumbnail className='hero'  src='https://iv1.lisimg.com/image/10071919/720full-rin-%28dairanger%29.jpg' alt='Pink Hero'>
                            <h3>Pink Guardian</h3>
                        </Thumbnail>      
                    </Col>
                    </ListGroup>
                </Row>
            </Grid> 
        )
    }
}

