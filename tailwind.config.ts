import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      // Add custom theme extensions here if needed
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        // If you imported fonts in layout.tsx with variables, define them here
        // e.g., sans: ['var(--font-geist-sans)'],
        // mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add the typography plugin
    // Add other plugins here if needed
  ],
}
export default config 