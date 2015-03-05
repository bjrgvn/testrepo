module.exports = {
    dev: {
        files:[
        // jquery
            {
                nonull: true,
                expand: true,
                cwd: 'bower_components/jquery/dist/',
                src: 'jquery.js',
                dest: 'dist/vendor/js/'
            },
        // bootstrap
            {
                nonull: true,
                expand: true,
                cwd: 'bower_components/bootstrap/dist/css/',
                src: 'bootstrap.css',
                dest: 'dist/vendor/css/'
            },
            {
                nonull: true,
                expand: true,
                cwd: 'bower_components/bootstrap/dist/js/',
                src: 'bootstrap.js',
                dest: 'dist/vendor/js/'
            }
        ],
    },

    prod: {
        files:[
        // jquery
            {
                expand: true,
                cwd: 'bower_components/jquery/dist/',
                src: 'jquery.min.js',
                dest: 'dist/vendor/js/'
            },
        // bootstrap
            {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/css/',
                src: 'bootstrap.min.css',
                dest: 'dist/vendor/css/'
            },
            {
                expand: true,
                cwd: 'bower_components/bootstrap/dist/js/',
                src: 'bootstrap.min.js',
                dest: 'dist/vendor/js/'
            }
        ],
    }
};