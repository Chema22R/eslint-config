module.exports = {
    env: {
        es2021: true
    },
    extends: [
        'eslint:all',
        'plugin:import/recommended',
        'plugin:promise/recommended'
    ],
    plugins: [
        "import",
        "promise"
    ],
    parserOptions: {
        ecmaFeatures: {
            impliedStrict: true
        },
        ecmaVersion: 2021,
        sourceType: "module"
    },
    rules: {
        "array-bracket-newline": ["error", "consistent"],
        "array-element-newline": ["warn", "consistent"],
        "capitalized-comments": "warn",
        "class-methods-use-this": "warn",
        "dot-location": ["error", "property"],
        "eol-last": ["error", "never"],
        "func-style": "off",
        "function-call-argument-newline": ["error", "consistent"],
        "function-paren-newline": ["warn", "consistent"],
        "handle-callback-err": ["error", "^.*(e|E)rr"], // deprecated in v7.0.0
        "id-length": ["warn", { "exceptions": ["a", "b", "c", "e", "i", "j", "k", "t", "x", "y", "z"] }],
        "implicit-arrow-linebreak": "off",
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "jsx-quotes": ["error", "prefer-single"],
        "line-comment-position": "off",
        "max-len": ["warn", { "code": 150 }],
        "max-lines": ["warn", { "max": 300, "skipBlankLines": true, "skipComments": true }],
        "max-lines-per-function": ["warn", { "max": 50, "IIFEs": true, "skipBlankLines": true, "skipComments": true }],
        "max-params": ["warn", 5],
        "max-statements": "off",
        "multiline-comment-style": "warn",
        "multiline-ternary": ["error", "always-multiline"],
        "new-cap": ["error", { "capIsNewExceptions": ["Router"] }],
        "newline-per-chained-call": "off",
        "no-confusing-arrow": "warn",
        "no-console": "warn",
        "no-constructor-return": "warn",
        "no-continue": "off",
        "no-else-return": ["error", { allowElseIf: true }],
        "no-extra-parens": ["error", "all", { "ignoreJSX": "multi-line", "nestedBinaryExpressions": false }],
        "no-inline-comments": "off",
        "no-magic-numbers": "off",
        "no-nested-ternary": "warn",
        "no-ternary": "off",
        "no-undefined": "off",
        "no-underscore-dangle": ["warn", { "allow": ["_id"] }],
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
        "no-use-before-define": ["error", "nofunc"],
        "no-useless-escape": "warn",
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
        "one-var": ["error", "never"],
        "operator-linebreak": ["error", "before"],
        "padded-blocks": ["error", "never"],
        "quote-props": ["error", "consistent-as-needed"],
        "quotes": ["error", "single"],
        "sort-imports": ["error", { "ignoreCase": true }],
        "sort-keys": ["warn", "asc", { "caseSensitive": false, "natural": true }],
        "space-before-function-paren": ["error", "never"],
        "spaced-comment": ["warn", "always", { "exceptions": ["/", "*", "-"] }]
    }
};