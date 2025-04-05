'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// MDX components with image fallback handling
export function MDXComponents() {
  return {
    // Handle images with fallback
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
      return (
        <div className="my-8 rounded-lg overflow-hidden shadow-lg relative bg-blue-100 dark:bg-blue-800">
          <div className="h-64 relative">
            <img 
              {...props} 
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loop
                // Create a data URI with a colored SVG placeholder and the alt text
                const altText = props.alt || 'Image';
                target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%234a90e2'/%3E%3Ctext x='400' y='200' font-family='Arial' font-size='32' fill='white' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(altText)}%3C/text%3E%3C/svg%3E`;
              }}
            />
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