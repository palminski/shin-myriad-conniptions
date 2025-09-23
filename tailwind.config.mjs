/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': {
          light:'#96BCA1',
          dark:'#344347',
          paragraph:'#50676e',
        },
        'highlight': '#e0e3e3',
      },
    },
  },
  plugins: [],
};
