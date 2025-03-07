

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   fontFamily:{
    Roboto:"'Roboto','sans-serif'",
    Archivo:"'Archivo','sans-serif'"
   },
   colors:{
  
    textDark:"#000810",
    gradColLeft:"#0F0D0D",
    gradColRight:"#304646",
    primary:"#0DA574",//teal
    // primary:"rgb(52 211 153)",// emerland

    secondary:"#FFC631",//yellow
    darkGray:"#2A3C3C",
    lightGray:"#A9A9A9"
   }
    },
  },
  plugins: [],
};
