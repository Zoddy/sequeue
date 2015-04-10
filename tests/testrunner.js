'use strict';



new (require('mocha'))({
  reporter: 'landing',
  ui: 'bdd'
}).addFile(__dirname + '/test.js').run(function(failures){
  process.on('exit', function() {
    process.exit(failures);
  });
});
