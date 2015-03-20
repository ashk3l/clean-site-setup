module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			task: {
				src: ['source'], 
				dest: 'destination'
			},
			options: {
				'mangle': {},
				'compress': {},
				'beautify': false,
				'expression': false,
				'report': 'min',
				'sourceMap': false,
				'sourceMapName': undefined,
				'sourceMapIn': undefined,
				'sourceMapIncludeSources': false,
				'enclose': undefined,
				'wrap': undefined,
				'exportAll': false,
				'preserveComments': undefined,
				'banner': '',
				'footer': ''
			}
		},
		sass: {
			task: {
				src: ['source'], 
				dest: 'destination'
			},
			options: {
				'sourcemap': 'auto',
				'trace': false,
				'unixNewlines': false,
				'check': false,
				'style': 'nested',
				'precision': 3,
				'quiet': false,
				'compass': false,
				'debugInfo': false,
				'lineNumbers': false,
				'loadPath': [],
				'require': [],
				'cacheLocation': '.sass-cache',
				'noCache': false,
				'bundleExec': false,
				'banner': '',
				'update': false
			}
		},
		autoprefixer: {
			task: {
				src: ['source'], 
				dest: 'destination'
			},
			options: {
				'browsers': ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
				'cascade': true,
				'diff': false,
				'map': false,
				'silent': false
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['uglify', 'sass', 'autoprefixer']);
};