module.exports = function(grunt) {
  grunt.initConfig({
	  
    sass: {
	  dist: {
		options: {                       
          style: 'expanded'
        },
		
	    files: {
		  'style.css': 'style.scss'
	    }
	  }
    },
	
	
	copy: {
	  main: {
		files: [
		  {expand: true, src: ['style.css', 'style.css.map'], dest: 'assets/css', filter: 'isFile' },
		  {expand: true, src: ['assets/**', '!assets/images/**'], dest: '..\\..\\..\\jayWilkinson', filter: 'isFile'},
		],
	  },
	},
		
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-move');
  
  grunt.registerTask('default', ['sass', 'copy']);
};