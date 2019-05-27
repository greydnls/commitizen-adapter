'use strict'

const { formatCommit } = require('./format-commit')

// Commit details: body, breakingNotes, issues, releaseNotes, subject, type

describe('Commit details formatting', () => {
  test('When there is a type and subject, then they are formatted as the commit header', () => {
    expect(
      formatCommit({
        type: 'New',
        subject: 'Test commit formatting',
      }),
    ).toMatchSnapshot()
  })

  test('When the header is longer than 100 chars, then it is truncated', () => {
    expect(
      formatCommit({
        type: 'New',
        subject:
          'Test commit formatting a really long commit that is longer than 100 characters so it should get sliced',
      }),
    ).toMatchSnapshot()
  })

  test('When a commit emoji is selected, then it is appended to the header', () => {
    expect(
      formatCommit({
        type: 'New',
        subject: 'Test commit emoji',
        emoji: '💖',
      }),
    ).toMatchSnapshot()
  })

  test('When the commit body is longer than 100 chars, then it is wrapped', () => {
    expect(
      formatCommit({
        type: 'New',
        subject: 'Test commit formatting',
        body:
          'This is a longer description of the commit, its over 100 chars so it should be wrapped onto multiple lines but not truncated',
      }),
    ).toMatchSnapshot()
  })

  test('When the commit has breaking changes, then it is appended to the footer', () => {
    expect(
      formatCommit({
        type: 'New',
        subject: 'Test commit emoji',
        breakingNotes: 'This commit includes breaking changes!',
      }),
    ).toMatchSnapshot()
  })

  test('When the commit has release notes, then it is appended to the footer', () => {
    expect(
      formatCommit({
        type: 'New',
        subject: 'Test commit emoji',
        releaseNotes: 'We have worked on this release a long time!',
      }),
    ).toMatchSnapshot()
  })

  test('When the commit closes issues, then it is appended in the footer', () => {
    expect(
      formatCommit({
        type: 'New',
        subject: 'Test commit emoji',
        issues: 'crystal-ball/prettier#47, #98',
      }),
    ).toMatchSnapshot()
  })

  test('Every feature works perfectly 😅', () => {
    expect(
      formatCommit({
        type: 'New',
        subject: 'Mega commit',
        emoji: '💖',
        breakingNotes: 'This part of the package has to be updated',
        releaseNotes: 'Its been a long journey, but worth it',
        issues: 'crystal-ball/prettier#47, #98',
      }),
    ).toMatchSnapshot()
  })
})
