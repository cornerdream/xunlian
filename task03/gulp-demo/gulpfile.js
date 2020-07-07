const {src,dest,series,parallel,watch} = require('gulp');
const loadPlugins = require('gulp-load-plugins');
const plugins = loadPlugins();
const del = require('del');
const browserSync = require('browser-sync');
const bs = browserSync.create();
const style = ()=>{
    return src('src/assets/styles/*.scss',{base:'src'})
            .pipe(plugins.sass())
            .pipe(dest('dist'));
}
const script = ()=>{
    return src('src/assets/scripts/*.js',{base:'src'})
            .pipe(plugins.babel({presets:['@babel/preset-env']}))
            .pipe(dest('dist'))
}
const page = ()=>{
    return src('src/*.html',{base:'src'})
            .pipe(plugins.swig())
            .pipe(dest('dist'))
}
const image = ()=>{
    return src('src/assets/images/**',{base:'src'})
            .pipe(plugins.imagemin())
            .pipe(dest('dist'))
}
const font = ()=>{
    return src('src/assets/fonts/**',{base:'src'})
            .pipe(plugins.imagemin())
            .pipe(dest('dist'))
}
const clean = ()=>{
    return del(['dist'])
}
const serve = ()=>{
    watch('src/assets/style/*.scss',style);
    watch('src/assets/scripts/*.js',script);
    watch('src/*.html',page);
    watch(['image','font'],bs.reload);
    bs.init({
        server:{
            baseDir:'dist'
        }
    })
}
const compile = parallel(style,script,page);
const build = series(clean,parallel(compile,image,font));
const develop = series(compile,serve);
module.exports = {
    compile,
    build,
    develop
}
