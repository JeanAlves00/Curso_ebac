module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['less']
                },
                files: {
                    'aula/styles.css': 'src/styles/*.less'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'aula/main.min.js': ['src/js/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};