/* Just adding a comment. */
var gulp = require('gulp');
var aws = require('gulp-aws');

gulp.task('stage', function() {
    return gulp.src('public/**/*', {buffer: false})
        .pipe(
            aws.s3('marketing.qa.upcontent', {
                aws_profile: 'upcontent',
                cache_control: 'max-age=300, must-revalidate',
                preserve_paths: true
            })
        );
});

gulp.task('publish', function() {
    return gulp.src('public/**/*', {buffer: false})
        .pipe(
            aws.s3('production.upcontent.com', {
                aws_profile: 'upcontent',
                cache_control: 'max-age=300, must-revalidate',
                preserve_paths: true
            })
        );
});

gulp.task('default', function() {
  // place code for your default task here
});
