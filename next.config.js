/** @type {import('next').NextConfig} */

const {withGrafbase} = require('@grafbase/nextjs-plugin')

const nextConfig = withGrafbase({

  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  }
})

module.exports = nextConfig
