"use client"

import React from 'react';
import Link from 'next/link';

function LoadButton() {
    return (
        <>
            <div className="load-more">
                {/* eslint-disable-next-line */}
                <Link href={"#"} className="button">
                    <span>Load More</span>
                </Link>
            </div>
        </>
    );
}

export default LoadButton;
