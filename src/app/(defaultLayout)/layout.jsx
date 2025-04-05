"use client"

import React, { useEffect } from 'react';
import Navbar from '../Components/Navs/Nav';
import Footer from '../Components/Misc/Footer';
import '../assets/sass/style.scss';

const DefaultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;