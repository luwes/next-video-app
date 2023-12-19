// @ts-check
const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withNextVideo(nextConfig, {
  provider: 'amazon-s3',
  providerConfig: {
    'amazon-s3': {
      endpoint: 'https://s3.us-east-1.amazonaws.com'
    }
  }
})
