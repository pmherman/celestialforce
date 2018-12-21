import React, { Component } from 'react';
import { Grid, Col, Row, ListGroup, Thumbnail, Modal, Button, Image } from 'react-bootstrap';
import './Actors.css';

export default class Actors extends Component {
    
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleClose.bind(this);
    
        this.state = {
          show: false,
          guardianRed: false,
          guardianGreen: false,
          guardianBlue: false,
          guardianPink: false,
          guardianYellow: false
        };
      }
    
      handleClose() {
        this.setState({ 
            show: false ,
            guardianRed: false,
            guardianGreen: false,
            guardianBlue: false,
            guardianPink: false,
            guardianYellow: false
        });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

    //   componentDidMount() {
    //       this.setState({
    //           guardianRed: true
    //       })
    //   }

      guardianRed = (event) => {
          this.setState(
              {
              [event.target.name]: event.target.value,
              show: true,
              guardianRed: true
          });
      }
      guardianGreen = (event) => {
        this.setState(
            {
            [event.target.name]: event.target.value,
            show: true,
            guardianGreen: true
        });
    }

       guardianPink = (event) => {
        this.setState(
            {
            [event.target.name]: event.target.value,
            show: true,
            guardianPink: true
        });
    }
       guardianBlue = (event) => {
        this.setState(
            {
            [event.target.name]: event.target.value,
            show: true,
            guardianBlue: true
        });
    }
       guardianYellow = (event) => {
        this.setState(
            {
            [event.target.name]: event.target.value,
            show: true,
            guardianYellow: true
        });
    }


    render() {
        return (
            <div>
                <Grid className='content'>
                    <Row>
                        <Col xs={12} md={12}>
                            <h1 className='heading'>The Stars:</h1>
                        </Col>
                    </Row>
                    <Row>
                        <ListGroup>
                        <Col xs={12} lg={4}>
                        <Thumbnail className='hero' onClick={this.guardianRed} src='https://i.ytimg.com/vi/gQz-RaBStNQ/hqdefault.jpg' alt='Red Hero'>
                            <h3>Red Guardian</h3>
                        </Thumbnail>
                        <Thumbnail className='hero' onClick={this.guardianGreen} src='http://news.tokunation.com/wp-content/uploads/sites/5/2017/05/Shishiranger.jpg' alt='Green Hero'>
                            <h3>Green Guardian</h3>
                        </Thumbnail>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Thumbnail className='hero' onClick={this.guardianBlue} src='https://vignette.wikia.nocookie.net/powerrangers/images/a/a2/TenmaRanger.jpg/revision/latest?cb=20110122000203' alt='Blue Hero'>
                                <h3>Blue Guardian</h3>
                            </Thumbnail>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Thumbnail className='hero'  onClick={this.guardianYellow} src='https://vignette.wikia.nocookie.net/powerrangers/images/1/1f/DairaYellow.jpg/revision/latest?cb=20110503193534' alt='Yellow Hero'>
                                <h3>Yellow Guardian</h3>
                            </Thumbnail>      
                        </Col>
                        <Col xs={12} lg={4}>
                            <Thumbnail className='hero' onClick={this.guardianPink} src='https://iv1.lisimg.com/image/10071919/720full-rin-%28dairanger%29.jpg' alt='Pink Hero'>
                                <h3>Pink Guardian</h3>
                            </Thumbnail>      
                        </Col>
                        </ListGroup>
                    </Row>
                </Grid>
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            {this.state.guardianRed ? (
                                <h1 id="gRed">Guardian: Red</h1>
                            ) : ''}
                            {this.state.guardianGreen ? (
                                <h1 id='gGreen'>Guardian: Green</h1>
                            ): ''}
                            {this.state.guardianBlue ? (
                                <h1 id='gBlue'>Guardian: Blue</h1>
                            ): ''}
                            {this.state.guardianPink ? (
                                <h1 id='gPink'>Guardian: Pink</h1>
                            ): ''}
                            {this.state.guardianYellow ? (
                                <h1 id='gYellow'>Guardian: Yellow</h1>
                            ): ''}                                                                                    
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                        {this.state.guardianGreen ? (
                                <div>
                                    <Col lg={6}>
                                        <Image src='https://i.pinimg.com/originals/95/d8/7b/95d87b6a1c36036e49600a65ef6445b7.jpg'></Image>
                                    </Col>
                                    <Col lg={6}>
                                        <p className='text-left'>
                                            <strong>Actor: </strong>Name<br />
                                            <strong>Character Name: </strong> Name Goes Here<br />
                                            <strong>Biography: </strong> This is where the text goes. All the text goes here. I'm placing a bunch of text here because it's kewl                                 
                                        </p>                                    
                                    </Col>
                                </div>
                            ): ''}
                        {this.state.guardianRed ? (
                                <div>
                                    <Col lg={6}>
                                        <Image src='https://i.pinimg.com/originals/18/49/1e/18491ed1cde5ab20b15c0606361d87b5.jpg'></Image>
                                    </Col>
                                    <Col lg={6}>
                                        <p className='text-left'>
                                            <strong>Actor: </strong>Name<br />
                                            <strong>Character Name: </strong> Name Goes Here<br />
                                            <strong>Biography: </strong> This is where the text goes. All the text goes here. I'm placing a bunch of text here because it's kewl                                 
                                        </p>                                    
                                    </Col>
                                </div>
                            ): ''}
                        {this.state.guardianBlue ? (
                                <div>
                                    <Col lg={6}>
                                        <Image src='https://i.pinimg.com/originals/14/25/4e/14254edc254a95041289d5348fa8e488.jpg'></Image>
                                    </Col>
                                    <Col lg={6}>
                                        <p className='text-left'>
                                            <strong>Actor: </strong>Name<br />
                                            <strong>Character Name: </strong> Name Goes Here<br />
                                            <strong>Biography: </strong> This is where the text goes. All the text goes here. I'm placing a bunch of text here because it's kewl                                 
                                        </p>                                    
                                    </Col>
                                </div>
                            ): ''}
                        {this.state.guardianYellow ? (
                                <div>
                                    <Col lg={6}>
                                        <Image src='https://i.pinimg.com/originals/1f/0e/f9/1f0ef98bd5048ef5dbc83a3c1a130263.jpg'></Image>
                                    </Col>
                                    <Col lg={6}>
                                        <p className='text-left'>
                                            <strong>Actor: </strong>Name<br />
                                            <strong>Character Name: </strong> Name Goes Here<br />
                                            <strong>Biography: </strong> This is where the text goes. All the text goes here. I'm placing a bunch of text here because it's kewl                                 
                                        </p>                                    
                                    </Col>
                                </div>
                            ): ''}
                        {this.state.guardianPink ? (
                                <div>
                                    <Col lg={6}>
                                        <Image src='https://i.pinimg.com/236x/cf/76/7f/cf767f86b2adf90d6704d3a79e0e19b6--power-rangers-force.jpg'></Image>
                                    </Col>
                                    <Col lg={6}>
                                        <p className='text-left'>
                                            <strong>Actor: </strong>Name<br />
                                            <strong>Character Name: </strong> Name Goes Here<br />
                                            <strong>Biography: </strong> This is where the text goes. All the text goes here. I'm placing a bunch of text here because it's kewl                                 
                                        </p>                                    
                                    </Col>
                                </div>
                            ): ''}                                                                                                                            
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

