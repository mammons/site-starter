var autoprefixer  = require('autoprefixer'),
    cssImport     = require('postcss-import'),
    postcss       = require('gulp-postcss'),
    hexrgba       = require('postcss-hexrgba'),
    cssvars       = require('postcss-simple-vars'),
    nested        = require('postcss-nested'),
    mixins        = require('postcss-mixins'),
    gulp          = require('gulp');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, hexrgba, nested, autoprefixer]))
        .on('error', function(err) {
          console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/prod/styles'));
});
