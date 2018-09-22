import minify from 'rollup-plugin-babel-minify';

export default {
	input:    "index.js",
	plugins:  [minify({comments:false, banner:"/*utime*/"})],
	output:   {
		file:   'bundle.js',
		format: "cjs"
	}
}

