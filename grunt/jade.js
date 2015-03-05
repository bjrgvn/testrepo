module.exports =  {
	prod: {
		options: {
			client: false,
			pretty: true
		},
		files: [{
			cwd: 'src/jade',
			src: '**/*.jade',
			dest: 'dist/',
			expand: true,
			ext: ".html"
		}]
	}
};