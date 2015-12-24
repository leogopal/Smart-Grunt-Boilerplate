// Gruntfile.js

module.exports = function(grunt) {
  var path = require('path');

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/config'),
    jitGrunt: {
      customTasksDir: 'grunt/tasks'
    },

    data: {
      dirSass: 'src/sass', // accessible with '<%= dirSass %>'
      dirCss: 'build/css', // accessible with '<%= dirCss %>'
    }

  });
};
