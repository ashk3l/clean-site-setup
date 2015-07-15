module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                 'js/src/*.js' // All JS in the libs folder
                ],
                dest: 'js/dist/concatenated-files.js',
            }
        },

        uglify: {
            build: {
                src: [
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'js/src/*.js'
                ],
                dest: 'js/dist/production.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/build/'
    }]
            }
        },

        sass: {
            dist: {
                options: {
                    compress: false,
                    sourcemap: 'none'
                },
                files: { // Dictionary of files
                    'css/dist/bootstrap.css': 'bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'css/dist/main.css': 'css/src/main.scss', // 'destination': 'source'
                }
            }
        },

        watch: {
            scripts: {
                files: ['js/src/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true,
                },
            },

            css: {
                files: ['css/src/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true,
                }
            }
        },

        browserSync: {
            bsFiles: {
                src: [
                   'css/dist/*.css',
                    'src/main.scss',
                    'js/dist/*.js',
                    '*.html'
                ]
            },
            options: {
                server: {
                    baseDir: "./"
                },
                    watchTask: true
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-devtools');
    grunt.loadNpmTasks('grunt-browser-sync');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify', 'sass', 'imagemin']);

    grunt.registerTask('dev', ['browserSync', 'watch']);

};