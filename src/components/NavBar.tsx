'use client'; // Need this for the hook

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname for active link styling
import { motion } from 'framer-motion'; // Import motion

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname(); // Get current path

  // Ensure component is mounted before rendering theme-dependent UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-gray-900 dark:text-white">
          Tyler Knibbs
        </Link>
        <div className="flex items-center space-x-4">
          {/* Map over links for easier active state management */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`relative px-1 py-1 text-sm font-medium transition-colors duration-300 
                           ${isActive 
                             ? 'text-blue-600 dark:text-blue-400' 
                             : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'}
                          `}
              >
                {link.label}
                {/* Active link indicator (underline) */}
                {isActive && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    layoutId="underline" // Animate underline between active links
                    initial={false} // Prevent initial animation
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            );
          })}
          
          {/* Theme Toggle Button with tap animation */}
          <motion.button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-md text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            aria-label="Toggle Dark Mode"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mounted ? (theme === 'dark' ? 'Light' : 'Dark') : '...'}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 