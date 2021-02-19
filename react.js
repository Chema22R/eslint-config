module.exports = {
    env: {
        browser: true
    },
    extends: [
        "plugin:react/all",
        "plugin:react-hooks/recommended"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        "react",
        "react-hooks"
    ],
    rules: {
        "react/destructuring-assignment": "off",
        "react/jsx-closing-bracket-location": ["error", { "selfClosing": "after-props" }],
        "react/jsx-curly-brace-presence": ["error", { "props": "never", "children": "always" }],
        "react/jsx-first-prop-new-line": ["error", "never"],
        "react/jsx-max-depth": ["error", { "max": 5 }],
        "react/jsx-max-props-per-line": "off",
        "react/jsx-one-expression-per-line": ["error", { "allow": "single-child" }],
        "react/jsx-sort-props": ["error", { "callbacksLast": true, "ignoreCase": true, "noSortAlphabetically": true, "reservedFirst": true, "shorthandLast": true }],
        "react/no-set-state": "off",
        "react/require-optimization": "off",
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};