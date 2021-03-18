module.exports = {
    root: true,
    plugins: ['stylelint-order'],
    extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
    ignoreFiles: ['**/*.js', '**/*.ts'],
    rules: {
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "at-rule-no-unknown": null,
        "at-rule-no-unknown": true,
    },
}