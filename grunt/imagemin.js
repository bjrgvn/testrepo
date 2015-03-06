module.exports = {
	all: {
		files: [{
			expand: true,
			cwd: 'src/',
			src: ['**/*.{png,jpg,gif}'],
			dest: 'dist/'
		}]
	}
}