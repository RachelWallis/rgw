"use client"

import React from 'react';
import Heading from '../Headers/Heading';
import Image from 'next/image';

function ServicesDetailedheader() {
    return (
        <>
            <div className="page-header position-relative">
                <Heading 
                        heading={<h1>Strategy</h1>}
                        headingClass="heading-very-large dark-1"
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesDetailedheader;
