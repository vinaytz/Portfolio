module.exports = {
    theme: {
      extend: {
        animation: {
          'color-change': 'colorChange 3s infinite alternate',
        },
        keyframes: {
          colorChange: {
            '0%': { color: '#34D399' }, /* Emerald-400 */
            '100%': { color: '#60A5FA' }, /* Blue-400 */
          },
        },
      },
    },
    plugins: [],
  };
  