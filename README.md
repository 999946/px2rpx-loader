# px2rpx-loader

a [webpack](http://webpack.github.io/) loader for [px2rpx](https://github.com/aOrz/px2rpx)

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/px2rpx-loader.svg
[npm-url]: https://npmjs.org/package/px2rpx-loader
[travis-image]: https://img.shields.io/travis/Jinjiang/px2rpx-loader.svg
[travis-url]: https://travis-ci.org/Jinjiang/px2rpx-loader
[downloads-image]: http://img.shields.io/npm/dm/px2rpx-loader.svg
[downloads-url]: https://npmjs.org/package/px2rpx-loader

## Install

`npm install px2rpx-loader`

## webpack config

```
{
  loaders: [{ test: /\.css$/, use: {
    loader: 'px2rpx-loader',
    options: {
      baseDpr: 2,
      rpxUnit: 1,
      patterns: [{
        test: 'mp-weui/*',
        options: {
          baseDpr: 1,
          rpxUnit: 0.5
        }
      }]
    }
  }}]
}
```

Please see [px2rpx](https://github.com/aOrz/px2rpx) for more information about query parameters of px2rpx.
