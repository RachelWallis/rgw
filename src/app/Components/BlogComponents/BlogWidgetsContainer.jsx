"use client"
import React from 'react';
import BlogSearch from './BlogSearch';
import BlogCategoryList from './BlogCategoryList';
import BlogRecentPosts from './BlogRecentPosts';
import BlogTags from './BlogTags';

function BlogWidgetsContainer() {
    const tagarray = ['company', 'technology', 'development', 'agency'];

    return (
        <>
            <ul className="widget widget-container">
                <BlogSearch />
                <BlogCategoryList/>
                <BlogRecentPosts />
                <BlogTags heading='Popular Tags' tags={tagarray} />
            </ul>
        </>
    );
}

export default BlogWidgetsContainer;
