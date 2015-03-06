module.exports = {
	all: {
		options: {
			client: false,
			pretty: true
		},
		files: [{
			cwd: 'src/content',
			src: '**/*.jade',
			dest: 'dist/',
			expand: true,
			ext: ".html"
		}]
	}
};