module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "overrides": [
      {
        "files": [
          "*.ts"
        ],
        "parserOptions": {
          "project": "tsconfig.json",
          "createDefaultProgram": true,
          "tsconfigRootDir": __dirname,
          "sourceType": "module",
          "ecmaFeatures": {
            "jsx": true,
            "modules": true
          }
        },
        "extends": [
          "next/core-web-vitals",
          "plugin:prettier/recommended"
        ],
        "rules": {
          "prettier/prettier": [
            "error",
            {
                "bracketSpacing": true,
                "printWidth": 140,
                "semi": true,
                "singleQuote": true,
                "trailingComma": "all",
                "arrowParens": "always"
            }
          ],
          "lines-between-class-members": [
              "error",
              "always",
              {"exceptAfterSingleLine": true}
          ],
          // turn off core rules
          "no-shadow": "off",
          "no-unused-vars": "off",
          "camelcase": "off",
          "class-methods-use-this": "off",
          "no-process-exit": "off",
          // turn on typescript rules
          // "@typescript-eslint/no-shadow": ["error"],
          // "@typescript-eslint/no-unused-vars": ["error"],
          "import/prefer-default-export": "off"
        }
      },
      {
        "files": [
          "*.html"
        ],
        "rules": {}
      }
    ]
  }
