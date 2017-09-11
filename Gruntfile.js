module.exports = function(grunt) {

	var deployFile = 'deploy_settings.json';
	    deployInfo = {};

	if (grunt.file.exists(deployFile)) {
		deployInfo = grunt.file.readJSON(deployFile);
	}

	grunt.initConfig({
		sshconfig: {
			production: {
				host:       deployInfo.host,
				username:   deployInfo.username,
				privateKey: deployInfo.privateKey,
				passphrase: deployInfo.passphrase,
				deployTo:   deployInfo.deployTo
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

	grunt.loadNpmTasks('grunt-sync-deploy');
	grunt.option('config', 'production');

	// TODO: purge Cloudflare Cache after deployment
	grunt.registerTask('deploy', 'syncdeploy');

	grunt.registerTask('default', function() {
		console.log('Please use Gulp. 😌');
	});

};
