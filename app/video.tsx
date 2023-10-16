'use client';

import NextVideo from 'next-video';
import type { VideoProps, VideoLoaderProps } from 'next-video';

const API_ROUTE = '/api/video';

async function videoLoader({ src, width, height }: VideoLoaderProps) {
  let requestUrl = `${API_ROUTE}?url=${encodeURIComponent(`https://stream.mux.com${src}`)}`;
  if (width) requestUrl += `&w=${width}`;
  if (height) requestUrl += `&h=${height}`;
  return `${requestUrl}`;
}

export default function Video(props: VideoProps) {
  return <NextVideo {...props} />
}
