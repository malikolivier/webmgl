// Gruntfile.js
module.exports = function (grunt) {
  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // configure standard to validate js files -----------------------------------
    standard: {
      options: {
        format: true
      },
      app: {
        src: [
          '**/*.js', '!node_modules/**', '!test/jasmine*/**'
        ]
      }
    },

    watch: {
      js: {
        files: ['**/*.js', '!node_modules/**', '!test/jasmine*/**'],
        tasks: ['standard']
      }
    }
  })

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-standard')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['watch'])
}
