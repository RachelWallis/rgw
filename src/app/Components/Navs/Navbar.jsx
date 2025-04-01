"use client"

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import NavSocials from './NavSocials';
import $ from 'jquery';
import { navItems } from '../../Data/NavItems';
import logo from '../../assets/images/logo.svg';
import navigationMenuImage from '../../assets/images//icons/heating.svg'

import Image from 'next/image';

import {
    nav_menu_scroll,
    nav_menu_width,
    nav_tl_driver,
    nav_scroll_disable,
} from '../utils';

function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
            nav_scroll_disable();
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const navigation = document.querySelector('.navigation:not(.shown):not(.scrolled)');
        const placeholder = document.querySelector('.placeholder');

        if (navigation && placeholder) {
            const offsetTop = navigation.offsetTop;
            placeholder.style.width = '10vw';
            placeholder.style.height = `${navigation.offsetHeight}px`;
            placeholder.style.top = `${offsetTop}px`;
        }
    }, []);

    useEffect(() => {
        nav_tl_driver();
    }, []);

    useEffect(() => {
        const cleanupDropdown = dropdown_handler();
        return cleanupDropdown;
    }, []);

    useEffect(() => {
        const handleResize = () => {
            nav_menu_width();
        };

        nav_menu_width();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleReady = () => {
            nav_menu_scroll();
        };

        nav_menu_scroll();

        window.addEventListener('resize', handleReady);
        return () => {
            window.removeEventListener('resize', handleReady);
        };
    }, []);

    useEffect(() => {
        nav_scroll_disable();
    }, []);

    useEffect(() => {
        const navigation = document.querySelector('.navigation');
        const handleHeightUpdate = () => {
            const navMenu = document.querySelector('.navigation .navigation-menu');
            if (navMenu) {
                navMenu.style.height = `${window.innerHeight}px`;
            }
        };

        const handleDropdownClicked = () => {
            setTimeout(nav_menu_scroll, 400);
        };

        navigation?.addEventListener('navigationOpened', handleHeightUpdate);
        navigation?.addEventListener('dropdown-clicked', handleDropdownClicked);
        window.addEventListener('resize', handleHeightUpdate);

        return () => {
            navigation?.removeEventListener('navigationOpened', handleHeightUpdate);
            navigation?.removeEventListener('dropdown-clicked', handleDropdownClicked);
            window.removeEventListener('resize', handleHeightUpdate);
        };
    }, []);

    // Dropdown Handler
    const dropdown_handler = () => {
        const clickHandler = (e) => {
            $('.navigation').trigger('dropdown-clicked');
    
            let target_drop = $(e.currentTarget).siblings('.sub-menu');
            let current_drop = $(e.target).siblings('.sub-menu');
    
            if (target_drop.length < 1) {
                return;
            }
    
            e.preventDefault();
    
            // check for dropdown in current menu
            if (!current_drop.hasClass('dropped') && $(e.target).parents('.sub-menu').length > 0) {
                current_drop.toggleClass('dropped').slideToggle();
                return;
            }
    
            // if the clicked dropdown is already open, close it and return
            if (target_drop.hasClass('dropped') && e.target === e.currentTarget) {
                target_drop.toggleClass('dropped').slideToggle();
                return;
            }
    
            // close existing open dropdowns
            $('.dropped').toggleClass('dropped').slideToggle();
            // open clicked dropdown
            target_drop.toggleClass('dropped').slideToggle();
        };
    
        const navLinkClickHandler = (e) => {
            // Close existing open dropdowns
            $('.dropped').toggleClass('dropped').slideToggle();
        };
    
        $(document).on('click', '.navigation-menu-menu .menu-item-has-children > a', clickHandler);
        $(document).on('click', '.navigation-menu-menu .page_item_has_children > a', clickHandler);
        $(document).on('click', '.navigation-menu-menu .sub-menu .navLink', navLinkClickHandler);
    
        return () => {
            $(document).off('click', '.navigation-menu-menu .menu-item-has-children > a', clickHandler);
            $(document).off('click', '.navigation-menu-menu .page_item_has_children > a', clickHandler);
            $(document).off('click', '.navigation-menu-menu .sub-menu .navLink', navLinkClickHandler);
        };
    };

    const buttonRef = useRef(null);

    return (
        <>
            <div className="placeholder"></div>
            <div className="navigation-wrapper" style={{ width: '100%' }}>
                <nav className="navigation enabled-sticky">
                    <div className="navigation-bar">
                        <div className="logo">
                            <Link className="navLink" href="/" rel="home" aria-current="page">
                                <Image
                                    src={logo}
                                    className="custom-logo custom-logo-link"
                                    alt="Slope"
                                />
                            </Link>
                        </div>
                        <div className="hamburger" ref={buttonRef}>
                            <a href="/#">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </a>
                        </div>
                    </div>
                    <div className="navigation-menu">
                        <div className="navigation-menu-image">
                            <Image src={navigationMenuImage} alt="navigation" />
                        </div>
                        <div className="navigation-menu-menu">
                            <div className="navigation-menu-menu--wrapper">
                                <ul className="menu">
                                    {navItems.map((navItem, index) => (
                                        <li key={index} className="menu-item menu-item-has-children">
                                            <a href={navItem.link}>{navItem.label}</a>
                                            {navItem.subMenu && (
                                                <ul className="sub-menu">
                                                    {navItem.subMenu.map((subnavItem, subIndex) => (
                                                        <li key={subIndex} className="menu-item">
                                                            <Link className="navLink" href={subnavItem.link}>
                                                                {subnavItem.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <NavSocials />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
