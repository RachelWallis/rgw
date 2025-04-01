"use client";

import React, { useEffect, useRef } from 'react';
import { team_member_anim } from '../utils';
import Link from 'next/link';
import Image from 'next/image';

function TeamMember(props) {
    const teamMemberRef = useRef(null);

    useEffect(() => {
        const teamMemberEl = teamMemberRef.current;

        const handleMouseEnter = (event) => {
            team_member_anim(event);
        };

        if (teamMemberEl) {
            teamMemberEl.addEventListener('mouseenter', handleMouseEnter);
        }

        return () => {
            if (teamMemberEl) {
                teamMemberEl.removeEventListener('mouseenter', handleMouseEnter);
            }
        };
    }, []);

    return (
        <div className="col-lg-4 col-md-6">
            <div className="team-member" ref={teamMemberRef}>
                <div className="team-member-image">
                    <Image src={props.image.src} alt={props.image.alt} />
                    <div className="team-member-social">
                        <ul>
                            {props.social.map((social, index) => (
                                <li key={index}>
                                    <Link href={social.link}>
                                        <i aria-hidden="true" className={`fab ${social.icon}`}></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="team-member-content">
                    <h5>{props.name}</h5>
                    <h6>{props.designation}</h6>
                </div>
            </div>
        </div>
    );
}

export default TeamMember;