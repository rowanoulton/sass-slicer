Slicer
=====

Sass Responsive 'slicer', a tool set for breakpoints and media queries


## Features

- All units are converted to em values
- Horizontal breakpoints
- Vertical breakpoints
- Orientation queries (coming)
- Resolution queries
- Media specific queries
- Tiny filesize


## Install

- [npm](http://npmjs.org/): `npm install slicer --save`
- [bower](http://bower.io/): `bower install slicer --save`


## Usage


**Print media query**

	@include print {
		content: 'Viewing this in print mode!';
		color: red;
	}



### Media Types

Based on the [W3C Media Queries 4 Draft](http://dev.w3.org/csswg/mediaqueries/#media-types), there are a total of 4 media types we use:

- all
- print
- screen
- speech


### Browser Support

- Google Chrome (obviously)
- Mozilla Firefox
- Safari
- Opera
- Internet Explorer 9+ (surprisingly)



## Changelog

**Version 2.0.0**

- Rewritten from the ground up, with support for Sass Maps
- Adds support for vertical breakpoints
- Adds print media query
