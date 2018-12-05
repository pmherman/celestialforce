import React, { Component } from 'react';
import { Image, PageHeader } from 'react-bootstrap';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer text-center mt-4 wow fadeIn">
                    <span id="footer-copyright">Copyright 2019. All Rights Reserved</span>
                </footer>
            </div>

        )
    }
}

export default Footer;