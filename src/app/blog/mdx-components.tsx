'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// MDX components with image fallback handling
export function MDXComponents() {
  return {
    // Handle images with fallback using Next.js Image
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
      const altText = props.alt || 'Image placeholder';
      const src = props.src || '';
      
      // Function to handle image loading errors
      const handleImageError = () => {
        console.warn(`Failed to load image: ${src}`);
      };
      
      return (
        <div className="my-8 rounded-lg overflow-hidden shadow-lg relative bg-blue-100 dark:bg-blue-800">
          <div className="h-64 relative">
            {src ? (
              // Next.js Image component with fallback handling
              <Image 
                src={src}
                alt={altText}
                fill
                className="object-cover"
                loading="lazy"
                onError={handleImageError}
                // Disable blur-up effect if we don't have actual images
                placeholder="empty"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            ) : (
              // Fallback div if no src is provided
              <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold p-4 text-center">
                {altText}
              </div>
            )}
          </div>
          {props.alt && (
            <div className="text-sm text-center italic py-2 px-4 bg-white dark:bg-gray-800">
              {props.alt}
            </div>
          )}
        </div>
      );
    },
    // Enhanced link component
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const href = props.href || '';
      const isExternal = href.startsWith('http');
      
      return (
        <Link 
          href={href} 
          {...props}
          target={isExternal ? "_blank" : props.target}
          rel={isExternal ? "noopener noreferrer" : props.rel}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors duration-200"
        />
      );
    },
    // Enhanced code blocks
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
      <pre className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto" {...props} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
      <code className="bg-gray-100 dark:bg-gray-900 rounded px-1 py-0.5 text-sm" {...props} />
    ),
  };
}

export default MDXComponents; 