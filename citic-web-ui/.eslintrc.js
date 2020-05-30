// 

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals:{
    "document": true,
    "localStorage": true,
    "window": true,
    "process":true

  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: [
  'plugin:vue/essential',
  "eslint:recommended"
],
  // required to lint *.vue files
  plugins: [
  ],
  // 注释中标注--fix的可以自动修复  执行  npm run lint-fix
  // ESLINT 文档 https://eslint.org/docs/user-guide/configuring
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //注释规范需要符合JSDOC注释  --fix
    'vue/no-parsing-error': 'off',
    'vue/no-duplicate-attributes': 'off',
    'vue/valid-v-for': 'off'
    
  }
}
