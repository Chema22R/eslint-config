module.exports = {
    env: {
        es2021: true
    },
    extends: [
        'eslint:all'
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
        "array-element-newline": ["error", "consistent"],
        "dot-location": ["error", "property"],
        "eol-last": ["error", "never"],
        "func-style": "off",
        "function-call-argument-newline": ["error", "consistent"],
        "handle-callback-err": ["error", "^.*(e|E)rr"],
        "jsx-quotes": ["error", "prefer-single"],
        "line-comment-position": "off",
        "max-len": ["error", { "code": 140 }],
        "max-statements": "off",
        "max-params": "off",
        "multiline-ternary": ["error", "always-multiline"],
        "newline-per-chained-call": "off",
        "no-extra-parens": ["error", "all", { "ignoreJSX": "multi-line", "nestedBinaryExpressions": false }],
        "no-inline-comments": "off",
        "no-magic-numbers": "off",
        "no-ternary": "off",
        "no-use-before-define": ["error", "nofunc"],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
        "one-var": ["error", { "separateRequires": true, "var": "always" }],
        "operator-linebreak": ["error", "before"],
        "padded-blocks": ["error", "never"],
        "quote-props": ["error", "consistent-as-needed"],
        "quotes": ["error", "single"],
        "sort-imports": ["error", { "ignoreCase": true }],
        "sort-keys": ["error", "asc", { "caseSensitive": false, "natural": true }],
        "space-before-function-paren": ["error", "never"]
    }
};