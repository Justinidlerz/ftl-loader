# ftl-loader for webpack

Freemarker loader for [webpack](http://webpack.github.io/). Uses [Freemarker](http://freemarker.org) function to compile templates.

To use [Freemarker.js by ijse](https://github.com/ijse/freemarker.js) use 1.2 branch.

## Installation

`npm install ftl-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var template = require("ftl!./file.ejs");
// => returns the template function compiled with ftl templating engine.

// And then use it somewhere in your code
template(data) // Pass object with data

// Child Templates
// path is relative to where webpack is being run
<#include  templates/child >
```

## Options

Following options can be specified in query:

`htmlmin` — see [htmlminify section](#htmlminify)

## htmlminify

```javascript
module: {
  loaders: [
    {test: /\.ejs$/, loader: 'ftl?htmlmin'} // enable here
  ]
},
'ftl-loader': {
  'htmlmin': true, // or enable here  
  'htmlminOptions': {
    removeComments: true
  }
}
```

See [all options reference](https://github.com/kangax/html-minifier#options-quick-reference)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)



