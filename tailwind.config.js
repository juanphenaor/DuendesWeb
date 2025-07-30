/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Paleta basada en el logo real del Duendes Rugby Club
        primary: {
          50: '#e8f2ff',
          100: '#d4e6ff',
          200: '#b1d1ff',
          300: '#85b7ff',
          400: '#5995ff',
          500: '#3a7bd5', // Azul claro contraste
          600: '#1e4e9e', // Azul duende (primario)
          700: '#1a4286',
          800: '#16366e',
          900: '#122a56',
        },
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f39c12', // Naranja garras/ojos
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        dark: {
          50: '#f5f5f5', // Fondo claro (cartas/noticias destacadas)
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#b3b3b3', // Gris medio (texto secundario)
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#1f1f1f', // Gris oscuro neutro
          800: '#1c1c1c', // Fondo alternativo (secciones)
          900: '#121212', // Fondo principal oscuro
          950: '#0b0c10', // Negro profundo (fondo)
        },
        accent: {
          orange: '#f39c12', // Naranja garras/ojos
          yellow: '#ffd700', // Amarillo brillante
          white: '#ffffff', // Blanco rugby (neutro)
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Roboto Condensed', 'system-ui', 'sans-serif'],
        'sport': ['Oswald', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
