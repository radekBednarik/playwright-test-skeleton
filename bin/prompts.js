const prompts = require("prompts");

const cliPrompt = async () => {
  const questions = [
    {
      type: "select",
      name: "language",
      message: "Select language",
      choices: [
        { title: "JavaScript", value: "js" },
        { title: "TypeScript", value: "ts" },
      ],
    },
    {
      type: "select",
      name: "precommitHooks",
      message: "Set up precommit hooks for linting and formatting?",
      choices: [
        { title: "Yes", value: true },
        { title: "No", value: false },
      ],
      initial: 0,
    },
  ];

  return await prompts(questions);
};

module.exports = { cliPrompt };
