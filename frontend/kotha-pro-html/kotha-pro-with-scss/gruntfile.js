module.exports = function(grunt) {

	grunt.initConfig({
	  concat: {

		sass: {
		  src: ['scss/**/*.scss'],
		  dest: 'scss/output.scss',
		},
	  },
	});


  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);

};