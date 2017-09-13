const gulp = require('gulp');
const sass = require('gulp-sass');
const copy = require('gulp-copy');
const watch = require('gulp-watch');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const connect = require('gulp-connect-php');
const nunjucks = require('gulp-nunjucks-api');
const replaceExt = require('gulp-ext-replace');
const browsersync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const moveToDirectoryIndexes = require('gulp-move-to-directory-indexes');

function reload(done) {
	browsersync.reload();
	done();
}

gulp.task('html', () =>
	gulp.src(['src/index.njk', 'src/pages/**/*.njk'])
		.pipe(nunjucks({src: 'src/'}))
		.pipe(htmlmin({
			collapseWhitespace: true,
			minifyCSS: true,
			minifyJS: true,
			removeComments: false
		}))
		.pipe(replaceExt('.php'))
		.pipe(moveToDirectoryIndexes({extensions: '.php'}))
		.pipe(gulp.dest('dist'))
);

gulp.task('sass', () =>
	gulp.src('src/assets/css/*.sass')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('dist/assets/css/'))
		.pipe(browsersync.stream())
);

gulp.task('copy', () =>
	gulp.src(['src/*', '!src/index.njk', 'src/assets/img/*', 'src/assets/php/*'])
		.pipe(copy('dist', {prefix: 1}))
);

gulp.task('scripts', () =>
	gulp.src('src/assets/js/*.js')
		.pipe(uglify())
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/assets/js'))
);

gulp.task('html-watch', ['html'], reload);
gulp.task('scripts-watch', ['scripts'], reload);
gulp.task('copy-watch', ['copy'], reload);

gulp.task('serve', () => {
	let serverConf = {
		base: 'dist/',
		port: 2205,
		stdio: 'ignore' // don't display php server log
	};

	connect.server(serverConf, function() {
		browsersync.init({
			proxy: 'localhost:2205', // local server
			notify: false // disables Browsersync pop-over
		});
	});

	gulp.watch(['src/index.njk', 'src/templates/**/*.njk', 'src/pages/**/*.njk'], ['html-watch']);
	gulp.watch('src/assets/css/**/*.sass', ['sass']);
	gulp.watch(['src/*', '!src/index.njk', 'src/assets/img/*', 'src/assets/php/*'], ['copy-watch']);
	gulp.watch('src/assets/js/**/*.js', ['scripts-watch']);
});

gulp.task('default', ['serve']);
gulp.task('default', ['html', 'sass', 'copy', 'scripts', 'serve']);
