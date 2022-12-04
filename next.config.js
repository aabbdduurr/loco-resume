/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
})

module.exports = withPWA({
    // config
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: {
                loader: '@svgr/webpack',
                options: {
                    svgConfig: {
                        plugins: [
                            {
                                prefixIds: false,
                                cleanupIDs: false,
                            },
                        ],
                    },
                },
            },
        })

        return config
    },
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    experimental: {
        forceSwcTransforms: true,
    },
})
