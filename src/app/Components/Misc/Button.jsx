"use client"
import React from 'react';
import Link from 'next/link';

function Button(props) {
    return (
        <Link className={`button button-${props.type}`} href={`${props.link}`}>
            {props.content}
        </Link>
    );
}

export default Button;
