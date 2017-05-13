# yo-yo-collection
> Keep a collection of [`yo-yo`](https://github.com/maxogden/yo-yo) components.

## Install
```
npm install yo-yo-collection
```

## Why
Needed a way to handle state and update of multiple small `yo-yo` components. Inspired by [choo](https://github.com/yoshuawuyts/choo).

## Example
```javascript
const collection = new Collection()

// Add a component to the collection
collection.component(function (state, bus) {
  return yo`<div>${state.data}</div>`
})

// Add a store
collection.store(function (state, bus) {
  bus.on('data', function (data) {
    state.data = data
    bus.emit('rerender')
  })
})
```

## License
MIT
