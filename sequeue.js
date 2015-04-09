'use strict';



var sequeue = {
  _queues: [],


  /**
   * create a new queue
   *
   * @param {array<function>} list a list of functions
   * @return {string} the generated uuid for the queue
   */
  add: function(list) {
    // create queue object
    var queueId = this._queues.push({
      step: 0,
      list: list.concat(this._remove.bind(this, queueId))
    }) - 1;

    // start queue
    process.nextTick(this._next.bind(this, queueId));

    return queueId;
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
