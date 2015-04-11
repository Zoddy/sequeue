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
  function(next) {
    console.log(2);
    next();
  }
]);

// will output:
// 1
// 2
```

Sequeue is working fine with :
- commonJS (node.js/io.js context & [http://browserify.org/](browserify))
- AMD ([http://requirejs.org/](require.js))
- wihout using any module loader via `window.sequeue`
