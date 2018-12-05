import React, { Component } from 'react';
import { Image, PageHeader } from 'react-bootstrap';
import logo from '../../images/logo.jpg';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Image className='main-logo' src={logo} alt="Logo" rounded/>
                <PageHeader>
                <large>Coming Soon...</large>
                <br /><br />
                </PageHeader>
            </div>

        )
    }
}

export default Home;