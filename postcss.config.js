module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    },
    autoprefixer: {},
  },
}
