"use strict";

const conventionalChangelogConfig = require('./conventional-changelog.config');

// todo github secrets
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const tarballDir = 'release';
const t = {
  ci: false,
  debug: true,

  "branches": ["master", "next"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/git",
    "@semantic-release/npm"
  ],
  "verifyConditions": [
    {
      "path": "@semantic-release/changelog",
      "changelogFile": "CHANGELOG.md",
      "changelogTitle": "# Changelog"
    },
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github"
  ],
  "prepare": [
    {
      "path": "@semantic-release/changelog",
      "changelogFile": "CHANGELOG.md"
    },
    "@semantic-release/npm",
    {
      "path": "@semantic-release/git",
      "assets": [
        "CHANGELOG.md",
        "package.json",
        "package-lock.json",
        "npm-shrinkwrap.json",
        "dist",
        "README.md",
        "docs"
      ],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }
  ],
  "publish": [
    {
      "path": "@semantic-release/npm",
      "npmPublish": false
    },
    {
      "path": "@semantic-release/github"
    }
  ],
  "success": ["@semantic-release/github"],
  "fail": ["@semantic-release/github"]
};
const t2 = {
  /**
   * default (https://github.com/semantic-release/semantic-release/blob/master/lib/get-config.js#L68)
   *

     extends: undefined,
     repositoryUrl: , // repository property in package.json or git origin url
     dryRun: false, // false if running in a CI environment, true otherwise
     ci: true,
     debug: false,
     branches: [
       '+([0-9])?(.{+([0-9]),x}).x',
       'master',
       'next',
       'next-major',
       {name: 'beta', prerelease: true},
       {name: 'alpha', prerelease: true},
     ],
     tagFormat: `v\${version}`,
     plugins: [
       '@semantic-release/commit-analyzer',
       '@semantic-release/release-notes-generator',
       '@semantic-release/npm',
       '@semantic-release/github'
     ],

   */


    branches: "master",
    tagFormat: "v${version}",
    npmPublish: false,
  ci: false, // todo
  debug: true,
  // branches: ['master'], // todo

  plugins: [
    ['@semantic-release/commit-analyzer', {
      /**
       * default
       *

         "config": undefined,
         "parserOpts": undefined,
         "presetConfig": undefined,
         "preset": "angular",
         "releaseRules": [
           {breaking: true, release: 'major'},
           {revert: true, release: 'patch'},
           // Angular
           {type: 'feat', release: 'minor'},
           {type: 'fix', release: 'patch'},
           {type: 'perf', release: 'patch'},
           // Atom
           {emoji: ':racehorse:', release: 'patch'},
           {emoji: ':bug:', release: 'patch'},
           {emoji: ':penguin:', release: 'patch'},
           {emoji: ':apple:', release: 'patch'},
           {emoji: ':checkered_flag:', release: 'patch'},
           // Ember
           {tag: 'BUGFIX', release: 'patch'},
           {tag: 'FEATURE', release: 'minor'},
           {tag: 'SECURITY', release: 'patch'},
           // ESLint
           {tag: 'Breaking', release: 'major'},
           {tag: 'Fix', release: 'patch'},
           {tag: 'Update', release: 'minor'},
           {tag: 'New', release: 'minor'},
           // Express
           {component: 'perf', release: 'patch'},
           {component: 'deps', release: 'patch'},
           // JSHint
           {type: 'FEAT', release: 'minor'},
           {type: 'FIX', release: 'patch'},
         ],

       */

      /**
       * extended (conventional-changelog-conventionalcommits preset)
       *

         // https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-conventionalcommits/parser-opts.js
         parserOpts: {
           headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/,
           breakingHeaderPattern: /^(\w*)(?:\((.*)\))?!: (.*)$/,
           headerCorrespondence: [
             'type',
             'scope',
             'subject'
           ],
           noteKeywords: ['BREAKING CHANGE'],
           revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
           revertCorrespondence: ['header', 'hash'],
           issuePrefixes: ["#"]
         },

         // https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-conventionalcommits/writer-opts.js#L162
         presetConfig: {
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
           issueUrlFormat: "{{host}}/{{owner}}/{{repository}}/issues/{{id}}",
           commitUrlFormat: "{{host}}/{{owner}}/{{repository}}/commit/{{hash}}",
           compareUrlFormat: "{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}",
           userUrlFormat: "{{host}}/{{user}}",
           issuePrefixes: ["#"]
         },

       */

      /**
       * overrided
       */
      preset: 'conventionalcommits',
      presetConfig: conventionalChangelogConfig,

      /**
       * optional
       */
      releaseRules: [
        /**
         * extended todo: check merge
         *

           { breaking: true, release: 'major' },
           { revert: true, release: 'patch' },

           // minor
           { type: 'feat', release: 'minor' },

           // patch
           { type: 'fix', release: 'patch' },
           { type: 'perf', release: 'patch' },

         */

        // patch
        { type: 'chore', release: 'patch' },
        { type: 'refactor', release: 'patch' },
        { type: 'revert', release: 'patch' },
        { type: 'style', release: 'patch' },
        { type: 'docs', release: 'patch' }, // todo  "scope":"README"
        { type: 'ci', release: 'patch' },
        { type: 'test', release: 'patch' },
        { type: 'wip', release: 'patch' }, // todo ?

        // no release
        { type: 'ci', release: false },
        { type: 'build', release: false },
        // { scope: 'no-release', release: false }
      ],
      /**
       * defaults (not used)
       *

         parserOpts
         config

       */
    }],
    ['@semantic-release/release-notes-generator', {
      /**
       * default
       *

         presetConfig: undefined,
         parserOpts: undefined,
         writerOpts: undefined,
         config: undefined,
         preset: 'angular',
         linkCompare: true,
         linkReferences: true,
         host: 'https://github.com',
         commit: 'commit',
         issue: 'issues',

       */

      /**
       * extended (conventional-changelog-conventionalcommits preset)
       *

          // https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-conventionalcommits/parser-opts.js
          parserOpts: {
            headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/,
            breakingHeaderPattern: /^(\w*)(?:\((.*)\))?!: (.*)$/,
            headerCorrespondence: [
              'type',
              'scope',
              'subject'
            ],
            noteKeywords: ['BREAKING CHANGE'],
            revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
            revertCorrespondence: ['header', 'hash'],
            issuePrefixes: ["#"]
          },

          // https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-conventionalcommits/writer-opts.js#L57
          writerOpts: {
            transform: (commit, context) => {
              // https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-conventionalcommits/writer-opts.js#L66-L138
            },
            groupBy: 'type',
            commitGroupsSort: (a, b) => {
              // https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-conventionalcommits/writer-opts.js#L144-L151
            },
            commitsSort: ['scope', 'subject'],
            noteGroupsSort: 'title',
            notesSort: compareFunc
          }

       */

      /**
       * overrided
       */
      preset: 'conventionalcommits',
      presetConfig: conventionalChangelogConfig,
      // todo
      // "writerOpts": {
      //   "commitsSort": ["subject", "scope"]
      // }

      /**
       * defaults (not used)
       *

       parserOpts
       writerOpts
       config

       */
    }],
    // todo
    '@semantic-release/changelog',
    ['@semantic-release/npm',
      {
        tarballDir,
      // todo
        "npmPublish": false
    }
    ],

    ["@semantic-release/git",
      {
        "assets": ["CHANGELOG.md", "package.json"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }
    ],

      ['@semantic-release/github',
        {
      /**
       * default (https://github.com/semantic-release/github/blob/master/lib/resolve-config.js)
       *

       assets: undefined,
       assignees: undefined,
       githubUrl: env.GITHUB_API_URL || env.GH_URL || env.GITHUB_URL,
       githubApiPathPrefix: env.GH_PREFIX || env.GITHUB_PREFIX || '',
       proxy: env.HTTP_PROXY,
       successComment: , // https://github.com/semantic-release/github/blob/master/lib/get-success-comment.js
       failComment: , // https://github.com/semantic-release/github/blob/master/lib/get-fail-comment.js
       failTitle: 'The automated release is failing 🚨',
       labels: ['semantic-release'],
       releasedLabels: [`released<%= nextRelease.channel ? \` on @\${nextRelease.channel}\` : "" %>`],

       // (not documented)
       // githubToken: env.GH_TOKEN || env.GITHUB_TOKEN,

       */

      assets: [
        { path: `${tarballDir}/*.tgz`, label: "test.tgz" }
      ],

      //todo: https://github.com/semantic-release/github#environment-variables
      }
      ],
  ],

  /**
   * defaults (not used)
   *

      extends
      repositoryUrl
      branches
      tagFormat
      dryRun

   */

};
const t3 = {
  branch: 'master',
  tagFormat: '${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/npm',
      {
        // tarballDir,
        // todo
        "npmPublish": false
      }
    ],
    ['@semantic-release/github', //{
      // assets: [
      //   { path: `${tarballDir}/*.tgz`, label: "test.tgz" }
      // ],
    // }
    ],
    "@semantic-release/git",
  ],
  "verifyConditions": [
    "@semantic-release/npm",
    "@semantic-release/github",
    "@semantic-release/git",
    // "@semantic-release/changelog"
  ],
  "prepare": [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    {
      "path": "@semantic-release/git",
      "assets": ["CHANGELOG.md", "package.json"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }
  ]
};

module.exports = {
  branch: 'master',
    plugins: [
  [
    '@semantic-release/commit-analyzer',
    {
      preset: 'conventionalcommits',
      releaseRules: [
        { breaking: true, release: 'major' },
        { revert: true, release: 'patch' },

        // -- minor
        { type: 'feat', release: 'minor' },
        { type: 'feature', release: 'minor' },

        // -- patch
        { type: 'fix', release: 'patch' },
        { type: 'bugfix', release: 'patch' },
        { type: 'hotfix', release: 'patch' },
        { type: 'chore', release: 'patch' },
        { type: 'perf', release: 'patch' },
        { type: 'refactor', release: 'patch' },
        { type: 'improvement', release: 'patch' },
        { type: 'revert', release: 'patch' },
        { type: 'style', release: 'patch' },
        { type: 'docs', release: 'patch' },
        { type: 'ci', release: 'patch' },
        { type: 'test', release: 'patch' },

        // -- no release
        { type: 'ci', release: false },
        { type: 'build', release: false },
        { type: 'release', release: false },
        { scope: 'no-release', release: false },
      ],
    },
  ],
  [
    '@semantic-release/release-notes-generator',
    {
      // using conventionalcommits here since the angular preset does not allow custom
      // types for release notes generation.
      preset: 'conventionalcommits',
      presetConfig: {
        types: [
          // { type: 'major', section: 'Breaking' },
          // { type: 'breaking', section: 'Breaking' },
          { type: 'feat', section: '🧩 Features' },
          { type: 'feature', section: '🧩 Features' },
          { type: 'fix', section: '🔧 Fixes' },
          { type: 'bugfix', section: '🔧 Fixes' },
          { type: 'hotfix', section: '🔧 Fixes' },
          { type: 'chore', section: '💉 Improvements' },
          { type: 'perf', section: '💉 Improvements' },
          { type: 'refactor', section: '💉 Improvements' },
          { type: 'improvement', section: '💉 Improvements' },
          { type: 'style', section: '💉 Improvements' },
          { type: 'docs', section: '📚 Docs' },

          { type: 'ci', section: '⚙ Internals', hidden: true },
          { type: 'build', section: '⚙ Internals', hidden: true },
          {
            type: 'release',
            section: '⚙ Internals',
            hidden: true,
          },
        ],
      },
    },
  ],
  '@semantic-release/changelog',
  '@semantic-release/npm',
  '@semantic-release/github',
  '@semantic-release/git',
],
  // verifyConditions: ['@semantic-release/npm', '@semantic-release/github', '@semantic-release/git'],
  // prepare: [
  // '@semantic-release/changelog',
  // '@semantic-release/npm',
  // {
  //   path: '@semantic-release/git',
  //   message:
  //     'release: <%= nextRelease.version %> - <%= new Date().toISOString() %> [skip ci]\n\n<%= nextRelease.notes %>',
  // },
  // ],
};
