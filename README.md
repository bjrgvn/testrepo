# Simple Grunt Setup for SCSS

Based on Matt Bailey's "[A beginners guide to grunt (redux)](http://mattbailey.io/a-beginners-guide-to-grunt-redux/)". He explains what each of these tasks do in detail in his awesome article.

It uses **load-grunt-config** to clean up the Gruntfile.js file and split up its contents across multiple files.

This is mainly for learning purposes and to speed up my own process. Use at your own risk. :)

## Getting started

### Project directories
	grunt/
	src/
	src/images/
	src/scripts/
	src/styles/
	src/content/

### Install grunt-cli & bower globally:
`npm install -g grunt-cli bower`

### Run NPM Install
`npm install`

### Run Bower Install
`bower install`

### NPM Dependencies

#### Dependencies installed
- time-grunt
- jshint-stylish
- grunt
- load-grunt-config 
- grunt-concurrent 
- grunt-contrib-clean 
- grunt-contrib-imagemin 
- grunt-sass 
- grunt-contrib-uglify 
- grunt-contrib-jshint 
- grunt-contrib-watch

### Bower Dependencies
- Bootstrap

## To-do's
- Copy assets into `dist`