module.exports = {

    // Task options
    options: {
        limit: 3
    },

    // Dev tasks
    devFirst: [
        'clean',
        'jshint'
    ],
    devSecond: [
        'jade',
        'sass:dev',
        'uglify',
        'copy:dev'
    ],

    // Production tasks
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'jade',
        'sass:prod',
        'uglify',
        'copy:prod'
    ],

    // Image tasks
    imgFirst: [
        'imagemin'
    ]
};