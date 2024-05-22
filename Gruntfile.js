module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.exists('package.json') ? grunt.file.readJSON('package.json') : {},

        // Configuração do plugin Less para desenvolvimento e produção
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/*.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/*.less'
                }
            }
        },

        // Configuração do plugin Watch para observar mudanças nos arquivos Less
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development', 'less:production'], // Adiciona a tarefa de minificação
                options: {
                    spawn: false // Evita problemas de inicialização do Windows
                }
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean: ['prebuild']
    });

    // Carrega as tarefas do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    // Tarefa padrão para desenvolvimento
    grunt.registerTask('default', ['watch']);

    // Tarefa para compilação de produção
    grunt.registerTask('build', ['less:production', 'replace:dist', 'htmlmin:dist', 'clean']);
};
