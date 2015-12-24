// grunt/config/sass.js

module.exports = {
	dev : {
        options : {
          outputStyle   : 'expanded',
          sourcemap     : true
         },
        files: {
            '<%= dirCss %>/file1.css': '<%= dirSass %>/file1.scss',
            '<%= dirCss %>/file2.css': '<%= dirSass %>/file2.scss'
        }
      }
};


