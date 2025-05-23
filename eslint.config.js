export default [
  {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    files: ['assets/ts/**/*.ts'],
    ignores: ['assets/js/**/*.js'],
    ignorePatterns: ['node_modules']
  }
];
