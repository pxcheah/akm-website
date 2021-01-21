module.exports = {
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
  },
};
