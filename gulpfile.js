const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const del = require('del');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const postcssObjectFit = require('postcss-object-fit-images');
const postcssColorRgbaFallback = require("postcss-color-rgba-fallback")
const postcssOpacity = require('postcss-opacity')
const rename = require("gulp-rename");
const responsive = require('gulp-responsive');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const rfs = require('rfs');
const plumber = require('gulp-plumber');
const json = require('json-file');

const packageJson = json.read('./package.json');

const server = browserSync.create();
const isProduction = process.env.NODE_ENV === 'production';

var plumberErrorHandler = {
	errorHandler: notify.onError({
		title: 'Gulp',
		message: 'Error: <%= error.message %>'
	})
};

const basePaths = {
	src: './assets/src/',
	dest: './assets/dist/',
}

const paths = {
	styles: {
		src: `${basePaths.src}styles/**/*.scss`,
		dest: `${basePaths.dest}styles/`,
	},
	scripts: {
		src: `${basePaths.src}scripts/theme.js`,
		dest: `${basePaths.dest}scripts/`,
		entry: `${basePaths.src}scripts/theme.js`,
	},
	detectors: {
		src: `${basePaths.src}scripts/detectors/**/*.js`,
		dest: `${basePaths.dest}scripts/`,
		entry: `${basePaths.src}scripts/detectors/detectors.js`,
	},
	plugins: {
		src: `${basePaths.src}scripts/plugins/**/*.js`,
		dest: `${basePaths.dest}scripts/`,
	},
	jquery: {
		src: `${basePaths.src}scripts/jquery.min.js`,
		dest: `${basePaths.dest}scripts/`,
	},
	images: {
		src: `${basePaths.src}images/**/*.{jpg,gif,png,svg}`,
		dest: `${basePaths.dest}images`,
	},
	appicon: {
		src: `${basePaths.src}icon/app-icon.png`,
		dest: `${basePaths.dest}images/app-icons`,
	},
	fonts: {
		src: `${basePaths.src}fonts/*`,
		dest: `${basePaths.dest}fonts`,
	},
	videos: {
		src: `${basePaths.src}videos/*`,
		dest: `${basePaths.dest}videos`,
	},
	files: {
		src: `${basePaths.src}files/*`,
		dest: `${basePaths.dest}files`,
	},
	templates: './**/*.{php,html,htm}',
};

const config = {
	sass: {
		outputStyle: 'compressed',
	},
	postcss: [
		postcssImport,
		postcssObjectFit,
		postcssColorRgbaFallback,
		postcssOpacity,
		rfs({ breakpoint: 767, enableRfs: false }),
		autoprefixer
	],
	imagemin: [
		imagemin.gifsicle({ interlaced: true }),
		imagemin.mozjpeg({ progressive: true, quality: 75 }),
		imagemin.optipng({ optimizationLevel: 5 }),
		imagemin.svgo({ plugins: [{ removeViewBox: true }] })
	],
	appicon: {
		'app-icon.png': [
			{
				width: 512,
				rename: 'favicon-512.png',
			},
			{
				width: 180,
				rename: 'apple-touch-icon.png',
			},
			{
				width: 196,
				rename: 'favicon-196x196.png',
			},
			{
				width: 32,
				rename: 'favicon-32x32.png',
			},
			{
				width: 16,
				rename: 'favicon-16x16.png',
			},
		],
	},
	terser: {
		dev: {
			keep_fnames: true,
			mangle: false,
			output: {
				beautify: true,
			},
		},
		prod: {
			keep_fnames: true,
			mangle: true,
			compress: {
				drop_console: true,
			},
		},
	},
	browsersync: {
		open: 'external',
		ui: false,
		notify: false,
		snippetOptions: {
			whitelist: ["/wp-admin/admin-ajax.php"], // whitelist checked first
        	blacklist: ["/wp-admin/**"]
		}
	}
};


// Update config for production.
if (isProduction) {
	config.postcss.push(cssnano);
}

if (packageJson.get('config.dev') !== '' && packageJson.get('config.dev') != 'localhost') {
	config.browsersync.host = packageJson.get('config.dev');
	config.browsersync.proxy = 'http://' + packageJson.get('config.dev');
}else{
	config.browsersync.server = true;
}

const clean = () => del(
	[basePaths.dest]
);

function styles() {
	return gulp.src(paths.styles.src)
		.pipe(plumber(plumberErrorHandler))
		.pipe(sourcemaps.init())
		.pipe(sass(config.sass).on('error', sass.logError))
		.pipe(postcss(config.postcss))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(server.reload({ stream: true }));

}


function images() {
	return gulp.src(paths.images.src)
		.pipe(newer(paths.images.dest))
		.pipe(imagemin(config.imagemin, { verbose: true }))
		.pipe(gulp.dest(paths.images.dest));
}

function appIcons() {
	return gulp.src(paths.appicon.src, { allowEmpty: true, })
		.pipe(newer(paths.images.dest))
		.pipe(responsive(config.appicon))
		.pipe(imagemin(config.imagemin, { verbose: true }))
		.pipe(gulp.dest(paths.appicon.dest));
}

function fonts() {
	return gulp.src(paths.fonts.src)
		.pipe(gulp.dest(paths.fonts.dest));
}

function videos() {
	return gulp.src(paths.videos.src)
		.pipe(gulp.dest(paths.videos.dest));
}

function files() {
	return gulp.src(paths.files.src)
		.pipe(gulp.dest(paths.files.dest));
}

function scripts() {
	return gulp.src(paths.scripts.src)
		.pipe(plumber(plumberErrorHandler))
		.pipe(sourcemaps.init())
		.pipe(concat('theme.js'))
		.pipe(terser(config.terser.dev))
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(rename("theme.min.js"))
		.pipe(terser(config.terser.prod))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.scripts.dest));
}

function detectors() {
	return gulp.src(paths.detectors.src)
		.pipe(concat('theme.detectors.js'))
		.pipe(terser(config.terser.dev))
		.pipe(gulp.dest(paths.detectors.dest))
		.pipe(rename("theme.detectors.min.js"))
		.pipe(terser(config.terser.prod))
		.pipe(gulp.dest(paths.detectors.dest));
}

function plugins() {
	return gulp.src(paths.plugins.src)
		.pipe(concat('theme.plugins.js'))
		.pipe(terser(config.terser.dev))
		.pipe(gulp.dest(paths.plugins.dest))
		.pipe(rename("theme.plugins.min.js"))
		.pipe(terser(config.terser.prod))
		.pipe(gulp.dest(paths.plugins.dest));
}

function jquery() {
	return gulp.src(paths.jquery.src)
		.pipe(gulp.dest(paths.jquery.dest));
}

function reload(done) {
	server.reload();
	done();
}

function serve() {
	server.init(config.browsersync);
	gulp.watch(paths.styles.src, gulp.series(buildStyles, reload));
	gulp.watch(paths.scripts.src, gulp.series(buildScripts, reload));
	gulp.watch(paths.images.src, gulp.series(images, reload));
	gulp.watch(paths.files.src, gulp.series(files));
	gulp.watch(paths.videos.src, gulp.series(videos));
	gulp.watch(paths.fonts.src, gulp.series(fonts));
	gulp.watch(paths.templates, gulp.series(reload));
	gulp.watch(paths.plugins.src, gulp.series(plugins));
	gulp.watch(paths.detectors.src, gulp.series(detectors));
	gulp.watch(paths.appicon.src, gulp.series(appIcons));
}

const buildStyles = gulp.series(styles);
const buildScripts = gulp.series(jquery, scripts);
const build = gulp.series(clean, gulp.parallel(buildStyles, buildScripts, detectors, plugins, images, appIcons, fonts, videos, files));

gulp.task('styles', buildStyles);
gulp.task('scripts', buildScripts);
gulp.task('images', images);
gulp.task('appIcons', appIcons);
gulp.task('watch', serve);
gulp.task('build', build);
gulp.task('default', build);
gulp.task('fonts', fonts);
gulp.task('files', fonts);
gulp.task('videos', videos);
gulp.task('jquery', jquery);
gulp.task('clean', clean);
gulp.task('detectors', detectors);
gulp.task('plugins', plugins);