var gulp = require('gulp');
var sass = require('gulp-sass');
var jsmin = require("gulp-uglify");//压缩js
var yasuocss = require("gulp-minify-css");//压缩css
var jsold = "need/mobile/*.js";
var jsnew = "need/mobiles";
//压缩js
gulp.task('jsmin',function(){
  gulp.src(jsold)
  .pipe(jsmin())
  .pipe(gulp.dest(jsnew));
});
//压缩css
gulp.task("yasuocss",function(){
	gulp.src("cssss/*")
	.pipe(yasuocss())
	.pipe(gulp.dest("csss"));
});
gulp.task('sass',function() {
	return gulp.src('sass/*.*').pipe(sass()).pipe(gulp.dest('css'));
})
gulp.task('default',['sass','watch']);
gulp.task('watch',function(){
	return gulp.watch('sass/*.*',['sass']);
})