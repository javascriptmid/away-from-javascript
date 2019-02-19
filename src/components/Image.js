import React, { useEffect } from 'react';
import lozad from 'lozad';

export default function Image({ className, src, alt, ...props }) {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  });

  return (
    <img className={`lozad ${className}`} data-src={src} alt={alt} {...props} />
  );
}
