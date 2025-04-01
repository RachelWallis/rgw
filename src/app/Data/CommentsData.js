import testimonialImage2 from '../assets/images/testimonial-img-2.png'
import testimonialImage3 from '../assets/images/testimonial-img-3.png'

const comments = [
    {
        image: {
            src: testimonialImage2,
            alt: 'comment-image-1'
        },
        name: 'Mark Stewart',
        date: 'Dec 08, 2020',
        commentBody:
            'Were make night hath thing you'll you night beast moving seasons over you're face is said also to light first multiply that their where in deep, green under there darkness you.',
        reply: [
            {
                isReply: true,
                image: {
                    src: testimonialImage3,
                    alt: 'comment-image-2'
                },
                name: 'Michaelle Dawn',
                date: 'Dec 08, 2020',
                commentBody:
                    'Good signs, thing that beginning which fish a second under above set waters heaven fifth that fly.',
                reply: [
                    {
                        isReply: true,
                        image: {
                            src: testimonialImage2,
                            alt: 'comment-image-3'
                        },
                        name: 'Mark Stewar',
                        date: 'Dec 08, 2020',
                        commentBody: 'Were make night hath thing you'll you night beast moving seasons over you're face is said also to light first multiply that their where in deep, green under there darkness you.',
                    },
                ],
            },
        ],
    },

    {
        image: {
            src: testimonialImage3,
            alt: 'comment-image-4'
        },
        name: 'Michaelle Dawn',
        date: 'Dec 08, 2020',
        commentBody:
            'Good signs, thing that beginning which fish a second under above set waters heaven fifth that fly.',
        reply: [
            {
                isReply: true,
                image: {
                    src: testimonialImage2,
                    alt: 'comment-image-5'
                },
                name: 'Mark Stewar',
                date: 'Dec 08, 2020',
                commentBody: 'Good signs, thing that beginning which fish a second under above set waters heaven fifth that fly.',
            },
        ],
    },
];

export default comments;
