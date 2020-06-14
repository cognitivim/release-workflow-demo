const conventionalCommitTypes = require('conventional-commit-types').types;
const commitlintConfig = require('./.commitlintrc');

const DEFAULT_TYPES = {
  ...conventionalCommitTypes,
  'wip': {
    'description': 'Work in progress',
    'title': null
  }
};

const typeNames = commitlintConfig.rules['type-enum'][2];
const typeNameMaxLength = typeNames.reduce((prevKey, currKey) => prevKey.length > currKey.length ? prevKey : currKey).length;

function getTypeDescription(typeName) {
  const defaultType = DEFAULT_TYPES[typeName];
  const delimiter = ":";
  return defaultType
    ? `${(typeName + delimiter).padEnd(typeNameMaxLength + delimiter.length)} ${defaultType.description}`
    : typeName;
}


/**
 * cz-customizable adapter config
 */
module.exports = {
  /**
   * defaults
   *

   types: undefined,
   typePrefix: '',
   typeSuffix: '',
   scopes: undefined,
   scopeOverrides: {},
   allowBreakingChanges: undefined,
   skipQuestions: [],
   ticketNumberPrefix: undefined,
   allowTicketNumber: undefined,
   isTicketNumberRequired: undefined,
   ticketNumberRegExp: undefined,

   subjectSeparator: ': ',
   appendBranchNameToCommitMessage: true,
   breakingPrefix: 'BREAKING CHANGE:',
   footerPrefix: 'ISSUES CLOSED:',
   breaklineChar: '|',
   upperCaseSubject: false,
   askForBreakingChangeFirst: false,
   messages: {
       type: "Select the type of change that you're committing:",
       scope: '\nDenote the SCOPE of this change (optional):',
       customScope: 'Denote the SCOPE of this change:',
       subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
       body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
       breaking: 'List any BREAKING CHANGES (optional):\n',
       footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
       confirmCommit: 'Are you sure you want to proceed with the commit above?',
       ticketNumber: 'Enter the ticket number:\n',
       // ticketNumberPattern: `Enter the ticket number following this pattern (${config.ticketNumberRegExp})\n`
     },

   allowCustomScopes: false,
   subjectLimit: 100,

   */

  /**
   * required
   */
  types: typeNames.map(value => ({ value, name: getTypeDescription(value) })),

  /**
   * optional
   */
  allowCustomScopes: commitlintConfig.rules['scope-enum'][0] !== 2,
  subjectLimit: commitlintConfig.rules['header-max-length'][2],
  scopes: commitlintConfig.rules['scope-enum'][2].map(name => ({ name })),
  allowBreakingChanges: [
    'feat',
    'fix',
    // 'refactor'
  ],
  allowTicketNumber: true,
  ticketNumberPrefix: '#', // todo: require("conventional-changelog-conventionalcommits").issuePrefixes[0]
  isTicketNumberRequired: false,
  ticketNumberRegExp: '\\d{1,5}'

  /**
   * default (not used)
   *

   typePrefix
   typeSuffix
   scopeOverrides
   skipQuestions
   subjectSeparator
   appendBranchNameToCommitMessage
   breakingPrefix
   footerPrefix
   breaklineChar
   upperCaseSubject
   askForBreakingChangeFirst
   messages

   */
};
