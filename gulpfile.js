var gulp=require('gulp');
var yuidoc=require('gulp-yuidoc');
var minify=require('gulp-minify-css');
var uglify=require('gulp-uglify');
var rev = require('gulp-rev'); 
var revReplace = require("gulp-rev-replace");


//先将所有文件拷贝
gulp.task('copyfile', function() {
    return gulp.src(['src/image/*','src/script/lib/*'], {base: 'src' } //如果设置为 base: 'js' 将只会复制 js目录下文件, 其他文件会忽略
    ).pipe(gulp.dest('dist/'));
});

//生成项目里的组件，木块的文档
gulp.task('doc',function(){
	return gulp.src(['src/*/plugin/*.js','src/*/service/*.js'])
	.pipe(yuidoc())
	.pipe(gulp.dest('doc/'))
});

//压缩js
gulp.task('uglify',function(){
	return gulp.src(['src/*/plugin/*.js','src/*/service/*.js'],{base:'src'})
	.pipe(uglify())
	.pipe(rev())
	.pipe(gulp.dest('dist/'))
	.pipe(rev.manifest())//- 生成一个rev-manifest.json
	.pipe(gulp.dest('rev/js')); 
});

//压缩css
gulp.task('minify',function(){
	return gulp.src('src/css/*.css',{base:'src'})
	.pipe(minify())
	.pipe(rev())
	.pipe(gulp.dest('dist/'))
	.pipe(rev.manifest())//- 生成一个rev-manifest.json
	.pipe(gulp.dest('rev/css')); 
});

gulp.task("autobulid",['copyfile','doc','uglify','minify'],function(){
	var manifest = gulp.src("rev/*/rev-manifest.json");
	return gulp.src("src/*.html")
    .pipe(revReplace({manifest: manifest}))
  	.pipe(gulp.dest('dist'));
});


gulp.task("revreplace", function(){
  var jsFilter = filter(['src/**/*.js', '!src/script/lib'], {restore: true});
  var cssFilter = filter("src/css/*.css", {restore: true});
	var userefAssets = useref.assets();
  return gulp.src("src/*.html")
  	.pipe(userefAssets)      // Concatenate with gulp-useref 
    .pipe(jsFilter)
    .pipe(uglify())             // Minify any javascript sources 
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(minify())               // Minify any CSS sources 
    .pipe(cssFilter.restore)
    .pipe(rev())                // Rename the concatenated files 
    .pipe(userefAssets.restore())
    .pipe(useref())
    .pipe(revReplace())         // Substitute in new filenames 
    .pipe(gulp.dest('dist'));
});


    // .pipe(gulp.dest('public'));
    // .pipe(revReplace({manifest: manifest}))
  	//var manifest = gulp.src("rev/rev-manifest.json");
 	  // return gulp.src("src/*.html")
  	//   .pipe(revReplace({manifest: manifest}))
  	//   .pipe(gulp.dest('dist'));


//gulp.task('default', ['minify', 'rev']);


// gulp.task('css', function () {
//     return gulp.src('src/css/*.css',{base:'src'})
//       .pipe(rev())
//       .pipe(gulp.dest('dist'))
//       .pipe(rev.manifest())
//       .pipe(gulp.dest('rev'));
// });


// gulp.task('strreplace', function(){
//   gulp.src(['src/*.html'])
//     .pipe(replace('common', 'common.min'))
//     .pipe(gulp.dest('dist/'));
// });

