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
    <picture style={{ width: '100%', height: '100%', display: 'block' }}>
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
        style={{ 
          width: '100%', 
          height: 'auto', 
          objectFit: 'fill',
          objectPosition: 'center'
        }}
      />
    </picture>
  );
}