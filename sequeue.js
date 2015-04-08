'use strict';



var sequeue = {
  _queues: {},


  /**
   * create a new queue
   *
   * @param {array<function>} list a list of functions
   * @return {string} the generated uuid for the queue
   */
  add: function(list) {
    var queueId = this._createId(); // create UUID

    // create queue object
    this._queues[queueId] = {
      step: 0,
      list: list.concat(this._remove.bind(this, queueId))
    };

    // start queue
    process.nextTick(this._next.bind(this, queueId));

    return queueId;
  },

  /**
   * creates a UUIDv4
   * thanks to https://gist.github.com/jed/982883
   *
   * @return {string} the generated UUID
   */
  _createId: function(a) {
    return a ?
      (a ^ Math.random() * 16 >> a / 4).toString(16) :
      ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, this._createId);
  },

  /**
   * queue is finished so just remove it from the queue list
   *
   * @param {string} queueId UUID of the queue
   */
  _remove: function(queueId) {
    this._queues[queueId] = undefined;
  },

  /**
   * go to the next step of the queue
   *
   * @param {string} queueId UUID of the queue
   */
  _next: function(queueId) {
    var queue = this._queues[queueId];

    queue.list[queue.step++](this._next.bind(this, queueId));
  }
};

module.exports = sequeue.add.bind(sequeue);
