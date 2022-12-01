const mix = require('laravel-mix');
const path = require('path');

/*
const dotenvExpand = require('dotenv-expand');
dotenvExpand(require('dotenv').config({
    path: '../../.env',
    debug: true
}));

//require('laravel-mix-merge-manifest');
//mix.setPublicPath('../../../public_html').mergeManifest();
*/
var public_path = 'public';


mix.js('Resources/js/app.js', 'js');
mix.sass('Resources/scss/app.scss', 'css');

mix.setPublicPath(public_path);

mix.extract();

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    },

});

//mix.version();
mix.sourceMaps();
