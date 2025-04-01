"use client"
import React from 'react';
import Image from 'next/image';
import logo from '../../assets/images/logo-white.png'

function Footer() {
    return (
        <footer className="footer" style={{ position: 'relative', width: '100%' }}>
            <div className="footer--wrapper">
                <div className="container">
                    <div className="footer--header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="footer--logo">
                                    <a href="index.html">
                                        <Image src={logo} alt="footer" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="footer--paragraph">
                                    <h3 className="heading heading-large light-1">
                                    Heating & Plumbing experts you can rely on
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer--details">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="detail-single footer-phone-number">
                                    <h6>PHONE</h6>
                                    <a href="tel:447969110679">
                                        <h4>+44 (0) 7969 110 679</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="detail-single footer-email">
                                    <h6>EMAIL</h6>
                                    <a href="/mailto:rich@rgwplumbing.co.uk">
                                        <h4>rich@rgwplumbing.co.uk</h4>
                                    </a>
                                </div>
                                <div className="detail-single">
        
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="detail-single">
                                <h6>OTHER</h6>
                                <a href="#">
                                     <h4>Contact Us</h4>
                                    </a>
                                    <a href="/quote">
                                     <h4>Get a quote</h4>
                                    </a>
                                    <a href="#">
                                        <h4>FAQs</h4>
                                    </a>
                                    <a href="#">
                                        <h4>T&Cs</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <h6>Copyright © 2025. Made by Weaverwebs</h6>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
