# wrap-options

## Exemple Usage

```js
var Options = require('wrap-options');

function MyConstructor(options) {
    var wrappedOptions = new Options(options);
    this.name = wrappedOptions.require('name');
    this.isVisible = wrappedOptions.get('isVisible', false);
}

var result = new MyConstructor({ name: 'me' });

console.log(result);
// { name: 'me', isVisible: false }
```

## API

### .get(name, defaultValue)
Return the option value if present, otherwise return the defaultValue.

### .require(name)
Return the option value if present, otherwise throw an error.

### .has(name)
Check if the option was passes. Return a boolean.

### .map(name, iterator, context)
Same as
```js
.get(name, []).map(iterator, context)
```

### .mapConstructor(name, constructor)
Same as:
```js
.get(name, []).map(function (data) {
    return new constructor(data);
})
```
