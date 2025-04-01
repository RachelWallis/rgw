"use client"
import React from 'react';
import Testimonial from '../../../Components/Testimonial/Testimonial';
import CallToAction from '../../../Components/Misc/CallToAction';
import Heading from '../../../Components/Headers/Heading';
import ProjectsSection from '../../../Components/ProjectComponents/ProjectsSection';
import artImage from "../../../assets/images/icons/heating.svg"

import Art from '../../../Components/Misc/Art';

function Projects1() {
    return (
        <>
            <Heading 
                    heading={<h1>Projects</h1>}
                    headingClass="heading-very-large dark-1"
                    paragraph="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
                    paragraphClass="dark-2"
                    WrapperComponent={(props) => {
                        return (
                            <div className="page-header">
                                <div className="page-header-top">
                                    <div className="container">
                                        {props.children}
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                />
            <div className="projects">
                <div className="projects-wrapper">
                    <ProjectsSection load="true" />
                </div>
            </div>
            <Testimonial type="5" />
            <CallToAction 
                wrapperClass='bg-main'
                heading={
                    <>
                        Have an idea?
                        <br />
                        Let's get it done right!
                    </>
                }
                buttonText="Let's Work Together"
                buttonLink="/contact"
                buttonType="2"
                artwork={<Art art={artImage} type={'4'} />}
            />
        </>
    );
}

export default Projects1;
