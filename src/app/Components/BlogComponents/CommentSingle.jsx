"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function CommentSingle(props) {
    return (
        <div className="parent--comment">
            <div className="comment--avatar">
                <Image alt={props.image.alt} src={props.image.src} />
            </div>
            <div className="comment--content">
                <div className="comment-inner-wrapper">
                    <Link href="/blog/detail">
                        <h4 className="name">{props.name}</h4>
                    </Link>
                    <h5 className="date">{props.date}</h5>
                </div>
                <p>{props.commentBody}</p>

                <div className="reply-button">
                    <Link className="comment-reply-link" href="/blog/detail">
                        Reply
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CommentSingle;
