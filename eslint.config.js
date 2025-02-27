module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  rules: {
    // Disable specific formatting rules
    'indent': 'off',
    'quotes': 'off',
    'semi': 'off',
    // Add other rules you want to disable
  }
}