module.exports = {
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-go-template'],
  printWidth: 120,
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'go-template'
      }
    }
  ]
};
