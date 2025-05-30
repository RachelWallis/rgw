"use client"

import React from 'react';
import Link from 'next/link';

function TextList(props) {
    return (
        <>
            <h4 className="content-heading heading heading-small light-2">{props.heading}</h4>
            <div className="text-list text-list-large dark-1">
                <ul>
                    {props.list.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.link}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default TextList;
