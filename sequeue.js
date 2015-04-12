'use strict';



(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.sequeue = factory();
  }
}(this, function () {

  /**
   * handles the queue
   *
   * @param {array<function>} queue list of functions
   */
  var sequeue = function(queue) {
    queue = [].concat(queue);
    setTimeout(queue.shift().bind(null, sequeue.bind(null, queue)), 0);
  };

  return sequeue;
}));
