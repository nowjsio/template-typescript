# Template with TypeScript
A template for a project using typescript without react

## Features
- code convention
    - eslint
        - airbnb-base, airbnb-typescript
    - prettier
- third party packages
    - jest
    - webpack

## Technologies
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org)
[![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)](https://prettier.io)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io)
[![webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)](https://redux.js.org)

## Getting Started
Tools needed to run this app: `node` and `npm`

- `npm install` to install dependencies
- `npm run build` to transcompile .ts files `[commonjs, esm, amd, umd, bundling(using commonjs, webpack), types]`
    - sample .ts files will be converted .js files into the `dist` folders.
- `npm install -g typescript ts-node`
    - `tsc` to transcompile .ts files
        - Since 'compiler option' is not defined in 'root/tsconfig.json', it will be converted to 'commonjs' in the `build` folder.
    - `ts-node ./src/index.ts`
        - You can check the result of the 'index.ts' file `without transcompiling`.
