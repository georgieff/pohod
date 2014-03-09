module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: 'sass/**/*.scss',
        tasks: ['compass:dev', 'cssmin:minify']
      }
    },
    compass: {
      // dist: {
      //   options: {
      //     sassDir: 'sass',
      //     cssDir: 'css',
      //     environment: 'production'
      //   }
      // },
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['watch:css']);
  grunt.registerTask('dev', ['watch:css_dev']);

};
