"use client"

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

function ServiceBox(props) {
    const element = useRef(null);

    if (props.image) {
        return (
            <div className={`service--box`} ref={element}>
                <div className="service--box--image">
                        <Image src={props.image.src} alt={props.image.alt} />
                </div>

                <span>
                <div className="service--box--content">
                        <h2>{props.heading}</h2>
                        <p>{props.paragraph}</p>
                    </div>
                </span>
            </div>
        );
    } else {
        return (
            <div className={`service--box-icon`} ref={element}>
                <div className="icon">{props.icon}</div>
                <div className="text">
                    <h2>{props.title}</h2>
                </div>
            </div>
        );
    }
}

export default ServiceBox;
