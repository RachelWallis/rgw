"use client"
import React from 'react';

function AboutText(props) {
    return (
        <div className="about-text-section">
            <div className="about-text-section-wrapper rgw-dark-col text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="about-text-section-inner">
                                <h2 className="heading heading-large light-1">
                                    {props.content}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutText;
