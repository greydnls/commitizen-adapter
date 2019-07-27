'use strict'

const { padRight, longest } = require('./utils')

const commitEmojis = [
  {
    name: '💖 (New features)',
    value: '💖',
  },
  {
    name: '✨ (Updates and improvements)',
    value: '✨',
  },
  {
    name: '🔧 (Bug fixing)',
    value: '🔧',
  },
  {
    name: '🚧 (WIP)',
    value: '🚧',
  },
  {
    name: '🔥 (Code removal)',
    value: '🔥',
  },
  {
    name: '📝 (Documentation)',
    value: '📝',
  },
  {
    name: '✅ (Tests changes)',
    value: '✅',
  },
  {
    name: '🚀 (Release/Deploy changes)',
    value: '🚀',
  },
  {
    name: '🆙 (Dependencies update)',
    value: '🆙',
  },
  {
    name: '💥 (Breaking changes)',
    value: '💥',
  },
  {
    name: '🔮✨ (Contains magic)',
    value: '🔮✨',
  },
]

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
  Test: {
    description: 'Tests additions and updates',
    title: 'Tests changes',
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
    description: 'Internal changes (e.g.: refactoring and configs)',
    title: 'Chores',
  },
  Release: {
    description: 'Release/Deploy project',
    title: 'Release',
  },
}
const typesOrder = ['New', 'Update', 'Fix', 'Chore', 'Docs', 'Test', 'Upgrade', 'Release']

const titleLength = longest(commitTypes)
const formattedTypeChoices = Object.keys(commitTypes)
  .sort((a, b) => typesOrder.indexOf(a) > typesOrder.indexOf(b))
  .map(key => ({
    name: `${padRight(key, titleLength)}  ${commitTypes[key].description}`,
    value: key,
  }))

module.exports = { commitEmojis, commitTypes: formattedTypeChoices }
