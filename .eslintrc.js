module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'airbnb-base'],
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-components': 0,
    'no-unused-vars': 0,
    'import/order': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    // 逗号
    'comma-dangle': 0,
    //object 新行
    'object-curly-newline': 0,
    //函数括号之前不关心间距的一致性
    'space-before-function-paren': 0,
    // 箭头函数的括号
    'arrow-parens': 0,
    // 操作符位于行首
    'operator-linebreak': 0,
    // 检查html是否不允许闭合
    'vue/html-self-closing': 0,
    semi: [2, 'never'],
    'no-unused-expressions': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    // 'arrow-parens': [2, 'as-needed'],
    'vue/max-attributes-per-line': 0,
    'max-len': [
      1,
      {
        code: 120,
      },
    ],
    'no-eval': 0,
    'no-multi-assign': 0,
    'prefer-rest-params': 0,
    'vue/require-prop-types': 0,
    'no-restricted-globals': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    location: false,
  },
}
