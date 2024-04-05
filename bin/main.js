#!/usr/bin/env node

const { join } = require("path");
const { execSync } = require("child_process");
const { platform } = require("os");
const {
  copySync,
  readFileSync,
  writeFileSync,
  renameSync,
} = require("fs-extra");
const { cliPrompt } = require("./prompts");
const chalk = require("chalk");

const projectDir = process.cwd();
const templateDir = join(__dirname, "../templates/ts");
const opts = { cwd: projectDir };

const adjustPackage = () => {
  function hasProp(obj, prop) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return true;
    }

    return false;
  }

  const pJson = JSON.parse(
    readFileSync(join(projectDir, "package.json"), { encoding: "utf-8" })
  );

  if (hasProp(pJson["lint-staged"], "*.js")) {
    delete pJson["lint-staged"]["*.js"];
  }

  if (hasProp(pJson["lint-staged"], "*.{js,css,md}")) {
    delete pJson["lint-staged"]["*.{js,css,md}"];
  }

  pJson["lint-staged"]["*.{js,ts}"] = ["eslint --cache", "prettier --write"];
  pJson["lint-staged"]["*.{md,json}"] = "prettier --write";

  writeFileSync(
    join(projectDir, "package.json"),
    JSON.stringify(pJson, null, 2)
  );
};

const renameFile = (originName, newName) => {
  renameSync(join(projectDir, originName), join(projectDir, newName));
};

const main = async () => {
  const choices = await cliPrompt();
  console.log(JSON.stringify(choices));
};

(async () => {
  await main();
})();

// console.log(chalk.blue("Creating skeleton project...\n"));

// copySync(templateDir, projectDir);
// renameFile("gitignore", ".gitignore");

// // init git repo with branch name as main
// console.log(chalk.green("Setting up git repo..."));
// execSync("git init", opts);

// // install deps
// console.log(chalk.green("Running npm install..."));
// execSync("npm install", opts);

// // create default precommit hooks
// console.log(chalk.green("Setting up precommit hooks..."));
// execSync("npx mrm@2 lint-staged", opts);
// // adjust package.json lint-staged prop to have needed values
// adjustPackage();

// // finish playwright setup
// if (platform() === "linux") {
//   console.log(
//     chalk.green("Linux platform detected, setting up needed linux packages...")
//   );
//   execSync("npx playwright install-deps", opts);
// }

// console.log(chalk.green("Installing Playwright browser binaries..."));
// execSync("npx playwright install", opts);

// console.log(chalk.blue("\nSkeleton project created"));
