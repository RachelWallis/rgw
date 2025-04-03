import React from 'react';
import DetailedHeader from '../../../Components/ProjectDetailedPageComponents/DetailedHeader';
import ProjectPost from '../../../Data/ProjectPost';
import Testimonial from '../../../Components/Testimonial/Testimonial';

function ProjectDetailed() {
    return (
        <>
            <DetailedHeader
                heading="Sleep therapys product landing page design with ecommerce integration."
                client="Comfort"
                service="UI/UX Design"
                date="25 Nov. 2020"
            />

            {ProjectPost.content}
            <Testimonial noArt={true} />
        </>
    );
}

export default ProjectDetailed;
