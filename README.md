# Playwright Test skeleton project generator

This package will create a basic template of Playwright Test project with following properties:

- language is Typescript
- ESLint config file for linting is created
- Prettier is installed
- Eslint and Prettier git precommit hooks are created
- basic example tests are created in `/tests` folder

## Preconditions

- Node.js LTS installed
- git installed
- OS is supported by Playwright (Win10+, Ubuntu, Debian, MacOs). Details are [HERE](https://playwright.dev/docs/intro#system-requirements)

## Installation

- open you shell and switch to the folder, where you want to have your test project files
- run `npx playwright-test-skeleton`
- in case you are on Linux, you will have to provide your `sudo` password when installing Playwright linux dependencies

## Verify

- run `npx playwright test` - test should run, no errors in console.
