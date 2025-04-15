"use client"

import React from 'react';
import Link from 'next/link';
import { menuItems } from '../../Data/MenuItems';
import logo from '../../assets/images/logo/white-text.png';
import Image from 'next/image';
import Button from '../Misc/Button';


function Nav() {
    return (
        <div className='nav-primary navigation'>
            <div className="logo">
                <Link className="navLink" href="/" rel="home" aria-current="page">
                    <Image
                        src={logo}
                        className="custom-logo custom-logo-link"
                        alt="Slope"
                    />
                </Link>
            </div>
            <div className='button-nav'>
            <ul id="nav-list-primary" className="menu">
                {menuItems.map((item, index) => (
                    <li className="menu-item" key={index}>
                        <Link href={item.to}>
                            <span>{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <Button content="Get a quote" link="/quote" type="button" />
            </div> 
        </div>
    );
}

export default Nav;