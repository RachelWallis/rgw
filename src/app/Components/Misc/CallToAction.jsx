"use client"
import React from 'react';
import Button from '../Misc/Button';
import Image from 'next/image';
import instantQuote from '../../assets/images/instant-quote.png';



const CalltoAction = (props) => {
    return (
        <div className="cta">
            <div className={`cta-wrapper position-relative ${props.wrapperClass}`}>
                <div className="container">
                    <div className="row align-items-lg-center cta-quote">
                        <div className="col-md-6">
                            <Image src={instantQuote} width={600} height={600} alt="get an instant quote today" />
                        </div>
                        <div className="col-md-6 d-md-inline-flex justify-content-md-end">
                            <div className="button-wrapper">
                                <Button content="Get a quote" link="/quote" type="button" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalltoAction;
