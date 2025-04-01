import React from 'react';
import Image from 'next/image';

function Testimonialtemplate(props) {
    return (
        <>
            <div className="testimonial-image">
                <Image src={props.image.src} alt={props.image.alt} />
            </div>
            <div className="testimonial-content">
                <div>
                    <span>“</span>
                    {props.testimony}
                    <span>”</span>
                </div>
                <h3>{props.name}</h3>
                <h4>{props.designation}</h4>
            </div>
        </>
    );
}

export default Testimonialtemplate;
