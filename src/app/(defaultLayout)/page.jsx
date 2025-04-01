import React from 'react';

import ServicesSection from '../Components/ServicesComponents/ServicesSection';
import TextContent from '../Components/TextContent/TextContent';
import CallToAction from '../Components/Misc/CallToAction';
import ImageSlider from '../Components/Misc/ImageSlider';
import Heading from '../Components/Headers/Heading';
import headerImage from '../assets/images/index-2-header-img-1.jpg';
import headerImage2 from '../assets/images/index-2-header-img-2.jpg';
import headerImage3 from '../assets/images/index-2-header-img-3.jpg';

const page = () => {
    return (
        <div>
            <div className="index-2-header position-relative">
                <div className="top-heading">
                    <div className="container">
                        <Heading 
                            heading={<h1>Heating & Plumbing experts you can rely on.</h1>}
                            headingClass="heading-very-large dark-1"
                            headingColumn="col-lg-9"
                        />
                    </div>
                </div>
                <ImageSlider
                    images={[
                        {
                            image: headerImage2,
                            alt: 'Hero Image',
                        },
                        {
                            image: headerImage,
                            alt: 'Hero Image',
                        },
                        {
                            image: headerImage3,
                            alt: 'Hero Image',
                        },
                    ]}
                />
            </div>
            <TextContent />


        </div>
    );
};

export default page;