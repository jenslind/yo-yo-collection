const yo = require('yo-yo')
const nanobus = require('nanobus')

const Collection = function (state) {
  this.state = state || {}
  this.bus = nanobus()
}

Collection.prototype.component = function (c, update, options) {
  if (!options) options = {}

  let el = c(this.state, this.bus)
  if (options.mount !== false) document.body.appendChild(el)

  this.bus.on('rerender', () => {
    if (typeof update === 'function') {
      update(this.state, this.bus)
    } else {
      yo.update(el, c(this.state, this.bus), options)
    }
  })
}

Collection.prototype.store = function (cb) {
  cb(this.state, this.bus)
}

module.exports = Collection
