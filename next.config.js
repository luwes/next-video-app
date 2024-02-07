// @ts-check
// const path = require('path');
// const crypto = require('crypto');
const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withNextVideo(nextConfig, {
  // remoteSourceAssetPath,
  // provider: 'amazon-s3',
  // providerConfig: {
  //   'amazon-s3': {
  //     endpoint: 'https://s3.us-east-1.amazonaws.com',
  //     generateAssetKey
  //   }
  // },
})

// function remoteSourceAssetPath(url) {
//   const urlObj = new URL(url);
//   return 'remote/' + toSafePath(decodeURIComponent(`${urlObj.hostname}${urlObj.pathname}`));
// }

// function generateAssetKey(filePathOrURL, folder) {
//   if (!isRemote(filePathOrURL)) return filePathOrURL;

//   const url = new URL(filePathOrURL);
//   let hostnameHash = crypto.createHash('md5').update(url.hostname).digest('hex');

//   return `${folder}/remote/${hostnameHash}/${path.basename(decodeURIComponent(url.pathname))}`;
// }

// function isRemote(filePath) {
//   return /^https?:\/\//.test(filePath);
// }

// function toSafePath(str) {
//   return str
//     .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '')
//     .replace(/[^a-zA-Z0-9._-]+/g, '_');
// }
