module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    images: {
        files: [
            'src/**/*.{png,jpg,gif}'
        ],
        tasks: [
            'img'
        ]
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
            'src/content/*.jade'
        ],
        tasks: [
            'jade'
        ]
    }
};