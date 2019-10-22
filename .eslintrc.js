module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["plugin:vue/essential", "google"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["vue"],
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'max-len': ["off", { code: 100 }]
  }
};
