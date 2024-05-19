const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'imgix',
        path: '',
        unoptimized: true
    },
    basePath: isProd ? '/qazaqstroy' : '',
    assetPrefix: isProd ? '/qazaqstroy' : '',
    output: "export",
};

module.exports = nextConfig;
