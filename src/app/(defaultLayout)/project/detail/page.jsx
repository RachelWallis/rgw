import React from 'react';
import DetailedHeader from '../../../Components/ProjectDetailedPageComponents/DetailedHeader';
import ProjectPost from '../../../Data/ProjectPost';
import Testimonial from '../../../Components/Testimonial/Testimonial';
import ImageSlider from '../../../Components/Misc/ImageSlider';
import projectSlide1 from '../../../assets/images/project_slide_img_1.jpg'

function ProjectDetailed() {
    return (
        <>
            <DetailedHeader
                heading="Sleep therapy's product landing page design with ecommerce integration."
                client="Comfort"
                service="UI/UX Design"
                date="25 Nov. 2020"
            />
            <ImageSlider
                noArt="true"
                swiperNav="true"
                images={[
                    {
                        image: projectSlide1,
                        alt: 'Project Image',
                    },
                    {
                        image: projectSlide1,
                        alt: 'Project Image',
                    },
                    {
                        image: projectSlide1,
                        alt: 'Project Image',
                    },
                ]}
            />

            {ProjectPost.content}
            <Testimonial noArt={true} />
        </>
    );
}

export default ProjectDetailed;
