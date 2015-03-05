module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'src/scripts/*.js'
        ],
        tasks: [
            'jshint',
            'copy',
            'uglify'
        ]
    },

    styles: {
        files: [
            'src/styles/*.scss'
        ],
        tasks: [
            'sass:dev'
        ]
    },

    jade: {
        files: [
            'src/jade/*.jade'
        ],
        tasks: [
            'jade'
        ]
    }
};