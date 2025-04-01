"use client"

import React from 'react';
import Link from 'next/link';

function BlogCategoryList(props) {

    const categories = [
        { key: '1', link: '/', label: 'Company' },
        { key: '2', link: '/', label: 'Design' },
        { key: '3', link: '/', label: 'Development' },
        { key: '4', link: '/', label: 'Technology' }
    ];
    
    return (
        <li className="widget widget_categories">
            <h2 className="widgettitle">{"Categories"}</h2>
            <ul>
                {categories.map(category => {
                    return (
                        <li key={category.key} className="cat-item">
                            <Link href={category.link}>
                                {category.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </li>
    );
}

export default BlogCategoryList;
