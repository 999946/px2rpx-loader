var loaderUtils = require('loader-utils')
var Px2rpx = require('px2rpx')

module.exports = function (source, target) {
  var options = loaderUtils.getOptions(this);

  var px2rpxOptions = options;
  for(var index in options.patterns) {
    const pattern = options.patterns[index];
    if(target.file && new RegExp(pattern.test).test(target.file)) {
      px2rpxOptions = pattern.options;
      break;
    }
  }
  
  var px2rpxIns = new Px2rpx(px2rpxOptions);
  return px2rpxIns.generaterpx(source);
}
