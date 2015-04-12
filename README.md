sequeue
=======

```bash
# installation
$ npm install sequeue
```

Sequeue can be used in node, with AMD ([require.js](http://requirejs.org/)) or without any module loader.


Node:

```js
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

AMD:

```js
define(['./sequeue'], function (sequeue) {
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
});
```

Without module loader:

```js
(function(window) {
  // usage
  var sequeue = window.sequeue;

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
})(window);
```
