'use strict'

const { formatCommit } = require('./lib/format-commit')
const { commitTypes, commitEmojis } = require('./lib/commit-choices')

module.exports = {
  // When a user runs `git cz`, prompter will be executed. We pass you cz,
  // which currently is just an instance of inquirer.js. Using this you can
  // ask questions and get answers.
  //
  // The commit callback should be executed when you're ready to send back a
  // commit template to git.
  //
  // By default, we'll de-indent your commit template and will keep empty
  // lines.
  prompter: (cz, commit) => {
    // eslint-disable-next-line no-console
    console.log(
      '\nLine 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.\n',
    )

    // Let's ask some questions of the user so that we can populate our commit
    // template.
    //
    // See inquirer.js docs for specifics. You can also opt to use another
    // input collection library if you prefer.
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: "Select the type of change that you're committing:",
        choices: commitTypes,
      },
      {
        type: 'input',
        name: 'subject',
        message: 'Write a short, imperative tense description of the change:\n',
      },
      // --- Emoji
      {
        type: 'confirm',
        name: 'hasEmoji',
        message: 'Append an emoji to commit header?',
        default: false,
      },
      {
        type: 'list',
        name: 'emoji',
        choices: commitEmojis,
        message: 'Commit emoji:',
        when: answers => answers.hasEmoji,
      },
      // --- Long description
      {
        type: 'confirm',
        name: 'hasDescription',
        message: 'Include a longer description of the change?',
        default: false,
      },
      {
        type: 'input',
        name: 'body',
        message: 'Commit description:',
        when: answers => answers.hasDescription,
      },
      // --- Close issues
      {
        type: 'confirm',
        name: 'hasIssues',
        message: 'Does this change affect any open issues?',
        default: false,
      },
      {
        type: 'input',
        name: 'issues',
        message: 'List any issue closed (#1, ...):\n',
        when: answers => answers.hasIssues,
      },
      // --- Release notes
      {
        type: 'confirm',
        name: 'hasReleaseNotes',
        message: 'Include additional release notes?',
        default: false,
      },
      {
        type: 'input',
        name: 'releaseNotes',
        message: 'Release notes:\n',
        when: answers => answers.hasReleaseNotes,
      },
      // --- Breaking changes
      {
        type: 'confirm',
        name: 'hasBreaking',
        message: 'Are there any breaking changes?',
        default: false,
      },
      {
        type: 'input',
        name: 'breakingNotes',
        message: 'Breaking changes:\n',
        when: answers => answers.hasBreaking,
      },
    ]).then(answers => {
      commit(formatCommit(answers))
    })
  },
}
