'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-jsonlint');

  grunt.initConfig({

    jsonlint: {
      sample: {
        src: [ '*.json' ]
      }
    }

  });

  // Default task.
  grunt.registerTask('default', 'jsonlint');

  // Travis CI task.
  grunt.registerTask('travis', 'jsonlint');

};
