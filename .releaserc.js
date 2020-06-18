module.exports = {
  plugins: [
    // defaults

    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    //'@semantic-release/npm',
    //'@semantic-release/github'

    // '@semantic-release/git'
    // "@semantic-release/changelog",

  ],

  // run mode

  dryRun: true,
  ci: false,
  debug: true,

  // git repository

  // branches: 'master',
  // repositoryUrl: ,
  // tagFormat: ,
}
