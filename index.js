module.exports = {
    env: {
        es2021: true
    },
    extends: [
        'eslint:all',
        'plugin:promise/recommended'
    ],
    plugins: [
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
        "handle-callback-err": ["error", "^.*(e|E)rr"],
        "id-length": ["error", { "exceptions": ["a", "b", "i", "j", "k", "t", "x", "y", "z"] }],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "jsx-quotes": ["error", "prefer-single"],
        "line-comment-position": "off",
        "max-len": ["warn", { "code": 150 }],
        "max-lines": "warn",
        "max-lines-per-function": ["warn", { "IIFEs": true, "skipBlankLines": true, "skipComments": true }],
        "max-params": ["warn", 5],
        "max-statements": "off",
        "multiline-comment-style": "warn",
        "multiline-ternary": ["error", "always-multiline"],
        "new-cap": ["error", { "capIsNewExceptions": ["Router"] }],
        "newline-per-chained-call": "off",
        "no-await-in-loop": "warn",
        "no-confusing-arrow": "warn",
        "no-console": "warn",
        "no-constructor-return": "warn",
        "no-extra-parens": ["error", "all", { "ignoreJSX": "multi-line", "nestedBinaryExpressions": false }],
        "no-inline-comments": "off",
        "no-magic-numbers": "off",
        "no-nested-ternary": "warn",
        "no-ternary": "off",
        "no-undefined": "off",
        "no-underscore-dangle": "warn",
        "no-unused-vars": "warn",
        "no-use-before-define": ["error", "nofunc"],
        "no-useless-escape": "warn",
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
        "one-var": ["error", { "separateRequires": true, "var": "always" }],
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