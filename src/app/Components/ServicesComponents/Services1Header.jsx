"use client"

import React from 'react';
import Heading from '../Headers/Heading';
import Image from 'next/image';
import aboutHeader from '../../assets/images/about-header.jpg';

function Services1Header() {
    return (
        <>
            <div className="page-header position-relative">
                <Heading 
                    heading={<h1>Capabilities</h1>}
                    headingClass="heading-very-large dark-1"
                    paragraph="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
                    paragraphClass="dark-2"
                    WrapperComponent={(props) => {
                        return (
                            <div className="page-header-top">
                                <div className="container">
                                    {props.children}
                                </div>
                            </div>
                        )
                    }}
                />
                <div className="page-header-bottom">
                    <div className="single-image">
                        <Image src={aboutHeader} alt="about-header" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services1Header;
