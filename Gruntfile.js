module.exports = function(grunt) {

	var deployFile = 'deploy_info.json';
	    deployInfo = {};

	if (grunt.file.exists(deployFile)) {
		deployInfo = grunt.file.readJSON(deployFile);
	}

	grunt.initConfig({
		copy: {
			main: {
				expand: true,
				cwd: 'src',
				src: ['**', '!css/**/*',],
				dest: 'dist/',
			},
		},

		sass: {
			main: {
				options: {
					style: 'compressed',
					compass: true
				},
				files: {
					'dist/css/main.css': 'src/css/main.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				map: true
			},
			main: {
				src: 'dist/css/main.css'
			}
		},

		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true
			},
			main: {
				files: [
					{
						expand: true,
						cwd: 'dist/',
						src: '**/*.html',
						dest: 'dist/',
						ext: '.html'
					}
				]
			}
		},

		watch: {
			options: {
				livereload: true,
				spawn: true
			},

			html: {
				files: 'src/**/*.html',
				tasks: 'copy'
			},

			jade: {
				files: 'src/**/*.jade',
				tasks: 'jade'
			},

			css: {
				files: 'src/css/**/*.{sass,scss}',
				tasks: 'sass'
			},

			img: {
				files: 'src/img/**/*.{jpg,png}',
				tasks: 'copy'
			}
		},

		sshconfig: {
			production: {
				host:     '<%= deployInfo.host %>',
				username: '<%= deployInfo.username %>',
				password: '<%= deployInfo.password %>'
			}
		},

		syncdeploy: {
			main: {
				cwd: 'dist/',
				src: ['**/*', '.htaccess']
			},
			options: {
				removeEmpty: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.option('config', 'production');

	grunt.registerTask('build',      ['copy', 'sass', 'autoprefixer']);
	grunt.registerTask('build-prod', ['build', 'htmlmin']);
	grunt.registerTask('deploy',     ['build-prod', 'syncdeploy']);
	grunt.registerTask('default',    ['build', 'watch']);

};
