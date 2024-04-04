#!/usr/bin/env node

const { join } = require("path");
const { execSync } = require("child_process");
const { platform } = require("os");
const { copy } = require("fs-extra");
const chalk = require("chalk");

const projectDir = process.cwd();
const templateDir = join(__dirname, "../templates/ts");

console.log(chalk.blue("Creating skeleton project...\n"));

copy(templateDir, projectDir, (err) => {
  if (err)
    throw Error(
      chalk.red(
        `Copying from ${templateDir} to ${projectDir} failed with error: ${err}`
      )
    );

  const opts = { cwd: projectDir };

  // init git repo with branch name as main
  console.log(chalk.green("Setting up git repo..."));
  execSync("git init", opts);

  // install deps
  console.log(chalk.green("Running npm install..."));
  execSync("npm install", opts);

  // create default precommit hooks
  console.log(chalk.green("Setting up precommit hooks..."));
  execSync("npx mrm@2 lint-staged", opts);

  // finish playwright setup
  if (platform() === "linux") {
    console.log(
      chalk.green(
        "Linux platform detected, setting up needed linux packages..."
      )
    );
    execSync("npx playwright install-deps", opts);
  }

  console.log(chalk.green("Installing Playwright browser binaries..."));
  execSync("npx playwright install", opts);

  console.log(chalk.blue("\nSkeleton project created"));
});
