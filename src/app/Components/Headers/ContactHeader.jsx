"use client"
import React from 'react';
import Art from '../Misc/Art';
import Image from 'next/image';
import contactImage from '../../assets/images/contact_img.jpg'

function ContactHeader() {
    return (
        <>
            <div className="page-header position-relative">
                <div className="page-header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 className="heading heading-very-large dark-1">
                                    Let&rsquo;s get your free strategy session.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-header-bottom">
                    <div className="single-image">
                        <Image src={contactImage} alt="contact-header" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactHeader;
