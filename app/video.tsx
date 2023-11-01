// video.tsx
'use client';

import NextVideo from 'next-video';
// import type { VideoProps, VideoLoaderProps } from 'next-video';
import ReactPlayer from 'react-player';

const API_ROUTE = '/api/video';

// async function videoLoader({ src, width, height }: VideoLoaderProps) {
//   let requestUrl = `${API_ROUTE}?url=${encodeURIComponent(`https://stream.mux.com${src}`)}`;
//   if (width) requestUrl += `&w=${width}`;
//   if (height) requestUrl += `&h=${height}`;
//   return `${requestUrl}`;
// }

export function Video(props: any) {
  return <NextVideo {...props} />
}

export function ReactPlayerAsVideo(props: any) {
  let { asset, src, poster, blurDataURL, ...rest } = props;
  let config = { file: { attributes: { poster } } };

  return <ReactPlayer url={src} config={config} width="100%" height="100%" {...rest} />;
}
