"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ClientSlide(props) {
    return (
        <Link href={props.url} className="client-image">
            <Image src={props.image.src} alt={props.image.alt} />
        </Link>
    );
}

export default ClientSlide;
