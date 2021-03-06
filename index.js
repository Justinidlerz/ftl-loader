var utils = require('loader-utils'),
    path = require('path'),
    htmlmin = require('html-minifier'),
    merge = require('merge'),
    Freemarker = require('freemarker.js');


var fm = new Freemarker({
    viewRoot: "/"
})

module.exports = function(source) {
    this.cacheable && this.cacheable();
    var opts = merge(this.options['ftl-loader'] || {}, utils.parseQuery(this.query));
    opts.client = true;

    // Skip compile debug for production when running with
    // webpack --optimize-minimize
    if (this.minimize && opts.compileDebug === undefined) {
        opts.compileDebug = false;
    }


    if (opts.htmlmin) {
        source = htmlmin.minify(source, opts['htmlminOptions'] || {});
    }

    var template = fm.renderSync(this.resourcePath, opts);


    return 'module.exports = ' + template;
};
