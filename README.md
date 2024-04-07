# Playwright Test skeleton project generator

This package will create a basic template of Playwright Test project with following properties:

- language is Typescript or JavaScript
- ESLint config file for linting is created
- Prettier is installed
- Eslint and Prettier git precommit hooks are created, if user wants to
- basic example tests are created in `/tests` folder
- basic example of Page Object Model page representation
- default Playwright Test configuration file is created

## Preconditions

- [Node.js](https://nodejs.org) LTS installed
  - versions 18.x and 20.x are supported and were tested
- git installed
- OS is supported by Playwright (Win10+, Ubuntu, Debian, MacOs). Details are [HERE](https://playwright.dev/docs/intro#system-requirements)

## Installation

- open you shell and switch to the folder, where you want to have your test project files
- run `npx playwright-test-skeleton`
- go thru CLI prompts to choose from language and precommit hooks options
- in case you are on Linux, you will have to provide your `sudo` password when installing Playwright linux dependencies

## Verify

- run `npx playwright test` - test should run, no errors in console.
