import React from 'react';
import Navbar from './Components/Navs/Navbar';
import Footer from './Components/Misc/Footer';
import Image from 'next/image';
import errorImage from "./assets/images//icons/heating.svg"

function Error404() {
    return (
        <>
        <Navbar />
            <div className="not-found">
                <div className="illustration">
                    <Image src={errorImage} alt="404" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="not-found-content">
                                <h1 className="heading heading-very-large dark-1">Oops!</h1>
                                <h2 className="heading heading-large dark-1">
                                    We can't seem to find the page you're looking for.
                                </h2>
                                <h3 className="heading heading-medium">
                                    Error Code: 404
                                    <br />
                                    Here are some helpful links instead:
                                </h3>
                                <Navbar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Error404;
