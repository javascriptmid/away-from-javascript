import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default function AudioPlayer({ src, className, ...props }) {
  return (
    <ReactAudioPlayer
      {...props}
      className={`lozad ${className}`}
      data-src={src}
      autoPlay={false}
      controls
    />
  );
}
