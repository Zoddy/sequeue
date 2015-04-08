sequeue
=======

```bash
# installation
$ npm install sequeue
```

```js
// usage
var sequeue = require('./sequeue');

sequeue([
  function(next) {
    setTimeout(function() {
      console.log(1);
      next();
    }, 1000);
  },
  function(next) {
    console.log(2);
    next();
  }
]);

// will output:
// 1
// 2
```
