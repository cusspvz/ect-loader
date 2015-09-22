# [ect](http://ectjs.com/)-loader
[ect](http://ectjs.com/) templates compiler for webpack

## Motivation
[ectjs](http://ectjs.com/) is one of the fastest templating libraries out there,
but not so well known by the community.

As there wasn't a loader for webpack, I've decided to build one before going to
bed. Here it is, show your apretiation by starring the project, tweeting and
enjoy using it.

## Installation

```
npm i --save-dev ect-loader
```

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### Example config

This webpack config can compile ect templates for you to use on your browser
without having to load `ECT` and `CoffeeScript` browser versions.

``` javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.ect$/, loader: "ect" }
    ]
  }
};
```

## Minification

This loader minifies template before compiling in case you're running with
performance enhancment option (`webpack -p`).

It works by cutting off spaces between **HTML tags** and line-breaks.

### Source Example
```
<div id="testing">
    <%- __ "Read the docs" %>
</div>
```

### Minified output
```
<div id="testing"> Lê a documentação </div>
```
