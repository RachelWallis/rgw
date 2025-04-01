"use client"

import React from 'react';
import RelatedBlogs from '../../../Components/BlogComponents/RelatedBlogs';
import BlogPost from '../../../Data/BlogPost';
import BlogTags from '../../../Components/BlogComponents/BlogTags';
import BlogWidgetsContainer from '../../../Components/BlogComponents/BlogWidgetsContainer';
import CommentForm from '../../../Components/Forms/CommentForm';
import CommentsSection from '../../../Components/BlogComponents/CommentsSection';
function BlogDetailed() {
    return (
        <>
            <div className="container sidebar-page blog-single-page">
                <div className="row">
                    {/* first column - start */}
                    <div className="col-lg-8">
                        <div className="blog-single-page-wrapper blog-single-page-wrapper-right">
                            {BlogPost.content}
                            <BlogTags heading={'Tags: '} detailPageStatus="true" tags={['agency', 'development', 'technology']} />

                            <CommentsSection />

                            <CommentForm />
                        </div>
                    </div>
                    {/* first column - end */}
                    {/* second column - start */}
                    <div className="col-lg-4 sidebar-column">
                        <div className="sidebar-column-wrapper">
                            <BlogWidgetsContainer/>
                        </div>
                    </div>
                    {/* second column - end */}
                </div>
            </div>

            <RelatedBlogs />
        </>
    );
}

export default BlogDetailed;
