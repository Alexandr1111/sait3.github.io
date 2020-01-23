var gulp=require('gulp');
var less=require('gulp-less');
var cssmin=require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');
//var browser_sync=require('browser-sync').stream();

function compile(done){
gulp.src('./styles/**/*.less')      //choose less
.pipe(less())                       //transform into css
.pipe(cssmin())
.on('error', console.error.bind(console))
	.pipe(autoprefixer(['last 10 versions', '> 1%', 'ie 8', 'ie 7'],
					{ cascade: true }))        
.pipe(gulp.dest('./style/')); 
done();    
}

function watch_less(done){
	gulp.watch('styles/style.less', compile)
}


gulp.task('default', gulp.parallel(compile, watch_less));