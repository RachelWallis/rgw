export default {
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};