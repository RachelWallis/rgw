"use client"

import React, { useEffect } from 'react';
import Heading from '../../../Components/Headers/Heading';
import BlogContainer from '../../../Components/BlogComponents/BlogContainer';
import CallToAction from '../../../Components/Misc/CallToAction';
import BlogPagination from '../../../Components/BlogComponents/BlogPagination';
import artImage from "../../../assets/images/icons/heating.svg"

import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

import Art from '../../../Components/Misc/Art';


const filterOptions = [
    { value: '*', label: 'All', filter: '*' },
    { value: 'Company', label: 'Company', filter: '.company' },
    { value: 'Design', label: 'Design', filter: '.design' },
    { value: 'Development', label: 'Development', filter: '.development' },
    { value: 'Technology', label: 'Technology', filter: '.technology' }
];

function Bloggrid() {
    const isotope = React.useRef();
    const [filterKey, setFilterKey] = React.useState({ value: '*', label: 'All' });

    useEffect(() => {
        (async () => {
            const Isotope = (await import('isotope-layout')).default;
    
            isotope.current = new Isotope('.blog-list-container', {
                itemSelector: '.blog-list-item',
                layoutMode: 'fitRows',
            });
        })();
    
        // cleanup
        return () => {
            if (isotope.current) {
                isotope.current.destroy();
                isotope.current = null;
            }
        }
    }, []);

    // handling filter key change
    useEffect(() => {
        if (isotope.current) {
            filterKey.value === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey.value}` });
        }
    }, [filterKey]);

    return (
        <>
            <Heading 
                heading={<h1>Read from recent blog writings.</h1>}
                headingColumn="col-lg-8"
                headingClass="heading-very-large dark-1"
                WrapperComponent={(props) => {
                    return (
                        <div className="blog-heading">
                            <div className="container">
                                {props.children}
                            </div>
                        </div>
                    )
                }}
            />

            <div className="blog-section blog-section-grid">
                <div className="blog-section-wrapper">
                    <div className="blog-list blog-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    
                                    <ul className="filter filter-list">
                                        {filterOptions.map((option, index) => {
                                            return (
                                                <li key={index}>
                                                    {/* eslint-disable-next-line */}
                                                    <a
                                                        href="#"
                                                        data-filter={option.filter}
                                                        className={filterKey.value === option.value ? 'selected' : ''}
                                                        onClick={() => {
                                                            setFilterKey(option);
                                                        }}
                                                    >
                                                        {option.label}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>

                                    <div className="source-select filter filter-select">
                                        <Select
                                            options={filterOptions}
                                            className="react-select-container"
                                            classNamePrefix="react-select"
                                            value={filterKey}
                                            onChange={(value) => {
                                                setFilterKey(value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <BlogContainer width="6" />
                            <BlogPagination />
                        </div>
                    </div>
                </div>
            </div>

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

export default Bloggrid;
