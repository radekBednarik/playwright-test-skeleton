const prompts = require("prompts");

export const cliPrompt = async () => {
  const questions = [
    {
      type: "multiselect",
      name: "language",
      message: "Select language",
      choices: [
        { title: "JavaScript", value: "js" },
        { title: "TypeScript", value: "ts" },
      ],
    },
    {
      type: "multiselect",
      name: "precommitHooks",
      message: "Set up precommit hooks for linting and formatting?",
      choices: [
        { title: "Yes", value: true },
        { title: "No", value: false },
      ],
    },
  ];

  return await prompts[questions];
};
