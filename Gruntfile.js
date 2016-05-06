module.exports = function(grunt) {

	var deployFile = 'deploy_settings.json';
	    deployInfo = {};

	if (grunt.file.exists(deployFile)) {
		deployInfo = grunt.file.readJSON(deployFile);
	}

	grunt.initConfig({
		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: 'src',
						src: ['**', '!assets/css/**/*', '!_*/**', '.htaccess'],
						dest: 'dist/'
					},
					{
						expand: true,
						cwd: 'src/_pages/',
						src: '**/*.html',
						dest: 'dist/',
						rename: function(dest, src) {
							if (src.indexOf('index.html') == -1) {
								return dest + src.replace('.html', '/index.html');
							} else {
								return dest + src;
							}
						}
					}
				]
			}
		},

		sass: {
			main: {
				options: {
					style: 'compressed',
					compass: true
				},
				files: {
					'dist/assets/css/main.css': 'src/assets/css/main.sass'
				}
			}
		},

		autoprefixer: {
			options: {
				map: true
			},
			main: {
				src: 'dist/assets/css/main.css'
			}
		},

		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true,
				removeComments: false
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

			php: {
				files: 'src/**/*.php',
				tasks: 'copy'
			},

			jade: {
				files: 'src/**/*.jade',
				tasks: 'jade'
			},

			css: {
				files: 'src/assets/css/**/*.{sass,scss}',
				tasks: 'sass'
			},

			js: {
				files: 'src/assets/js/**/*.js',
				tasks: 'copy'
			},

			img: {
				files: 'src/assets/img/**/*.{jpg,png}',
				tasks: 'copy'
			}
		},

		sshconfig: {
			production: {
				host:     deployInfo.host,
				username: deployInfo.username,
				password: deployInfo.password,
				deployTo: deployInfo.deployTo
			}
		},

		syncdeploy: {
			main: {
				cwd: 'dist/',
				src: ['**/*', '.htaccess'],
				keepFiles: ['php/config.php']
			},
			options: {
				removeEmpty: true,
				serverTimezone: 'GMT+0000'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sync-deploy');

	grunt.option('config', 'production');

	grunt.registerTask('build',      ['copy', 'sass', 'autoprefixer']);
	grunt.registerTask('build-prod', ['build', 'htmlmin']);
	grunt.registerTask('deploy',     ['build-prod', 'syncdeploy']);
	grunt.registerTask('default',    ['build', 'watch']);

};
