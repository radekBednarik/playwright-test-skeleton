#!/usr/bin/env node

const { join } = require("path");
const { execSync } = require("child_process");
const { platform } = require("os");
const { copy } = require("fs-extra");

const projectDir = process.cwd();
const templateDir = join(__dirname, "../templates/ts");

console.log("Creating skeleton project...");

copy(templateDir, projectDir, (err) => {
  if (err)
    throw Error(
      `Copying from ${templateDir} to ${projectDir} failed with error: ${err}`
    );

  const opts = { cwd: projectDir };

  // init git repo
  execSync("git init", opts);

  // install deps
  execSync("npm install", opts);
  console.log("basic deps installed");

  // create default precommit hooks
  execSync("npx mrm@2 lint-staged", opts);
  console.log("default precommit hooks created");

  // finish playwright setup
  if (platform === "linux") {
    execSync("npx playwright install-deps", opts);
  }
  execSync("npx playwright install", opts);
  console.log("Playwright setup finished");
});

console.log("Skeleton project created");
