import React from 'react';
import AboutText from '../../../Components/AboutComponents/AboutText';
import TextContentHeader from '../../../Components/TextContent/TextContentHeader';
import ServicesDetailedheader from '../../../Components/ServicesComponents/ServicesDetailedheader';
import CallToAction from '../../../Components/Misc/CallToAction';

function ServicesDetailed() {
    return (
        <>
            <ServicesDetailedheader />
            <AboutText image={logo} content="To deliver our expertise flexibly and with maximum impact, we have developed
                                    three different ways of working. Each is adaptable to your core needs, processes
                                    and culture of your business." />

            <div className="text-content">
                <div className="text-content-wrapper position-relative bg-black">
                    <TextContentHeader heading="Need a new Boiler?" />

                    <div className="text-content-inner">
                        <TabsSection dark="true" />
                    </div>
                    <CallToAction 
                        wrapperClass='text-content-footer bg-black pt-0 pb-0'
                        headingClass='light-1'
                        heading={
                            <>
                                Have an idea?
                                <br />
                                Let's get it done right!
                            </>
                        }
                        buttonText="Let's Work Together"
                        buttonLink="/contact"
                        buttonType="1"
                    />
                </div>
            </div>

        </>
    );
}

export default ServicesDetailed;
