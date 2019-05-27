'use strict'

const wrap = require('wrap-ansi')

const formatCommit = ({
  body,
  breakingNotes,
  emoji,
  issues,
  releaseNotes,
  subject,
  type,
}) => {
  const maxLineWidth = 100

  const wrapOptions = {
    hard: true,
  }

  // Create commit starting with header limited to 100 chars
  let formattedCommit = `${type}: ${subject.trim()}${emoji ? ` ${emoji}` : ''}`.slice(
    0,
    maxLineWidth,
  )

  // --- Commit body ---

  if (body) formattedCommit += `\n\n${wrap(body, maxLineWidth, wrapOptions)}`

  // --- Commit footer ---

  const breaking = breakingNotes ? `BREAKING CHANGE: ${breakingNotes.trim()}` : null
  const note = releaseNotes ? `RELEASE NOTES: ${releaseNotes.trim()}` : null
  const closes = issues
    ? issues
        .split(', ')
        .map(issue => `Closes ${issue}`)
        .join(', ')
    : null

  const footer = [breaking, note, closes]
    .filter(i => i) // Filter out falsey values
    .map(i => wrap(i, maxLineWidth, wrapOptions)) // Wrap each section
    .join('\n\n') // Delineate
  if (footer) formattedCommit += `\n\n${footer}`

  return formattedCommit
}

module.exports = { formatCommit }
