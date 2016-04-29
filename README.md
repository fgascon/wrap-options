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

## Base API

### .get(name, defaultValue)
Return the option value if present, otherwise return the defaultValue.

### .require(name)
Return the option value if present, otherwise throw an error.

### .has(name)
Check if the option was passes. Return a boolean.

## Shorthand functions

### .map(name, iterator, context)
Same as
```js
options.get(name, []).map(iterator, context)
```

### .mapConstructor(name, constructor)
Same as:
```js
options.get(name, []).map(function (data) {
    return new constructor(data);
})
```

### .getOptions(name, defaultValue)
Same as
```js
new Options(options.get(name, defaultValue))
```

### .requireOptions(name)
Same as
```js
new Options(options.require(name))
```

### .mapOptions(name)
Same as
```js
options.get(name, []).map(function (data) {
    return new Options(data);
})
```
