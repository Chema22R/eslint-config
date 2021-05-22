module.exports = {
    env: {
        jest: true
    },
    extends: [
        "plugin:jest/all"
    ],
    plugins: [
        "jest"
    ],
    rules: {
        "jest/no-alias-methods": "warn",
        "jest/no-commented-out-tests": "warn",
        "jest/no-conditional-expect": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "warn",
        "jest/no-identical-title": "warn",
        "jest/no-if": "off",
        "jest/prefer-spy-on": "warn"
    }
};