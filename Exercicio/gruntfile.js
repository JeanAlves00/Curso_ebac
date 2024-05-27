module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      dist: {
        files: {
          'build/style/style.css': 'src/style/main.less'
        }
      }
    },
    watch: {
      less: {
        files: ['src/style/**/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'watch']);

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  grunt.registerTask('log', 'Log some stuff.', function() {
    grunt.log.writeln('Logging some stuff...');
  });

  grunt.task.run('log');
};
