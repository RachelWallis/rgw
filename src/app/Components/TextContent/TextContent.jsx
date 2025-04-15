import React from 'react';
import TextContentHeader from './TextContentHeader';
import CallToAction from '../Misc/CallToAction';
import Image from 'next/image';
import homeImage from '../../assets/images/kitchen.png';
import Button from '../Misc/Button';

function TextContent() {
    return (
        <>
            <div className="text-content">
                <div className="text-content-wrapper position-relative rgw-dark-col">
                    <TextContentHeader heading="Need a new Boiler?" />
                    <CallToAction 
                        wrapperClass='text-content-footer rgw-dark-col pt-0 pb-0'
                        headingClass='light-1'
                        heading={
                            <>
                                Get an instant estimate today with our online calculator.
                            </>
                        }
                    />

                </div>

                <div className="single-image ">
                    <Image src={homeImage} alt="generic" />
                </div>
            </div>
        </>
    );
}

export default TextContent;
