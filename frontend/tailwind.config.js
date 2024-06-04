/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F9DFF',  // Light Blue
          DEFAULT: '#008080', // Blue
          dark: '#0056B3',    // Dark Blue
        },
        secondary: {
          light: '#A8E6CF',  // Light Green
          DEFAULT: '#4CAF50', // Green
          dark: '#087F23',    // Dark Green
        },
        neutral: {
          light: '#F5F5F5',  // Light Grey
          DEFAULT: '#9E9E9E', // Grey
          dark: '#616161',    // Dark Grey
        },
        accent: {
          light: '#FFECB3',  // Light Yellow
          DEFAULT: '#FFC107', // Yellow
          dark: '#FF8F00',    // Dark Yellow
        },
        error: {
          light: '#FFCDD2',  // Light Red
          DEFAULT: '#F44336', // Red
          dark: '#B71C1C',    // Dark Red
        },
        background: {
          light: '#FFFFFF',  // White
          DEFAULT: '#F8F9FA', // Light Grey
          dark: '#E0E0E0',    // Grey
        },
        purple:'#800080',
        skyblue:'#87CEEB',
        text: {
          primary: '#212529', // Dark Grey for primary text
          secondary: '#6C757D', // Grey for secondary text
          light: '#FFFFFF', // White for text on dark backgrounds
        },
      },
    },
  },
  plugins: [],
}
