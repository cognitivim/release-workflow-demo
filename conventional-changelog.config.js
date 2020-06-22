const config = require("conventional-changelog-conventionalcommits");

module.exports = config(
  //{
  /**
   * default (https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-conventionalcommits/writer-opts.js#L162)
   *

   // An array of `type` objects representing the explicitly supported commit message types, and whether they should show up in generated `CHANGELOG`s
   types: [
     { type: 'feat', section: 'Features' },
     { type: 'feature', section: 'Features' },
     { type: 'fix', section: 'Bug Fixes' },
     { type: 'perf', section: 'Performance Improvements' },
     { type: 'revert', section: 'Reverts' },
     { type: 'docs', section: 'Documentation', hidden: true },
     { type: 'style', section: 'Styles', hidden: true },
     { type: 'chore', section: 'Miscellaneous Chores', hidden: true },
     { type: 'refactor', section: 'Code Refactoring', hidden: true },
     { type: 'test', section: 'Tests', hidden: true },
     { type: 'build', section: 'Build System', hidden: true },
     { type: 'ci', section: 'Continuous Integration', hidden: true }
   ],
   // A URL representing the issue format (allowing a different URL format to be swapped in for Gitlab, Bitbucket, etc).
   issueUrlFormat: "{{host}}/{{owner}}/{{repository}}/issues/{{id}}",
   // A URL representing a specific commit at a hash
   commitUrlFormat: "{{host}}/{{owner}}/{{repository}}/commit/{{hash}}",
   // A URL representing the comparison between two git SHAs.
   compareUrlFormat: "{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}",
   // A URL representing the a user's profile URL on GitHub, Gitlab, etc. This URL is used for substituting @bcoe with https://github.com/bcoe in commit messages.
   userUrlFormat: "{{host}}/{{user}}",
   // An array of prefixes used to detect references to issues
   issuePrefixes: ["#"],

   * not used in preset realisation spec (https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md):
   *
   *  //Boolean indicating whether or not the action being run (generating CHANGELOG, recommendedBump, etc.) is being performed for a pre-major release (<1.0.0).\n This config setting will generally be set by tooling and not a user.
   *  preMajor: false,
   *  // A string to be used to format the auto-generated release commit message.
   *  releaseCommitMessageFormat: "chore(release): {{currentTag}}",
   *  // A string to be used as the main header section of the CHANGELOG.
   *  header: "# Changelog\n\n"
   *
   */
//}
);
