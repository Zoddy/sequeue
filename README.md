sequeue
=======

```bash
# installation
$ npm install sequeue
```

```js
// usage
var sequeue = require('sequeue');

sequeue([
  function(next) {
    setTimeout(function() {
      console.log(1);
      next();
    }, 1000);
  },
  function() {
    console.log(2);
    // last function should not call next()
    // otherwise you will get an "undefined is not a function"
  }
]);

// will output:
// 1
// 2
```
