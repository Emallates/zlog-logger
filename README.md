# zlogjs-logger
[![Version][version-svg]][package-url]&nbsp;[![Build Status][travis-svg]][travis-url]</br>[![ISSUES][issues-url]][issues-url]&nbsp;[![FORKS][forks-url]][forks-url]&nbsp;[![STARS][stars-url]][stars-url]&nbsp;[![Downloads][downloads-image]][downloads-url]</br>[![License][license-image]][license-url]

[version-svg]: https://img.shields.io/npm/v/zlogjs-logger.svg?style=flat-square
[package-url]: https://npmjs.org/package/zlogjs-logger
[travis-svg]: https://img.shields.io/travis/Emallates/zlogjs-logger/master.svg?style=flat-square
[travis-url]: https://api.travis-ci.org/Emallates/zlogjs-logger.svg?branch=master
[issues-url]:https://img.shields.io/github/issues/Emallates/zlogjs-logger.svg?style=flat-square
[forks-url]:https://img.shields.io/github/forks/Emallates/zlogjs-logger.svg?style=flat-square
[stars-url]:https://img.shields.io/github/stars/Emallates/zlogjs-logger.svg?style=flat-square
[downloads-image]: https://img.shields.io/npm/dm/zlogjs-logger.svg?style=flat-square
[downloads-url]: http://npm-stat.com/charts.html?package=zlogjs-logger
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://raw.githubusercontent.com/Emallates/zlogjs-logger/master/LICENSE

##DESCRIPTION
logger

<!--NO_HTML-->
Table of Contents
-----------------

1. [Prerequisites](#prerequisites)
1. [Installation](#installation)
1. [Configuration](#configuration)
1. [Issues or Suggestions](#issues-or-suggestions)
1. [License](#license)

<!--/NO_HTML-->

## Prerequisites
Clients should be registered with the regarding service to use log service

## Installation

Install stable version from NPM:
```
npm install zlogjs-logger --save
```


## Configuration

You have to set the mode and proide the api information.

#### Logger && Log

```javascript
//express
app.use(logger(conf))
//manual use
logger(//params);
```
#### Log using service

```javascript
//config
var conf = {
       appId:'app_id',
       apiKey:'api_key',
       ip:'host', port:'port',
       mode : 'central', || leave mode 
} 
app.use(logger(conf))

```
#### Log using local file

```javascript
//config
var conf = {
       appId:'app_id',
       apiKey:'api_key',
       ip:'host', port:'port',
       mode : 'local', || leave mode 
}
app.use(logger(conf))

```



## License

**[MIT](./LICENSE)**
