'use strict'

const commitTypes = {
  Fix: {
    description: 'A bug fix',
    title: 'Bug fixes',
  },
  Update: {
    description: 'A backwards-compatible enhancement',
    title: 'Updates',
  },
  Docs: {
    description: 'Documentation change',
    title: 'Docs',
  },
  Build: {
    description: 'Build process update',
    title: 'Build changes',
  },
  New: {
    description: 'A new feature implementation',
    title: 'New features',
  },
  Upgrade: {
    description: 'Dependency upgrade',
    title: 'Upgrades',
  },
  Chore: {
    description: 'Other changes (e.g.: refactoring)',
    title: 'Chores',
  },
}

const commitEmojis = {
  breaking: '💥 (Breaking changes)',
  configs: '⚙️ (Configuration changes)',
  docs: '📝 (Documentation)',
  fix: '🛠 (Bug fixing)',
  new: '💖 (New features)',
  pruning: '🔥 (Code removal)',
  release: '🚀 (Release/Deploy changes)',
  tests: '✅ (Tests changes)',
  update: '✨ (Updates and improvements)',
  wip: '🚧 (WIP)',
}

module.exports = { commitTypes, commitEmojis }
