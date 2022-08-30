[![CodeQL](https://github.com/Chema22R/eslint-config/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Chema22R/eslint-config/actions/workflows/codeql-analysis.yml)
[![MIT License](https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667)](LICENSE)

# ESLint Config

ESLint basic configuration for personal projects.


## Installation

```
npm install --save-dev eslint-config-chema22r
```


## Usage

This ESLint config adds the rules modularly, depending on the needs of the project. Those are the possible extensions and their requirements:

| Extension ID | Aim | Requirements (plugins) |
|:-------------|:------------:|:-----------------------:|
| [eslint-config-chema22r](./index.js) | Frontend <br/> Backend | [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) <br/> [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) |
| [eslint-config-chema22r/jest](./jest.js) | Frontend | [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) |
| [eslint-config-chema22r/mocha](./mocha.js) | Backend | [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) |
| [eslint-config-chema22r/mongo](./mongo.js) | Backend | - |
| [eslint-config-chema22r/node](./node.js) | Backend | [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node) |
| [eslint-config-chema22r/react](./react.js) | Frontend | [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) <br/> [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) |

> All the extensions are compatible and can be combined.

> All the extensions include a default configuration that can be overwritten (parserOptions, rules, settings, etc.).

> All the extensions requirements must be installed or some of the imported rules might not work. E.g.: the extension [eslint-config-chema22r](./index.js) imports a custom set of rules based on the extensions `eslint:all`, `plugin:import/recommended` and `plugin:promise/recommended` so in this case, not installing the plugin [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) or [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) will disable all the rules related to the corresponding plugin, but the eslint rules will still be enabled.


# Examples

## Frontend Example Using React and Jest

```json
{
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "chema22r",
        "chema22r/jest",
        "chema22r/react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "impliedStrict": true,
            "jsx": true
        },
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "rules": {}
}
```

> In this example, the `env` and `parserOptions` fields are completely optional since they were already imported through the extensions used. Setting a different configuration here will merge and overwrite the imported one from the extensions. **Important example: the imported `parserOptions` looks exactly as in the example, so if we set a different one locally as `"parserOptions": { "ecmaFeatures": { "jsx": false } }`, only the field `jsx` will be overwritten, keeping all remaining fields intact, even the `impliedStrict` field within `ecmaFeatures`.**

## Backend Example Using Node.js, MongoDB and Mocha

```json
{
    "env": {
        "es2021": true,
        "mocha": true,
        "mongo": true,
        "node": true
    },
    "extends": [
        "chema22r",
        "chema22r/mocha",
        "chema22r/mongo",
        "chema22r/node"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "impliedStrict": true
        },
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "rules": {}
}
```

> In this example, the `env` and `parserOptions` fields are completely optional since they were already imported through the extensions used. Setting a different configuration here will merge and overwrite the imported one from the extensions. **Important example: the imported `env` looks exactly as in the example, so if we set a different one locally as `"env": { "es2019": true }`, no field will be overwritten, keeping all remaining fields intact, even the `es2021` field.**