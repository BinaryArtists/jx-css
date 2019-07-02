var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat'); 

/**
 * 定义less编译任务
 */
gulp.task('build', function () {
    gulp.src(['src/index.less', 'src/flex.less']) //需要编译的less文件
        .pipe(less())
        .pipe(autoprefixer({ //添加浏览器兼容的前缀
            browsers: [
                'ie >= 8',
                'ie_mob >= 10',
                'ff >= 26',
                'chrome >= 30',
                'safari >= 6',
                'opera >= 23',
                'ios >= 5',
                'android >= 2.3',
                'bb >= 10'
            ]
        }))
        .pipe(concat('index.acss')) //- 合并后的文件名
        .pipe(cssmin()) //- 压缩处理成一行
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist')); //编译后输出目录
});

/**
 * 当less文件发生改变时，重新编译less
 */
// gulp.watch('src/*.less', ['build']);