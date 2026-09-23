import React, { useState } from 'react';
import { HardHat } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-stone-900 border border-stone-800 text-stone-500 p-2 select-none ${className}`}
        role="img"
        aria-label={alt || 'Imagem da obra'}
      >
        <HardHat className="w-6 h-6 text-amber-500/60 mb-1" />
        <span className="text-[10px] font-medium text-stone-400 text-center truncate max-w-full px-1">
          {fallbackLabel || alt || 'OBRA CALC'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        setHasError(true);
      }}
      {...props}
    />
  );
};
