// grunt/config/watch.js

module.exports = {
  sass: {
    files: ['<%= dirSass %>/*.{sass,scss}'],
    tasks: ['sass:dev']
  }
};
