const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cssmin = require('gulp-cssmin');
const imagemin = require ('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const webp = require('gulp-webp');
const child_process = require('child_process');

let path = {
    src:{
        css:'./assets/style/style.less',
        img:'./assets/image/**/*.{png,jpg,svg,webp}',
        html:'./assets/index.html',
    },
    build:'./public'
}

function css(){
    return gulp.src(path.src.css)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gcmq())
    .pipe(cssmin())
    .pipe(gulp.dest(path.build))
    
    
    // .pipe(browserSync.stream())
}

function html(){
    return gulp.src(path.src.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(path.build))
}


function img(){
    setTimeout(()=>{
        child_process.exec('rm ./assets/image/*.*');
    },10000);
    return gulp.src(path.src.img)
    .pipe(webp({
        quality:70
    }))
    .pipe(gulp.dest(path.build))
    .pipe(gulp.src(path.src.img))
    .pipe(imagemin({
        progressive:true,
        svgoPlugins:[{removeViewBox:false}],
        interlaced:true,
        optimizationLevel:3
    }))
    .pipe(gulp.dest(path.build))
}

function watch(){
    gulp.watch(['./assets/style/*.less'],css);
    gulp.watch([path.src.img],img);
    gulp.watch([path.src.html],html);
}

module.exports.css=css;
module.exports.img=img;
module.exports.watch=watch;