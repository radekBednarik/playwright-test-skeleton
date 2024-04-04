#!/usr/bin/env node

const { join } = require("path");
const { execSync } = require("child_process");
const { platform } = require("os");
const { copy } = require("fs-extra");

const projectDir = process.cwd();
const templateDir = join(__dirname, "../templates/ts");

copy(templateDir, projectDir, (err) => {
  if (err)
    throw Error(
      `Copying from ${templateDir} to ${projectDir} failed with error: ${err}`
    );
});

const opts = { cwd: projectDir, stdio: "inherit" };

console.log("Creating skeleton project...");

// init git repo
execSync("git init && git branch -m main", opts);
console.log("git repo initialized");

// install deps
execSync("npm i", opts);
console.log("basic deps installed");

// create default precommit hooks
execSync("npx mrm@2 lint-staged", opts);
console.log("default precommit hooks created");

// finish playwright setup
if (platform === "linux") {
  execSync("npx playwright install-deps", opts);
}
execSync("npx playwright install", opts);
