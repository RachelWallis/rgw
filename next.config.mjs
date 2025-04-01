export default {
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    trailingSlash: true,
    basePath: process.env.NODE_ENV === 'production' ? '/weaverwebs-nextjs' : undefined,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/weaverwebs-nextjs' : undefined,
    images: {
        unoptimized: true
    }
};