import React from 'react';

export default function LazyImage({ alt, src, className, ...props }) {
  return (
    <img {...props} alt={alt} className={`lozad ${className}`} data-src={src} />
  );
}
