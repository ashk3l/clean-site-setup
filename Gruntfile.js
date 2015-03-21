module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'js/src/*.js', // All JS in the libs folder
				],
				dest: 'js/dist/production.js',
			}
		},

		uglify: {
			build: {
				src: 'js/dist/production.js',
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
					style: 'compressed'
				},
				files: {
					'css/dist/main.css': 'src/**/*.scss'
				}
			} 
		},

		autoprefixer: {
			dist: {
				files: {
					'css/dist/main.css': 'src/**/*.scss' 
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
				tasks: ['sass', 'autoprefixer'],
				options: {
					spawn: false,
					livereload: true,
				}
			} 
		},
        
        browserSync: {
                bsFiles: {
                    src : 'css/dist/*.css'
                },
                options: {
                    server: {
                        baseDir: "./"
                    }
                }
            }

	});

	// 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-devtools');
    grunt.loadNpmTasks('grunt-browser-sync');

	// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin']);

	grunt.registerTask('dev', ['browserSync', 'watch']);

};