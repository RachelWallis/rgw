"use client"
import React from 'react';
import Image from 'next/image';

const Art = (props) => {
    return (
        <div className={`artwork artwork-${props.type}`}>
            {
                (props.type == "1" || props.type == "3") ?
                    <Image src={props.art} alt="artwork" /> :
                        <Image src={props.art} alt="artwork" />
            }
        </div>
    );
};

export default Art;
