module.exports = {
    env: {
        mocha: true
    },
    extends: [
        "plugin:mocha/recommended"
    ],
    plugins: [
        "mocha"
    ],
    rules: {
        "mocha/no-mocha-arrows": "off",
        "mocha/no-setup-in-describe": "off"
    }
};