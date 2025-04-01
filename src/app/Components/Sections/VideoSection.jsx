"use client"

import React from 'react';

import Heading from '../Headers/Heading';
import Video from '../Misc/Video';

function VideoSection() {
    return (
        <>
            <div className="video-section top-section position-relative">
                <div className="top-heading">
                    <div className="container">
                        <Heading 
                            heading={<h1>Heating & Plumbing experts you can rely on.</h1>}
                            headingClass="heading-very-large dark-1"
                            paragraphClass="dark-2"
                            headingColumn="col-lg-9"
                        />
                    </div>
                </div>
                <div className="video-container">
                    <Video video={'assets/video.mp4'} muted autoPlay playsInline="" preload="auto" />
                </div>
            </div>
        </>
    );
}

export default VideoSection;
