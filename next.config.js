/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
})

module.exports = withPWA({
    // config
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    experimental: {
        forceSwcTransforms: true,
    },
})
