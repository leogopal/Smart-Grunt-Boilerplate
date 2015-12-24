// grunt/config/concat.js

module.exports = {
  options : {
   separator  : '; \n \n',  // safety ; and 16 line breaks
  },
	dev : {
      src   : [
          '<%= dirs.jsBuild %>/includes.js',
          '<%= dirs.jsScripts %>/main.js',
          '!<%= dirs.jsBuild %>/all.min.js'
        ],
      dest  : '<%= dirs.jsBuild %>/all.min.js'
      },
};
