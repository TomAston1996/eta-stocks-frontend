module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-redux/recommended',
  ],
  ignorePatterns: ['**/node_modules/**', '**/dist/**'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'import'],
  rules: {
    'import/order': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-cycle': [2, { maxDepth: 1, ignoreExternal: true }],
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [{ pattern: '{react,react-*}', group: 'external', position: 'before' }],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'no-console': ['error', { allow: ['debug', 'info', 'warn', 'error'] }],
    'no-unreachable': 'error',
    'react/display-name': 'off',
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    curly: [2, 'multi-or-nest'],
  },
  settings: {
    react: {
      version: '18.2.0',
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
