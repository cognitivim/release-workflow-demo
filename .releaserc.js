module.exports = {
  plugins: [
    '@semantic-release/git'
    // "@semantic-release/commit-analyzer",
    // "@semantic-release/release-notes-generator",
    // "@semantic-release/changelog",
    // "@semantic-release/github",

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
