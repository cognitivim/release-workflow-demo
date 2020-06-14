const conventionalCommitTypes = require('conventional-commit-types').types;

/* todo: docs
   https://github.com/conventional-changelog/commitlint/blob/e6c85a7fc5ef92fed53fdf87e3bfbdda2af17f9a/%40commitlint/types/src/load.ts#L57
   https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-conventionalcommits/parser-opts.js


--- TODO

revert
wip

FOR SRC
 feat
 fix
 perf
 refactor
 style

FOR PROJECT (INFRA)
 chore
 build
 ci
 docs ?
 test

FOR SCOPES
 (project): chore, docs
 (github): ci
 (package.json): build
 (yarn): build
 (webpack): build
 (changelog): docs
 (oss): docs

 (<package-name>): <FOR SRC>

*/

const SCOPE_NAMES = [
  'github',
  'changelog',
  'package',
  'dev-infra',
  'docs-infra',
  'packaging',
  'changelog'
]; // todo

// https://github.com/commitizen/conventional-commit-types/blob/master/index.json
const TYPE_NAMES = [
  ...Object.keys(conventionalCommitTypes),
  'wip',
  // -- 'chore' todo: angular not use (https://github.com/angular/angular/blob/8154bbd538/.ng-dev/config.ts#L7)
  // ++ 'release', todo: angular use
];

// "50/72" commit message formatting rule  // todo: angular 120
const MAX_HEADER_LENGTH = 50;
const MAX_LINE_LENGTH = 72;


module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    /**
     * defaults
     *

       'body-leading-blank': [2, 'always'],
       'body-max-length': [2, 'always', 'Infinity'],
       'body-max-line-length': [2, 'always', 'Infinity'],
       'body-min-length': [2, 'always', 0],
       'footer-leading-blank': [2, 'always'],
       'footer-max-length': [2, 'always', 'Infinity'],
       'footer-max-line-length': [2, 'always', 'Infinity'],
       'footer-min-length': [2, 'always', 0],
       'header-case': [2, 'always', 'lowerCase'],
       'header-full-stop': [2, 'always', '.'],
       'header-max-length': [2, 'always', 72],
       'header-min-length': [2, 'always',  0],
       'references-empty': [2, 'never'],
       'scope-enum': [2, 'always', []],
       'scope-case': [2, 'always', 'lowerCase'],
       'scope-empty': [2, 'never'],
       'scope-max-length': [2, 'always', 'Infinity'],
       'scope-min-length': [2, 'always', 0],
       'subject-case': [2, 'always', 'lowerCase'],
       'subject-empty': [2, 'never'],
       'subject-full-stop': [2, 'never', '.'],
       'subject-max-length': [2, 'always', 'Infinity'],
       'subject-min-length': [2, 'always', 0],
       'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert']],
       'type-case': [2, 'always', 'lower-case'],
       'type-empty': [2, 'never'],
       'type-max-length': [2, 'always', 'Infinity'],
       'type-min-length': [2, 'always', 0],
       'signed-off-by': [2, 'always', 'Signed-off-by'],

       // not documented:

       'body-empty'
       'body-case'
       'footer-empty'

     */

    /**
     * extended (@commitlint/config-conventional)
     *

       'body-max-line-length': [2, 'always', 100],
       'footer-max-line-length': [2, 'always', 100],
       'scope-case': [2, 'always', 'lower-case'],
       'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
       'subject-empty': [2, 'never'],
       'subject-full-stop': [2, 'never', '.'],
       'type-case': [2, 'always', 'lower-case'],
       'type-empty': [2, 'never'],

       'body-leading-blank': [1, 'always'],
       'footer-leading-blank': [1, 'always'],
       'header-max-length': [2, 'always', 100],
       'type-enum': [2, 'always', ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']],

     */

    /**
     * overrided
     */
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', MAX_LINE_LENGTH],
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', MAX_LINE_LENGTH],
    'header-max-length': [2, 'always', MAX_HEADER_LENGTH],
    'type-enum': [2, 'always', TYPE_NAMES],

    /**
     * optional
     */
    'scope-enum': [1, 'always', SCOPE_NAMES],

    /**
     * default (not used)
     *

       'body-max-length'
       'body-min-length'
       'footer-max-length'
       'footer-min-length'
       'header-case'
       'header-full-stop'
       'header-min-length'
       'references-empty'
       'scope-empty'
       'scope-max-length'
       'scope-min-length'
       'subject-max-length'
       'subject-min-length'
       'type-max-length'
       'type-min-length'
       'signed-off-by'

       // not documented:

       'body-empty'
       'body-case'
       'footer-empty'

     */
  },
  /**
   * default (not used)
   *

     ignores
     defaultIgnores
     formatter
     plugins

   */
};
