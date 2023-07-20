/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    modularizeImports: {},
}

module.exports = nextConfig
