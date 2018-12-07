import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer text-center">
                    <span id="footer-copyright">Copyright 2019. All Rights Reserved - Developed by <a href='http://paulmherman.com' target='_blank'>Paul M Herman</a></span>
                </footer>
            </div>

        )
    }
}

export default Footer;