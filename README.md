sequeue
=======

```bash
# installation
$ npm install sequeue
```

CommonJS

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
  function(next) {
    console.log(2);
    next();
  }
]);

// will output:
// 1
// 2
```

Wihout module loader
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
    function(next) {
      console.log(2);
      next();
    }
  ]);

  // will output:
  // 1
  // 2

})(window);
```

Sequeue is working fine with :
- commonJS (node.js/io.js context & [http://browserify.org/](browserify))
- AMD ([http://requirejs.org/](require.js))
- wihout using any module loader via `window.sequeue`
