const yo = require('yo-yo')
const nanobus = require('nanobus')

const Collection = function (state) {
  this.state = state || {}
  this.bus = nanobus()
}

Collection.prototype.component = function (c, options) {
  if (!options) options = {}

  let el = c(this.state, this.bus)
  if (options.mount) document.querySelector(options.mount).appendChild(el)

  this.bus.on('rerender', () => {
    yo.update(el, c(this.state, this.bus), options)
  })
}

Collection.prototype.store = function (cb) {
  cb(this.state, this.bus)
}

module.exports = Collection
