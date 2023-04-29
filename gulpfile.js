var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task("build", function(cb) {
    exec('npx tailwindcss -i ./css/styles.css -o ./dist/output.css', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    })
});