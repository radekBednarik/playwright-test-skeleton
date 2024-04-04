#!/usr/bin/env node

const { copyFileSync, readdirSync } = require("fs");
const { join } = require("path");
const { execSync } = require("child_process");
const { platform } = require("os");

const projectDir = process.cwd();
const templateDir = join(__dirname, "../templates/ts");

readdirSync(templateDir).forEach((file) => {
  const sFile = join(templateDir, file);
  const dFile = join(projectDir, file);

  copyFileSync(sFile, dFile);
});

const opts = { cwd: projectDir, stdio: "inherit" };

console.log("Creating skeleton project...");

// init git repo
execSync("git init", opts);
console.log("git repo initialized");

// install deps
execSync("npm i", opts);
console.log("basic deps installed");

// create default precommit hooks
execSync("npx mrm@2 lint-staged", opts);
console.log("default precommit hooks created");

// finish playwright setup
execSync("npx playwright install", opts);
if (platform === "linux") {
  execSync("npx playwright install-deps", opts);
}
