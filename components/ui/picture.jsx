'use client';

export default function Picture({ 
  src, 
  alt, 
  className = '',
  priority = false,
  onLoad,
  onError 
}) {
  const basename = src.replace('/images/homepage/', '').replace('.png', '');
  
  return (
    <picture>
      {/* Mobile WebP */}
      <source
        media="(max-width: 768px)"
        srcSet={`/images/homepage/optimized/${basename}-mobile.webp`}
        type="image/webp"
      />
      {/* Mobile JPEG fallback */}
      <source
        media="(max-width: 768px)"
        srcSet={`/images/homepage/optimized/${basename}-mobile.jpg`}
        type="image/jpeg"
      />
      {/* Desktop WebP */}
      <source
        srcSet={`/images/homepage/optimized/${basename}-desktop.webp`}
        type="image/webp"
      />
      {/* Desktop JPEG fallback */}
      <img
        src={`/images/homepage/optimized/${basename}-desktop.jpg`}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={onLoad}
        onError={onError}
      />
    </picture>
  );
}