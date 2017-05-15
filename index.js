var yo = require('yo-yo')
var nanobus = require('nanobus')

var Collection = function (state) {
  this.state = state || {}
  this.bus = nanobus()
}

Collection.prototype.component = function (c, options) {
  var self = this

  if (!options) options = {}

  var el = c(this.state, this.bus)
  if (options.mount) document.querySelector(options.mount).appendChild(el)

  this.bus.on('rerender', function () {
    yo.update(el, c(self.state, self.bus), options)
  })
}

Collection.prototype.store = function (cb) {
  cb(this.state, this.bus)
}

module.exports = Collection
