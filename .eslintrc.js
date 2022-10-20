module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12, // See https://node.green/ & https://eslint.org/docs/latest/user-guide/configuring/language-options
    sourceType: 'script',
  },
  extends: ['plugin:unicorn/recommended', 'prettier'],
  env: {
    node: true,
  },
  rules: {
    'no-console': 'off', //error',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',

    // [
    //   'error',
    //   {
    //     allowList: { Param: true, Req: true, Res: true },
    //   },
    // ],
  },
}
