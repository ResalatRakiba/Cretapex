/** tailwind.config.js
 * ---------------------------------------------------------------------------
 * DESIGN TOKENS FOR THE WHOLE SITE.
 * Every colour here is sampled from the Cretapex logo so the site and the
 * brand mark stay in sync:
 *   brand.500  #F26A1B  -> the orange "C" of the logo
 *   brand.400  #FF8A2B  -> the lighter top of the logo's orange gradient
 *   brand.700  #C4500A  -> pressed / hover state
 *   ink        #0D0D0D  -> the black "A" + arrow and the "Cretapex" wordmark
 *   sand       #FFF4EC  -> soft orange tint used for alternating sections
 *   slate      #5A5A5E  -> the grey used by the logo tagline
 * ---------------------------------------------------------------------------
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF4EC',
          100: '#FFE4D1',
          200: '#FFC7A3',
          300: '#FFA76D',
          400: '#FF8A2B',
          500: '#F26A1B',
          600: '#DE5A0F',
          700: '#C4500A',
          900: '#7A3007',
        },
        ink: {
          DEFAULT: '#0D0D0D',
          800: '#1A1A1C',
          700: '#26262A',
          500: '#5A5A5E',
          300: '#8E8E96',
        },
        sand: '#FFF4EC',
        mist: '#F5F5F7',
      },
      fontFamily: {
        // Sora echoes the squared, technical shapes of the "Cretapex" wordmark.
        display: ['Sora', 'system-ui', 'sans-serif'],
        // Inter keeps long paragraphs highly readable.
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { container: '1180px' },
      boxShadow: {
        card: '0 1px 2px rgba(13,13,13,0.04), 0 12px 32px -18px rgba(13,13,13,0.22)',
        lift: '0 18px 46px -22px rgba(242,106,27,0.45)',
        pill: '0 10px 30px -12px rgba(13,13,13,0.25)',
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%,100%': { opacity: '0.25' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
