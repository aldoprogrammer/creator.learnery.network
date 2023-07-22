/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
    },
    colors: {
      primary: '#37F6AE',
      gray: '#808080',
      fontgray: '#666',
      lightgray: '#EAEAEA',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1200px',
      xl: '1728px',
    },
    extend: {
      backgroundImage: {
        gradient: 'var(--background-gradient)',
      },
      fontSize: {
        // Add your custom font sizes here
        xl: '2rem', // For example, a smaller font size     // Another custom font size named 7xl
        lg: '1.5rem',
      },
    },
  },
  plugins: [],
}
