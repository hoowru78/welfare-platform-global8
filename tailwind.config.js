/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Senior-friendly colors
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe', 
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      // Large, readable fonts for seniors
      fontSize: {
        'xs': ['14px', { lineHeight: '20px' }],
        'sm': ['16px', { lineHeight: '24px' }],
        'base': ['18px', { lineHeight: '28px' }], // Default 18px for seniors
        'lg': ['20px', { lineHeight: '32px' }],
        'xl': ['24px', { lineHeight: '36px' }],
        '2xl': ['30px', { lineHeight: '40px' }],
        '3xl': ['36px', { lineHeight: '48px' }],
        '4xl': ['48px', { lineHeight: '56px' }],
        '5xl': ['60px', { lineHeight: '68px' }],
        '6xl': ['72px', { lineHeight: '80px' }],
      },
    },
  },
  plugins: [
    // Custom senior-friendly utilities
    function({ addUtilities, addComponents }) {
      addUtilities({
        '.senior-focus': {
          '&:focus': {
            outline: '3px solid #3b82f6',
            'outline-offset': '2px',
            'border-radius': '0.375rem',
          },
        },
        '.senior-text': {
          'font-size': '18px',
          'line-height': '1.75',
          'font-weight': '400',
        },
      })
      
      addComponents({
        '.senior-button': {
          '@apply bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 min-h-[3rem]': {},
        },
        '.senior-card': {
          '@apply bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-200': {},
        },
        '.senior-heading': {
          '@apply text-2xl font-bold text-gray-900 mb-4': {},
        },
      })
    },
  ],
} 