/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        porcelain: '#fbf7ef',
        pearl: '#f4eadc',
        canvas: '#ebe0d1',
        taupe: '#a88f7b',
        mocha: '#5f4a3e',
        ink: '#15120f',
        oxblood: '#6c2737',
        sage: '#78866b',
        brass: '#b38a45'
      },
      fontFamily: {
        body: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        accent: ['Cormorant Garamond', 'Georgia', 'serif']
      },
      boxShadow: {
        editorial: '0 24px 70px rgba(45, 35, 27, 0.14)',
        soft: '0 18px 50px rgba(61, 45, 34, 0.09)'
      },
      backgroundImage: {
        linen:
          'linear-gradient(135deg, rgba(255,255,255,0.82), rgba(244,234,220,0.55)), linear-gradient(90deg, rgba(179,138,69,0.08), transparent 42%, rgba(108,39,55,0.08))'
      }
    }
  },
  plugins: []
}
